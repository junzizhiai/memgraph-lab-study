import { ResponseEmpty, ResponseMultiple, ResponseSingle } from './common';
import { MemgraphIndex } from '../models/memgraph-index';
export declare type GetIndexesResponse = ResponseMultiple<MemgraphIndex>;
export interface PostIndexRequest {
    label: string;
    property?: string;
}
export declare type PostIndexResponse = ResponseSingle<MemgraphIndex>;
export interface DeleteIndexRequestQuery {
    label: string;
    property?: string;
}
export declare type DeleteIndexesResponse = ResponseEmpty;
