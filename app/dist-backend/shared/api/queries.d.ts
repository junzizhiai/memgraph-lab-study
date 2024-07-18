import { ResponseSingle } from './common';
import { MemgraphQueryResult } from '../models/memgraph-query-result';
export interface PostQueryRequest {
    query: string;
    parameters?: Record<string, any>;
    metadata?: Record<string, any>;
}
export declare type PostQueryResponse = ResponseSingle<MemgraphQueryResult>;
