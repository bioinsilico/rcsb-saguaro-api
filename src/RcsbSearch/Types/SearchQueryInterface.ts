/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Allows obtaining the aggregations relevant to the search query. When absent, aggregations are not returned. Multi-dimensional aggregations are allowed.
 */
export type RequestOptionsFacets = [
  TermsFacet | HistogramFacet | DateHistogramFacet | RangeFacet | DateRangeFacet | CardinalityFacet | FilterFacet,
  ...(TermsFacet | HistogramFacet | DateHistogramFacet | RangeFacet | DateRangeFacet | CardinalityFacet | FilterFacet)[]
];

/**
 * Provides a generic interface to represent the RCSB Search API query language.
 */
export interface SearchQuery {
  /**
   * Information about the query.
   */
  request_info?: {
    /**
     * The ID of a query is globally unique and unambiguously identifies a query.
     */
    query_id?: string;
    /**
     * The origin of the query: <br /> - 'mypdb' indicates that the query was run by the MyPDB service that allows users to have searches run periodically and have the results emailed to them; <br /> - 'system' indicates programmatic access.
     */
    src?: "ui" | "mypdb_service" | "mypdb_user" | "rcsb_test";
  };
  request_options?: {
    facets?: RequestOptionsFacets;
    /**
     * When set to true, all hits are returned as a result set.
     */
    return_all_hits?: boolean;
    /**
     * Allows obtaining the counts only instead of identifiers. When absent, search result identifiers are returned.
     */
    return_counts?: boolean;
    /**
     * Sorting parameters.
     */
    sort?: [
      {
        /**
         * The sort field. Supported values include “score“ or field name.
         */
        sort_by: string;
        /**
         * The order in which to sort. Can either be “asc” or “desc”.
         */
        direction?: "asc" | "desc";
      },
      ...{
        /**
         * The sort field. Supported values include “score“ or field name.
         */
        sort_by: string;
        /**
         * The order in which to sort. Can either be “asc” or “desc”.
         */
        direction?: "asc" | "desc";
      }[]
    ];
    /**
     * Specifies a range in the query result set. When absent, returns only the top 10 entries, e.g. 'start' defaults to 0, and 'rows' defaults to 10.
     */
    pager?: {
      /**
       * The offset from the first result.
       */
      start?: number;
      /**
       * Number of entries returned in the result set.
       */
      rows?: number;
    };
    /**
     * Scoring algorithm to be used for scores calculation of the final result set.
     */
    scoring_strategy?: "combined" | "sequence" | "seqmotif" | "strucmotif" | "structure" | "chemical" | "text";
  };
  /**
   * Specifies the type of the returned identifiers.
   */
  return_type: "entry" | "polymer_entity" | "non_polymer_entity" | "polymer_instance" | "assembly";
  /**
   * Any valid query string as per the Search Aggregator query syntax is permitted. A search consists of one or more groups combined.
   */
  query?: GroupNode | TerminalNode;
}
export interface TermsFacet {
  /**
   * Specifies the type of aggregating data for analysis.
   */
  aggregation_type: "terms";
  attribute: string;
  /**
   * The minimum number of items in the bin required for the bin to be returned.
   */
  min_interval_population?: number;
  /**
   * Maximum number of intervals to return for a given facet.
   */
  max_num_intervals?: number;
  filter?: TextQueryParameters;
  facets?: RequestOptionsFacets;
}
export interface TextQueryParameters {
  /**
   * The search term(s). Can be a single or multiple words, numbers, dates, date math expressions, or ranges.
   */
  value?: string | number | boolean | Range | DateRange | [string | number | number, ...(string | number | number)[]];
  /**
   * The search field. Must exist in the current schema.
   */
  attribute?: string;
  /**
   * Indicates if the operator is negated.
   */
  negation?: boolean;
  /**
   * The operator allows specifying the evaluation expression.
   */
  operator?:
    | "equals"
    | "greater"
    | "greater_or_equal"
    | "less"
    | "less_or_equal"
    | "range"
    | "range_closed"
    | "contains_words"
    | "contains_phrase"
    | "exact_match"
    | "in"
    | "exists";
  /**
   * Allows case sensitive matching of the value with the indexed attribute values when set to true. Default is false which means the case insensitivity of matching.
   */
  case_sensitive?: boolean;
}
export interface Range {
  /**
   * The starting value of the range.
   */
  from?: number;
  /**
   * Indicated an inclusive lower bound.
   */
  include_lower?: boolean;
  /**
   * The end of the range.
   */
  to?: number;
  /**
   * Indicated an inclusive upper bound.
   */
  include_upper?: boolean;
}
export interface DateRange {
  /**
   * The starting value of the range.
   */
  from?: string;
  /**
   * Indicated an inclusive lower bound.
   */
  include_lower?: boolean;
  /**
   * The end of the range.
   */
  to?: string;
  /**
   * Indicated an inclusive upper bound.
   */
  include_upper?: boolean;
}
export interface HistogramFacet {
  /**
   * Specifies the type of aggregating data for analysis.
   */
  aggregation_type: "histogram";
  attribute: string;
  /**
   * The bin size.
   */
  interval: number | number;
  /**
   * The minimum number of items in the bin required for the bin to be returned.
   */
  min_interval_population?: number;
  /**
   * Maximum number of intervals to return for a given facet.
   */
  max_num_intervals?: number;
  filter?: TextQueryParameters;
  facets?: RequestOptionsFacets;
}
export interface DateHistogramFacet {
  /**
   * Specifies the type of aggregating data for analysis.
   */
  aggregation_type: "date_histogram";
  attribute: string;
  /**
   * The bin size.
   */
  interval: "year";
  /**
   * The minimum number of items in the bin required for the bin to be returned.
   */
  min_interval_population?: number;
  /**
   * Maximum number of intervals to return for a given facet.
   */
  max_num_intervals?: number;
  filter?: TextQueryParameters;
  facets?: RequestOptionsFacets;
}
export interface RangeFacet {
  /**
   * Specifies the type of aggregating data for analysis.
   */
  aggregation_type: "range";
  attribute: string;
  /**
   * A set of ranges, each representing a bucket. Note that this aggregation includes the 'from' value and excludes the 'to' value for each range.
   */
  ranges: [
    {
      /**
       * The starting value of the range.
       */
      from?: number;
      /**
       * The end of the range.
       */
      to?: number;
      [k: string]: unknown;
    },
    ...{
      /**
       * The starting value of the range.
       */
      from?: number;
      /**
       * The end of the range.
       */
      to?: number;
      [k: string]: unknown;
    }[]
  ];
  /**
   * The minimum number of items in the bin required for the bin to be returned.
   */
  min_interval_population?: number;
  /**
   * Maximum number of intervals to return for a given facet.
   */
  max_num_intervals?: number;
  filter?: TextQueryParameters;
  facets?: RequestOptionsFacets;
}
export interface DateRangeFacet {
  /**
   * A range aggregation that is dedicated for date values.
   */
  aggregation_type: "date_range";
  attribute: string;
  /**
   * A set of ranges, each representing a bucket. Note that this aggregation includes the 'from' value and excludes the 'to' value for each range.
   */
  ranges: [
    {
      /**
       * The starting value of the range.
       */
      from?: string;
      /**
       * The end of the range.
       */
      to?: string;
      [k: string]: unknown;
    },
    ...{
      /**
       * The starting value of the range.
       */
      from?: string;
      /**
       * The end of the range.
       */
      to?: string;
      [k: string]: unknown;
    }[]
  ];
  /**
   * The minimum number of items in the bin required for the bin to be returned.
   */
  min_interval_population?: number;
  /**
   * Maximum number of intervals to return for a given facet.
   */
  max_num_intervals?: number;
  filter?: TextQueryParameters;
  facets?: RequestOptionsFacets;
}
export interface CardinalityFacet {
  /**
   * Specifies the type of aggregating data for analysis.
   */
  aggregation_type: "cardinality";
  attribute: string;
  filter?: TextQueryParameters;
  facets?: RequestOptionsFacets;
}
export interface FilterFacet {
  filter: TextQueryParameters;
  facets: RequestOptionsFacets;
}
export interface GroupNode {
  /**
   * The type of the node.
   */
  type: "group";
  /**
   * Boolean operator connects and defines the relationship between the child nodes.
   */
  logical_operator: "or" | "and";
  nodes: [TerminalNode | GroupNode, ...(TerminalNode | GroupNode)[]];
  /**
   * A textual description of what the node represents.
   */
  label?: string;
}
/**
 * A terminal node is an atomic-level element within a query.
 */
