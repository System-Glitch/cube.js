declare module "@cubejs-client/core" {

  export type Measure = import('./generated').Measure;
  export type Dimension = import('./generated').Dimension;
  export type TimeDimension = import('./generated').TimeDimension;
  export type Segment = import('./generated').Segment;
  export type Member = Measure | Dimension;

  export type UQueryOrderObject = Record<Member, QueryOrder>;
  export type UQueryOrderArray = Array<[Member, QueryOrder]>;

  export interface Query {
    measures: Measure[];
    dimensions: Dimension[];
    segments: Segment[];
    order?: UQueryOrderObject | UQueryOrderArray;
  }

  export interface TFlatFilter {
    member?: Member;
  }

  export interface TimeDimensionBase {
    dimension: TimeDimension;
  }

  export interface BinaryFilter {
    member?: Member;
  }
  export interface UnaryFilter {
    member?: Member;
  }
}
