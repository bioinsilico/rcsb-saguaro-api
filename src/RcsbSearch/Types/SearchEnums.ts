export enum Src {
    Ui = "ui",
    MypdbService = "mypdb_service",
    MypdbUser = "mypdb_user",
    RcsbTest = "rcsb_test"
}

export enum Direction {
    Asc = "asc",
    Desc = "desc"
}

export enum ScoringStrategy {
    Combined = "combined",
    Sequence = "sequence",
    Seqmotif = "seqmotif",
    Strucmotif = "strucmotif",
    Structure = "structure",
    Chemical = "chemical",
    Text = "text",
    Descriptor = "DESCRIPTOR",
    Alignment = "ALIGNMENT"
}

export enum ReturnType {
    Entry = "entry",
    PolymerEntity = "polymer_entity",
    NonPolymerEntity = "non_polymer_entity",
    PolymerInstance = "polymer_instance",
    Assembly = "assembly"
}

export enum AggregationType {
    Terms = "terms",
    Histogram = "histogram",
    DateHistogram = "date_histogram",
    Range = "range",
    DateRange = "date_range",
    Cardinality = "cardinality"
}

export enum Operator {
    Equals = "equals",
    Greater = "greater",
    GreaterOrEqual = "greater_or_equal",
    Less = "less",
    LessOrEqual = "less_or_equal",
    Range = "range",
    RangeClosed = "range_closed",
    ContainsWords = "contains_words",
    ContainsPhrase = "contains_phrase",
    ExactMatch = "exact_match",
    In = "in",
    Exists = "exists",
    StrictShapeMatch = "strict_shape_match",
    RelaxedShapeMatch = "relaxed_shape_match"
}

export enum Interval {
    Year = "year"
}

export enum Type {
    Group = "group",
    Terminal = "terminal",
    Formula = "formula",
    Descriptor = "descriptor"
}

export enum LogicalOperator {
    Or = "or",
    And = "and"
}

export enum Service {
    Text = "text",
    Sequence = "sequence",
    Structure = "structure",
    Chemical = "chemical",
    Seqmotif = "seqmotif",
    Strucmotif = "strucmotif"
}

export enum Target {
    PdbProteinSequence = "pdb_protein_sequence",
    PdbRnaSequence = "pdb_rna_sequence",
    PdbDnaSequence = "pdb_dna_sequence"
}

export enum DescriptorType {
    Smiles = "SMILES",
    InChI = "InChI"
}

export enum MatchType {
    GraphExact = "graph-exact",
    GraphStrict = "graph-strict",
    GraphRelaxed = "graph-relaxed",
    GraphRelaxedStereo = "graph-relaxed-stereo",
    FingerprintSimilarity = "fingerprint-similarity",
    SubStructGraphExact = "sub-struct-graph-exact",
    SubStructGraphStrict = "sub-struct-graph-strict",
    SubStructGraphRelaxed = "sub-struct-graph-relaxed",
    SubStructGraphRelaxedStereo = "sub-struct-graph-relaxed-stereo"
}

export enum PatternType {
    Simple = "simple",
    Prosite = "prosite",
    Regex = "regex"
}

export enum Allowed {
    Ala = "ALA",
    Cys = "CYS",
    Asp = "ASP",
    Glu = "GLU",
    Phe = "PHE",
    Gly = "GLY",
    His = "HIS",
    Ile = "ILE",
    Lys = "LYS",
    Leu = "LEU",
    Met = "MET",
    Asn = "ASN",
    Pro = "PRO",
    Gln = "GLN",
    Arg = "ARG",
    Ser = "SER",
    Thr = "THR",
    Val = "VAL",
    Trp = "TRP",
    Tyr = "TYR",
    A = "A",
    C = "C",
    Da = "DA",
    Dc = "DC",
    Dg = "DG",
    G = "G",
    T = "T",
    U = "U",
    Unk = "UNK",
    N = "N"
}

export enum AtomPairingStrategy {
    All = "ALL",
    Backbone = "BACKBONE",
    SideChain = "SIDE_CHAIN",
    PseudoAtoms = "PSEUDO_ATOMS"
}

export enum MotifPruningStrategy {
    None = "NONE",
    Kruskal = "KRUSKAL"
}

export enum ResultType {
    Entry = "entry",
    PolymerEntity = "polymer_entity",
    NonPolymerEntity = "non_polymer_entity",
    PolymerInstance = "polymer_instance",
    Assembly = "assembly"
}

export enum ServiceType {
    Text = "text",
    Sequence = "sequence",
    Structure = "structure",
    Chemical = "chemical",
    Seqmotif = "seqmotif",
    Strucmotif = "strucmotif"
}

