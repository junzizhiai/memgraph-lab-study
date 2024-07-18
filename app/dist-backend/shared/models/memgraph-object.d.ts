export declare enum MemgraphObjectType {
    Node = "node",
    Relationship = "relationship",
    Path = "path"
}
export interface MemgraphNode {
    id: number;
    labels: string[];
    properties: Record<string, any>;
    type: MemgraphObjectType.Node;
}
export interface MemgraphRelationship {
    id: number;
    start: number;
    end: number;
    label: string;
    properties: Record<string, any>;
    type: MemgraphObjectType.Relationship;
}
export interface MemgraphPath {
    nodes: MemgraphNode[];
    relationships: MemgraphRelationship[];
    type: MemgraphObjectType.Path;
}