export interface TerminalNode {
  /**
   * The type of the node.
   */
  type: "terminal";
  /**
   * An ID that is unique within the enclosing query.
   */
  node_id?: number;
  /**
   * The search service that is responsible for running the query and retrieving the search results.
   */
  service: "text" | "sequence" | "structure" | "chemical" | "seqmotif" | "strucmotif";
  /**
   * Search parameters. Parameters are specific to the search service.
   */
  parameters?:
    | TextQueryParameters
    | SequenceQueryParameters
    | StructureQueryParameters
    | ChemicalQueryFormulaParameters
    | ChemicalQueryDescriptorParameters
    | SeqmotifQueryParameters
    | StrucmotifQueryParameters;
  /**
   * A textual description of what the node represents.
   */
  label?: string;
  [k: string]: unknown;
}
export interface SequenceQueryParameters {
  /**
   * Protein sequence.
   */
  value: string;
  /**
   * Identifies a specific search scope.
   */
  target: "pdb_protein_sequence" | "pdb_rna_sequence" | "pdb_dna_sequence";
  /**
   * Hits with sequence identity below this cutoff value are filtered out (range 0-1)
   */
  identity_cutoff?: number;
  /**
   * Hits with e-value above this cutoff value are filtered out
   */
  evalue_cutoff?: number;
}
export interface StructureQueryParameters {
  /**
   * Compound structure identifier that includes PDB code and either assembly or chain identifier.
   */
  value: {
    entry_id: string;
    asym_id?: string;
    assembly_id?: string;
  };
  /**
   * The operator allows specifying the evaluation expression.
   */
  operator?: "strict_shape_match" | "relaxed_shape_match";
}
export interface ChemicalQueryFormulaParameters {
  /**
   * Type of chemical search.
   */
  type: "formula";
  /**
   * Molecular formula.
   */
  value: string;
  /**
   * Find formulas satisfying only a subset of the query conditions.
   */
  match_subset?: boolean;
}
export interface ChemicalQueryDescriptorParameters {
  /**
   * Type of chemical search.
   */
  type: "descriptor";
  /**
   * SMILES or InChI chemical descriptor.
   */
  value: string;
  /**
   * Type of chemical descriptor (SMILES or InChI).
   */
  descriptor_type: "SMILES" | "InChI";
  /**
   * Qualitative graph matching or fingerprint comparison criteria, with adding the aromatic criteria. The following graph matching searches use a fingerprint prefilter so these are designed to find only similar molecules. These graph matching comparisons include: graph-exact (atom type, formal charge, aromaticity, bond order, atom/bond stereochemistry, valence degree, atom hydrogen count), graph-strict (atom type, formal charge, aromaticity, bond order, atom/bond stereochemistry, ring membership and valence degree), graph-relaxed (atom type, formal charge, bond type), graph-relaxed-stereo (atom type, formal charge, bond type, atom/bond stereochemistry), fingerprint-similarity (TREE and MACCS). The following graph matching searches perform an exhaustive substructure search with no pre-screening. These substructure graph matching comparisons include: sub-struct-graph-exact (atom type, formal charge, aromaticity, bond order, atom/bond stereochemistry, valence degree, atom hydrogen count), sub-struct-graph-strict (atom type, formal charge, aromaticity, bond order, atom/bond stereochemistry, ring membership and valence degree), sub-struct-graph-relaxed (atom type, formal charge, bond type), sub-struct-graph-relaxed-stereo (atom type, formal charge, bond type, atom/bond stereochemistry)
   */
  match_type?:
    | "graph-exact"
    | "graph-strict"
    | "graph-relaxed"
    | "graph-relaxed-stereo"
    | "fingerprint-similarity"
    | "sub-struct-graph-exact"
    | "sub-struct-graph-strict"
    | "sub-struct-graph-relaxed"
    | "sub-struct-graph-relaxed-stereo";
}
export interface SeqmotifQueryParameters {
  /**
   * Protein sequence pattern.
   */
  value: string;
  /**
   * Identifies a specific search scope.
   */
  target: "pdb_protein_sequence" | "pdb_rna_sequence" | "pdb_dna_sequence";
  /**
   * Identifies the pattern type of the value parameter.
   */
  pattern_type: "simple" | "prosite" | "regex";
}
export interface StrucmotifQueryParameters {
  value: {
    /**
     * Provides the information from which will defined the query motif. Must either be: 1) the entry identifier or 2) CIF structure data.
     */
    data: string;
    /**
     * Provides the set of residue identifiers that define the query. Can be empty iff an extracted motif is submitted via the data property.
     */
    residue_ids?: ResidueIdentifier[];
    [k: string]: unknown;
  };
  /**
   * Allowed backbone distance tolerance in Angstrom.
   */
  backbone_distance_tolerance?: number;
  /**
   * Allowed side-chain distance tolerance in Angstrom.
   */
  side_chain_distance_tolerance?: number;
  /**
   * Allowed angle tolerance in multiples of 20 degrees.
   */
  angle_tolerance?: number;
  /**
   * Threshold above which hits will be filtered.
   */
  score_cutoff?: number;
  /**
   * Threshold above which hits will be filtered by RMSD.
   */
  rmsd_cutoff?: number;
  exchanges?: {
    residue_id?: ResidueIdentifier;
    allowed?: (
      | "ALA"
      | "CYS"
      | "ASP"
      | "GLU"
      | "PHE"
      | "GLY"
      | "HIS"
      | "ILE"
      | "LYS"
      | "LEU"
      | "MET"
      | "ASN"
      | "PRO"
      | "GLN"
      | "ARG"
      | "SER"
      | "THR"
      | "VAL"
      | "TRP"
      | "TYR"
      | "A"
      | "C"
      | "DA"
      | "DC"
      | "DG"
      | "G"
      | "T"
      | "U"
      | "UNK"
      | "N"
      | "?"
    )[];
    [k: string]: unknown;
  }[];
  /**
   * Optionally: Stop after accepting this many hits.
   */
  limit?: number;
  /**
   * How to score hits. The default 'DESCRIPTOR' will use data from geometric descriptors to score hits. This is fast but less accurate. The 'ALIGNMENT' option will load structure data of all potential hits and align each candidate to the query motif. The resulting RMSD values are more descriptive, especially when a suitable 'atom_pairing_strategy' is specified. As a trade-off, the 'ALIGNMENT' option is 2-3 times slower.
   */
  scoring_strategy?: "DESCRIPTOR" | "ALIGNMENT";
  /**
   * If scoring strategy is based on alignment: Which atoms to pair.
   */
  atom_pairing_strategy?: "ALL" | "BACKBONE" | "SIDE_CHAIN" | "PSEUDO_ATOMS";
  /**
   * Specifies how query motifs are pruned (i.e. simplified). The default option 'KRUSKAL' determines the minimum spanning tree of residue pairs in the query. This leads to less stringent queries and faster results.
   */
  motif_pruning_strategy?: "NONE" | "KRUSKAL";
  /**
   * When set: Consider only structures in the specified set.
   */
  whitelist?: string[];
  /**
   * Specified entry identifiers will not be evaluated.
   */
  blacklist?: string[];
}
export interface ResidueIdentifier {
  /**
   * Chain identifier of this residue.
   */
  label_asym_id: string;
  /**
   * Identifier of the assembly generating operation that was used to determine the coordinates of this residue. Chaining of operations is expressed by '1stx2nd'.
   */
  struct_oper_id?: string;
  /**
   * Sequence identifier of this residue.
   */
  label_seq_id: number;
}
