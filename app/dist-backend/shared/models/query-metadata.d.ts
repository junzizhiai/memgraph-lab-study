export declare enum QuerySource {
    LAB_USER = "lab-user",
    LAB_SYSTEM = "lab-system"
}
export interface IQueryMetadata {
    queryId: string;
    source: QuerySource;
}
export declare const isQueryMetadata: (value: any) => value is IQueryMetadata;
