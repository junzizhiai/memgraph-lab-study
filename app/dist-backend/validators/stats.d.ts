import { GetStorageStatsRequestQuery } from '../shared/api/stats';
export declare class GetStorageStatsDto implements GetStorageStatsRequestQuery {
    'max-accurate-node-count': string;
    'max-accurate-edge-count': string;
}
