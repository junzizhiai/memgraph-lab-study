import { IQueryShare, ICreateQueryShare } from '../../models/storage/query-share';
import { ResponseEmpty, ResponseMultiple, ResponseSingle } from '../common';
export declare type IGetQuerySharesResponse = ResponseMultiple<IQueryShare>;
export declare type IGetOneQueryShareResponse = ResponseSingle<IQueryShare>;
export declare type IPostQueryShareRequest = ICreateQueryShare;
export declare type IPostQueryShareCheckResponse = ResponseEmpty;
export declare type IPostQueryShareResponse = ResponseSingle<IQueryShare>;
export declare type IDeleteQueryShareResponse = ResponseEmpty;
