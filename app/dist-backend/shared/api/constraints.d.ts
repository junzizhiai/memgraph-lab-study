import { ResponseEmpty, ResponseMultiple, ResponseSingle } from './common';
import { MemgraphConstraint, MemgraphConstraintType } from '../models/memgraph-constraint';
export declare type GetConstraintsResponse = ResponseMultiple<MemgraphConstraint>;
interface PostUniqueConstraintRequest {
    type: MemgraphConstraintType.UNIQUE;
    label: string;
    properties: string[];
}
interface PostExistsConstraintRequest {
    type: MemgraphConstraintType.EXISTS;
    label: string;
    property: string;
}
export declare type PostConstraintRequest = PostUniqueConstraintRequest | PostExistsConstraintRequest;
export declare type PostConstraintResponse = ResponseSingle<MemgraphConstraint>;
interface DeleteUniqueConstraintRequest {
    type: MemgraphConstraintType.UNIQUE;
    label: string;
    properties: string[];
}
interface DeleteExistsConstraintRequest {
    type: MemgraphConstraintType.EXISTS;
    label: string;
    property: string;
}
export declare type DeleteConstraintRequestQuery = DeleteUniqueConstraintRequest | DeleteExistsConstraintRequest;
export declare type DeleteConstraintsResponse = ResponseEmpty;
export {};
