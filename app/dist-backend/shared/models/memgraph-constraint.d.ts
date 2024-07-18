export declare enum MemgraphConstraintType {
    EXISTS = "exists",
    UNIQUE = "unique"
}
export interface MemgraphUniqueConstraint {
    type: MemgraphConstraintType.UNIQUE;
    label: string;
    properties: string[];
}
export interface MemgraphExistsConstraint {
    type: MemgraphConstraintType.EXISTS;
    label: string;
    property: string;
}
export declare type MemgraphConstraint = MemgraphUniqueConstraint | MemgraphExistsConstraint;
