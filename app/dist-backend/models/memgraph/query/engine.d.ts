/// <reference types="node" />
import { PassThrough } from 'stream';
import EventEmitter from 'events';
import * as neo4j from 'neo4j-driver';
import { MemgraphQueryCommandWrapper } from './command';
import { IMemgraphQueryResultParser } from './result';
import { MemgraphQueryResult } from '../../../shared/models/memgraph-query-result';
export interface IMemgraphQueryEngineOptions {
    databaseName?: string;
    metadata?: Record<string, any>;
}
export interface IMemgraphQueryEngineConfig {
    parser: IMemgraphQueryResultParser;
}
export declare type IMemgraphQueryEnginePrivateConfig = IMemgraphQueryEngineConfig & IMemgraphQueryEngineOptions;
export interface IMemgraphRunWithResultsOptions {
    engineConfig: IMemgraphQueryEngineConfig;
    metadata: Record<string, any>;
}
export declare class MemgraphQueryStream extends PassThrough {
}
export declare class MemgraphQueryEmitter extends EventEmitter {
}
export declare class MemgraphQueryEngine {
    private readonly driver;
    private readonly wrapper;
    private readonly options?;
    constructor(driver: neo4j.Driver, wrapper: MemgraphQueryCommandWrapper, options?: IMemgraphQueryEngineOptions);
    runWithStreamResults(engineConfig?: IMemgraphQueryEngineConfig): MemgraphQueryStream;
    runWithEmitterResults(engineConfig?: IMemgraphQueryEngineConfig): MemgraphQueryEmitter;
    runWithResults(options?: Partial<IMemgraphRunWithResultsOptions>): Promise<MemgraphQueryResult>;
    run(): Promise<void>;
    private runSingleCommand;
    private runFixedSession;
    private runMultiQuery;
}
