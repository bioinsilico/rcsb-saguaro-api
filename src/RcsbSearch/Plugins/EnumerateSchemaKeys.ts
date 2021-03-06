import {compileFromFile, Options} from "json-schema-to-typescript"
import * as fs from "fs";
import * as _ from "lodash";

function replace(value: string): string{
    const replace: RegExp = new RegExp(/"|\s|;|\?|:|\||\(|\)/gi);
    return value.replace(replace,"");
}

function camelCase(value: string): string{
    const val: string =  _.camelCase(value);
    return val.charAt(0).toUpperCase() + val.slice(1)
}

function generateEnum(interfaceFile: string, constantsFile: string): void{
    const file:string = fs.readFileSync(interfaceFile, "utf-8");
    const regExpUnion = new RegExp(/(\w+)(\??)(:)(\s)(")/);
    const regExpSingleKey = new RegExp(/(\w+)(\??)(:)(\s?\(?)$/);
    const regExpSingleUnion = new RegExp(/(\s+)(\|)(\s)(")([a-zA-Z0-9-_]+)(")(;?)$/);
    const keyUnionMap: Map<string, Set<string>> = new Map<string, Set<string>>();
    let multiLineUnionFlag: boolean = false;
    let holdKey: string;
    file.split("\n").forEach((line, n)=>{
        if(regExpUnion.test(line)){
            const keyUnion: string[] = line.split(":");
            if(keyUnion.length != 2){
                throw `Unknown line format in (line number ${n}): ${line}`;
            }else{
                const key: string = replace(keyUnion[0]);
                const union: string = keyUnion[1];
                if(!keyUnionMap.has(key))
                    keyUnionMap.set(key, new Set<string>());
                union.split("|").forEach(unionValue=>{
                    keyUnionMap.get(key)?.add(replace(unionValue));
                });
            }
        }else if(regExpSingleKey.test(line)){
            multiLineUnionFlag = true;
            holdKey = replace(line);
        }else if(multiLineUnionFlag && regExpSingleUnion.test(line)){
            if(!keyUnionMap.has(holdKey))
                keyUnionMap.set(holdKey, new Set<string>());
            keyUnionMap.get(holdKey)?.add(replace(line));
        }else{
            multiLineUnionFlag = false;
            holdKey = "";
        }
    });
    const enums: string[] = [];
    keyUnionMap.forEach((unionValues,key)=>{
        enums.push(`export enum ${camelCase(key)} {`);
        unionValues.forEach(uV=>{
            enums.push(`    ${camelCase(uV)} = "${uV}",`);
        });
        enums[enums.length-1] = enums[enums.length-1].substring(0, enums[enums.length-1].length - 1);
        enums.push("}\n");
    });
    fs.appendFileSync(constantsFile, `${enums.join("\n")}\n`);
}

export async function generateInterface(schemaFile: string, interfaceFile: string, constantsFile: string, options?:Partial<Options>): Promise<string>{
    const schema: string = await compileFromFile(schemaFile, {cwd:"./search_schema", ...options});
    fs.writeFileSync(interfaceFile, schema);
    generateEnum(interfaceFile, constantsFile);
    return interfaceFile;
}

