export declare const DEFAULT_STREAM_BATCH_INTERVAL_MS = 100;
export declare const DEFAULT_STREAM_BATCH_SIZE = 1000;
export declare enum MemgraphStreamType {
    KAFKA = "Kafka",
    PULSAR = "Pulsar"
}
export declare enum MemgraphStreamStatus {
    RUNNING = "Running",
    STOPPED = "Stopped",
    DRAFT = "Draft"
}
export interface MemgraphStream {
    name: string;
    type: MemgraphStreamType;
    transformationName: string;
    status: MemgraphStreamStatus;
    batchIntervalMs?: number;
    batchSize?: number;
    owner?: string;
}
export interface MemgraphDetailedStream extends MemgraphStream {
    topics: string[];
    uri?: string;
    consumerGroup?: string;
    configs?: Record<string, any>;
    credentials?: Record<string, any>;
}
export interface MemgraphStreamDryRunOptions {
    batchLimit?: number;
    timeoutMs?: number;
}
export interface MemgraphStreamDryRunResultLegacy {
    query: string;
    parameters?: Record<string, any>;
}
export interface MemgraphStreamDryRunResultWithRawMessages {
    queries: MemgraphStreamDryRunResultLegacy[];
    rawMessages: any[];
}
export declare type MemgraphStreamDryRunResult = MemgraphStreamDryRunResultLegacy | MemgraphStreamDryRunResultWithRawMessages;
export declare const isMemgraphStreamDryRunResultLegacy: (result: any) => result is MemgraphStreamDryRunResultLegacy;
export declare type CreateMemgraphStream = Omit<MemgraphDetailedStream, 'status' | 'owner'>;
export declare const getMemgraphStreamTypeFromText: (type: string) => MemgraphStreamType | undefined;
