export declare enum MemgraphObjectType {
    Node = "node",
    Relationship = "relationship",
    Path = "path"
}
export declare enum MemgraphStorageMode {
    IN_MEMORY_TRANSACTIONAL = "in-memory-transactional",
    IN_MEMORY_ANALYTICAL = "in-memory-analytical",
    ON_DISK_TRANSACTIONAL = "on-disk-transactional"
}
export interface MemgraphStorageStats {
    database: {
        id?: string;
        name?: string;
        storageMode?: MemgraphStorageMode;
    };
    counts: {
        nodes?: number;
        isNodeCountEstimate: boolean;
        relationships?: number;
        isRelationshipCountEstimate: boolean;
        indexes?: number;
        constraints?: number;
        triggers?: number;
    };
    memory: {
        usedBytes?: number;
        allocatedBytes?: number;
        totalBytes?: number;
    };
    disk: {
        usedBytes?: number;
    };
}
export declare const extractMemgraphStorageMode: (mode: string) => MemgraphStorageMode | null;
export declare const getInitializedMemgraphStorageStats: (init: Pick<MemgraphStorageStats['database'], 'id'>) => MemgraphStorageStats;
export interface MemgraphPropertyStats {
    count: number;
}
export interface MemgraphNodePropertyStats {
    labels: string[];
    properties: Record<string, MemgraphPropertyStats>;
    count: number;
}
export interface MemgraphRelationshipPropertyStats {
    label: string;
    startLabels: string[];
    endLabels: string[];
    properties: Record<string, MemgraphPropertyStats>;
    count: number;
}
export interface IMemgraphStorageStatsOptions {
    useAccurateNodeCount: boolean;
    useAccurateEdgeCount: boolean;
    maxAccurateNodeCount: number;
    maxAccurateEdgeCount: number;
}
