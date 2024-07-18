import { ResponseMultiple, ResponseSingle } from './common';
import { MemgraphNodePropertyStats, MemgraphRelationshipPropertyStats, MemgraphStorageStats } from '../models/memgraph-stats';
export declare type GetNodePropertyStatsResponse = ResponseMultiple<MemgraphNodePropertyStats>;
export declare type GetRelationshipPropertyStatsResponse = ResponseMultiple<MemgraphRelationshipPropertyStats>;
export declare type GetStorageStatsRequestQuery = {
    'max-accurate-node-count': string;
    'max-accurate-edge-count': string;
};
export declare type GetStorageStatsResponse = ResponseSingle<MemgraphStorageStats>;
