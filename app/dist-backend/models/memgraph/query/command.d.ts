export declare enum MemgraphQueryCommandType {
    DEFAULT = 0,
    INDEX = 1,
    CONSTRAINT = 2,
    AUTH = 3,
    TRIGGER = 4,
    DB_SWITCH = 5,
    DB_ADMINISTRATION = 6,
    DB_SETTINGS = 7,
    TRANSACTION_START = 8,
    TRANSACTION_END = 9
}
export interface IMemgraphQueryCommand {
    query: string;
    params?: Record<string, any>;
    type: MemgraphQueryCommandType;
}
export interface IMemgraphQueryCommandWrapperConfig {
    params?: Record<string, any>;
    batchSize?: number;
}
export interface IMemgraphQueryCommandBatchesGroup {
    options: {
        databaseName?: string;
    };
    batches: IMemgraphQueryCommand[][];
}
export declare class MemgraphQueryCommandWrapper {
    readonly originalQuery: string;
    readonly batchSize: number;
    readonly batches: IMemgraphQueryCommand[][];
    constructor(query: string | string[], wrapperConfig?: IMemgraphQueryCommandWrapperConfig);
    isSingleCommand(): boolean;
    getSingleCommand(): IMemgraphQueryCommand | null;
    private getBatches;
}
export declare const groupCommandBatchesByDatabaseSwitch: (batches: IMemgraphQueryCommand[][]) => IMemgraphQueryCommandBatchesGroup[];
export declare function getQueryType(query: string): MemgraphQueryCommandType;
