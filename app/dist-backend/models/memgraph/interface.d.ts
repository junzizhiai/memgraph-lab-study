import { MemgraphQueryEngine, MemgraphQueryStream } from './query/engine';
import { IMemgraphQueryCommandWrapperConfig } from './query/command';
import { MemgraphIndex } from '../../shared/models/memgraph-index';
import { MemgraphConstraint } from '../../shared/models/memgraph-constraint';
import { IMemgraphStorageStatsOptions, MemgraphStorageStats } from '../../shared/models/memgraph-stats';
export interface IMemgraphConnectOptions {
    isFeatureCheckDisabled: boolean;
    isCurrentUserCheckDisabled: boolean;
    timeoutMs: number;
}
export interface IMemgraph {
    connect(options?: IMemgraphConnectOptions): Promise<void>;
    disconnect(): Promise<void>;
    isConnectionActive(): Promise<boolean>;
    getIndexes(): Promise<MemgraphIndex[]>;
    createIndex(index: MemgraphIndex): Promise<MemgraphIndex>;
    removeIndex(index: MemgraphIndex): Promise<void>;
    removeIndexes(): Promise<void>;
    getConstraints(): Promise<MemgraphConstraint[]>;
    createConstraint(constraint: MemgraphConstraint): Promise<MemgraphConstraint>;
    removeConstraint(constraint: MemgraphConstraint): Promise<void>;
    removeConstraints(): Promise<void>;
    dropData(): Promise<void>;
    dropDatabase(): Promise<void>;
    loadDatabase(queries: string[]): Promise<void>;
    dumpDatabase(): MemgraphQueryStream;
    query(query: string, options?: IMemgraphQueryCommandWrapperConfig): MemgraphQueryEngine;
    runTestQuery(): Promise<void>;
    countNodes(): Promise<number>;
    countEdges(): Promise<number>;
    getStorageStats(options?: Partial<IMemgraphStorageStatsOptions>): Promise<MemgraphStorageStats>;
    getCurrentUser(): Promise<string | undefined>;
}
