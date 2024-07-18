import { MemgraphNode, MemgraphPath, MemgraphRelationship } from './memgraph-object';
export declare type MemgraphQueryResultRecord = Record<string, MemgraphNode | MemgraphRelationship | MemgraphPath | any>;
export declare enum MemgraphQueryServerType {
    MEMGRAPH = "memgraph",
    NEO4J = "neo4j"
}
export interface MemgraphQueryResultNotification {
    code: string;
    title: string;
    description: string;
    severity: string;
    position: Record<string, number>;
}
export interface MemgraphQueryResultSummaryStats {
    nodesCreated: number;
    nodesDeleted: number;
    relationshipsCreated: number;
    relationshipsDeleted: number;
    propertiesSet: number;
    labelsAdded: number;
    labelsRemoved: number;
    indexesAdded: number;
    indexesRemoved: number;
    constraintsAdded: number;
    constraintsRemoved: number;
}
export interface MemgraphQueryResultSummary {
    query: {
        text: string;
        parameters: Record<string, any>;
    };
    queryType: string;
    server: {
        id?: string;
        type?: MemgraphQueryServerType;
        address?: string;
        version?: string;
        protocolVersion?: number;
    };
    database: {
        name?: string | null;
    };
    notifications: MemgraphQueryResultNotification[];
    costEstimate: number;
    parsingTime: number;
    planExecutionTime: number;
    planningTime: number;
    stats: MemgraphQueryResultSummaryStats;
}
export declare enum MemgraphQueryResultType {
    SINGLE = "single",
    MULTI = "multi"
}
export interface MemgraphSingleQueryResult {
    type: MemgraphQueryResultType.SINGLE;
    records: MemgraphQueryResultRecord[];
    summary: MemgraphQueryResultSummary | null;
}
export interface MemgraphMultiQueryResult {
    type: MemgraphQueryResultType.MULTI;
    results: MemgraphSingleQueryResult[];
    summary: MemgraphQueryResultSummary | null;
}
export declare const getMemgraphSingleQueryResult: (result: MemgraphQueryResult) => MemgraphSingleQueryResult;
export declare type MemgraphQueryResult = MemgraphSingleQueryResult | MemgraphMultiQueryResult;
