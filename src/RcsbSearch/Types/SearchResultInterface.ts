/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Provides a generic interface to represent the RCSB search query result.
 */
export interface QueryResult {
  /**
   * The query ID of the result set.
   */
  query_id: string;
  /**
   * Specifies the type of the returned identifiers.
   */
  result_type: "entry" | "polymer_entity" | "non_polymer_entity" | "polymer_instance" | "assembly";
  /**
   * The total number of identifiers in the result set.
   */
  total_count: number;
  /**
   * Explains the query execution time.
   */
  explain_meta_data: {
    /**
     * The total time taken in milliseconds to produce the query result.
     */
    total_timing: number;
    /**
     * The time taken in milliseconds to produce the drilldowns.
     */
    facet_timing?: number;
    /**
     * The time taken in milliseconds in sorting the result identifiers.
     */
    sort_timing?: number;
    /**
     * The time taken in milliseconds in retrieving the result identifiers from each service type query node. Multiple text service nodes are bundled to a single text service query.
     */
    terminal_node_timings: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * A list of search result identifiers including each identifier's score and the service query where the identifier was rendered from.
   */
  result_set?: [ServiceIdentifier, ...ServiceIdentifier[]];
  /**
   * Provides summaries of the search result by aggregating the result data on different attributes.
   */
  drilldown?: [Facet | DistinctCount, ...(Facet | DistinctCount)[]];
}
export interface ServiceIdentifier {
  /**
   * A result identifier, e.g. entry_id, entity_id, assembly_id, etc.
   */
  identifier: string;
  /**
   * The calculated score based on the normalized score from each service and the scoring strategy.
   */
  score: number;
  /**
   * Shows the query node that rendered the identifier and the scoring details.
   */
  services: [
    {
      /**
       * The search service that is responsible for running the query and retrieving the search results.
       */
      service_type: "text" | "sequence" | "structure" | "chemical" | "seqmotif" | "strucmotif";
      /**
       * Provides the result identifier scoring details.
       */
      nodes: [
        {
          /**
           * The node ID pertaining to the input search query.
           */
          node_id: number;
          /**
           * The original score provided by the service provider.
           */
          original_score: number;
          /**
           * The normalized score calculated using the normalization tool.
           */
          norm_score: number;
          /**
           * Data about the context of the match, specific to the service_type.
           */
          match_context?: (
            | SequenceServiceMatchContext
            | ShapeServiceMatchContext
            | SeqmotifServiceMatchContext
            | StrucmotifServiceMatchContext
          )[];
          [k: string]: unknown;
        },
        ...{
          /**
           * The node ID pertaining to the input search query.
           */
          node_id: number;
          /**
           * The original score provided by the service provider.
           */
          original_score: number;
          /**
           * The normalized score calculated using the normalization tool.
           */
          norm_score: number;
          /**
           * Data about the context of the match, specific to the service_type.
           */
          match_context?: (
            | SequenceServiceMatchContext
            | ShapeServiceMatchContext
            | SeqmotifServiceMatchContext
            | StrucmotifServiceMatchContext
          )[];
          [k: string]: unknown;
        }[]
      ];
      [k: string]: unknown;
    },
    ...{
      /**
       * The search service that is responsible for running the query and retrieving the search results.
       */
      service_type: "text" | "sequence" | "structure" | "chemical" | "seqmotif" | "strucmotif";
      /**
       * Provides the result identifier scoring details.
       */
      nodes: [
        {
          /**
           * The node ID pertaining to the input search query.
           */
          node_id: number;
          /**
           * The original score provided by the service provider.
           */
          original_score: number;
          /**
           * The normalized score calculated using the normalization tool.
           */
          norm_score: number;
          /**
           * Data about the context of the match, specific to the service_type.
           */
          match_context?: (
            | SequenceServiceMatchContext
            | ShapeServiceMatchContext
            | SeqmotifServiceMatchContext
            | StrucmotifServiceMatchContext
          )[];
          [k: string]: unknown;
        },
        ...{
          /**
           * The node ID pertaining to the input search query.
           */
          node_id: number;
          /**
           * The original score provided by the service provider.
           */
          original_score: number;
          /**
           * The normalized score calculated using the normalization tool.
           */
          norm_score: number;
          /**
           * Data about the context of the match, specific to the service_type.
           */
          match_context?: (
            | SequenceServiceMatchContext
            | ShapeServiceMatchContext
            | SeqmotifServiceMatchContext
            | StrucmotifServiceMatchContext
          )[];
          [k: string]: unknown;
        }[]
      ];
      [k: string]: unknown;
    }[]
  ];
}
export interface SequenceServiceMatchContext {
  /**
   * Sequence identity between query and subject. Range: 0-1.
   */
  sequence_identity: number;
  /**
   * The match's e-value.
   */
  evalue: number;
  /**
   * The match's bit score.
   */
  bitscore: number;
  /**
   * The length of the alignment.
   */
  alignment_length?: number;
  /**
   * The number of mismatches in the alignment.
   */
  mismatches?: number;
  /**
   * The number of gap openings in the alignment.
   */
  gaps_opened?: number;
  /**
   * The start index (1-based) in the query sequence.
   */
  query_beg?: number;
  /**
   * The end index (1-based) in the query sequence.
   */
  query_end?: number;
  /**
   * The start index (1-based) in the subject sequence.
   */
  subject_beg?: number;
  /**
   * The end index (1-based) in the subject sequence.
   */
  subject_end?: number;
  /**
   * The length of the query sequence's aligned region.
   */
  query_length?: number;
  /**
   * The length of the subject sequence's aligned region.
   */
  subject_length?: number;
  /**
   * The aligned query sequence (including gaps, as '-') over the aligned region query_beg to query_end
   */
  query_aligned_seq?: string;
  /**
   * The aligned subject sequence (including gaps, as '-') over the aligned region subject_beg to subject_end
   */
  subject_aligned_seq?: string;
}
export interface ShapeServiceMatchContext {
  /**
   * The BioZernike score, expressing the likelihood of the match being relevant. Range: 0-1.
   */
  biozernike_score: number;
  /**
   * The score calculated from the GEO descriptors. Range: 0-1.
   */
  geo_score: number;
}
export interface SeqmotifServiceMatchContext {
  /**
   * The start index (1-based) in the matched sequence.
   */
  start: number;
  /**
   * The end index (1-based) in the matched sequence.
   */
  end: number;
}
export interface StrucmotifServiceMatchContext {
  /**
   * Provides the set of residue identifiers that were matched to the query.
   */
  residue_ids: ResidueIdentifier[];
  /**
   * Score between query and this particular match context.
   */
  score: number;
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
export interface Facet {
  /**
   * A field being analyzed.
   */
  attribute: string;
  /**
   * A list of buckets built by executing an aggregation. Each bucket is associated with a key and a document criterion.
   */
  groups: [
    {
      /**
       * The key of a bucket.
       */
      label: string;
      /**
       * The number of documents in the bucket.
       */
      population: number;
      drilldown?: (Facet | DistinctCount)[];
      [k: string]: unknown;
    },
    ...{
      /**
       * The key of a bucket.
       */
      label: string;
      /**
       * The number of documents in the bucket.
       */
      population: number;
      drilldown?: (Facet | DistinctCount)[];
      [k: string]: unknown;
    }[]
  ];
}
export interface DistinctCount {
  /**
   * A field being analyzed.
   */
  attribute: string;
  /**
   * The approximate count of distinct values in a field calculated by aggregation.
   */
  distinct_count: number;
}
