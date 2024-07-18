import { PostQueryRequest } from '../shared/api/queries';
export declare class RunQueryDto implements PostQueryRequest {
    query: string;
    parameters?: Record<string, any>;
    metadata?: Record<string, any>;
}
