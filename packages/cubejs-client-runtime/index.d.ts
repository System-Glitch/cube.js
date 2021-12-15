declare module "@cubejs-client/core" {

  export type IntrospectedMeasure = import('./generated').IntrospectedMeasure;
  export type IntrospectedDimension = import('./generated').IntrospectedDimension;
  export type IntrospectedTimeDimension = import('./generated').IntrospectedTimeDimension;
  export type IntrospectedSegment = import('./generated').IntrospectedSegment;
  export type Member = IntrospectedMeasure | IntrospectedDimension;

  export type UQueryOrderObject = Record<Member, QueryOrder>;
  export type UQueryOrderArray = Array<[Member, QueryOrder]>;

  export interface Query {
    measures: IntrospectedMeasure[];
    dimensions: IntrospectedDimension[];
    segments: IntrospectedSegment[];
    order?: UQueryOrderObject | UQueryOrderArray;
  }

  export interface TFlatFilter {
    member?: Member;
  }

  export interface TimeDimensionBase {
    dimension: IntrospectedTimeDimension;
  }

  export interface BinaryFilter {
    member?: Member;
  }
  export interface UnaryFilter {
    member?: Member;
  }
}
