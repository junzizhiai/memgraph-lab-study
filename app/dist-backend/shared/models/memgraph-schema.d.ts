import { MemgraphNode, MemgraphRelationship } from './memgraph-object';
import { MemgraphPropertyStats } from './memgraph-stats';
interface MemgraphCountedObject {
    count: number;
    properties: Record<string, MemgraphPropertyStats>;
}
export declare type MemgraphCountedNode = MemgraphNode & MemgraphCountedObject;
export declare type MemgraphCountedRelationship = MemgraphRelationship & MemgraphCountedObject;
export interface MemgraphSchema {
    nodes: MemgraphCountedNode[];
    relationships: MemgraphCountedRelationship[];
}
export {};
