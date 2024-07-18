import { MemgraphError } from './memgraph/exceptions';
export declare class DatasetStreamMissingError extends MemgraphError {
    constructor();
}
export declare class DatasetStreamAlreadyStoppedError extends MemgraphError {
    constructor();
}
export declare class DatasetStreamConcurrentLoadingError extends MemgraphError {
    constructor();
}
export declare class DatasetSlugStreamMissingError extends MemgraphError {
    constructor(slug: string);
}
