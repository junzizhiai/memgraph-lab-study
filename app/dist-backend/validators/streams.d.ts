import { PostStreamDryRunRequest, PostStreamRequest } from '../shared/api/streams';
import { MemgraphStreamType } from '../shared/models/memgraph-stream';
export declare class CreateStreamDto implements PostStreamRequest {
    name: string;
    topics: string[];
    type: MemgraphStreamType;
    transformationName: string;
    batchIntervalMs: number;
    batchSize: number;
    uri?: string;
    consumerGroup?: string;
    configs?: Record<string, any>;
    credentials?: Record<string, any>;
}
export declare class DruRunStreamDto implements PostStreamDryRunRequest {
    batchLimit: number;
    timeoutMs: number;
}
