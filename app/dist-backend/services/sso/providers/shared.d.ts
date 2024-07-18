import { NextFunction, Request, Response } from 'express';
import { MemgraphConnectionContextParams, MemgraphConnectionParams } from '../../../shared/api/auth';
import { SSOProviderType } from '../../../shared/models/sso';
export interface IHandlerOptions {
    connection: MemgraphConnectionParams;
    context: MemgraphConnectionContextParams;
}
export declare type IProviderHandlerFunction<T> = (req: Request, res: Response, next: NextFunction, options?: IHandlerOptions) => Promise<T>;
export interface IProviderHandlerFunctionResponse {
    token: string;
    connection?: MemgraphConnectionParams;
    context?: MemgraphConnectionContextParams;
}
export interface IProviderHandler {
    readonly provider: SSOProviderType;
    readonly displayName: string;
    handleRequest: IProviderHandlerFunction<void>;
    handleResponse: IProviderHandlerFunction<IProviderHandlerFunctionResponse>;
}
export declare const parseQueryConnectionParams: (query: Request['query'] | Record<string, any>) => MemgraphConnectionParams;
export declare const parseQueryConnectionContextParams: (query: Request['query'] | Record<string, any>) => MemgraphConnectionContextParams;
