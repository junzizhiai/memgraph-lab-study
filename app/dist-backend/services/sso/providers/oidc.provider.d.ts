import { NextFunction, Request, Response } from 'express';
import { IHandlerOptions, IProviderHandler, IProviderHandlerFunctionResponse } from './shared';
import OAuth2Strategy from 'passport-oauth2';
import { SSOProviderType } from '../../../shared/models/sso';
export declare class OIDCProvider implements IProviderHandler {
    readonly provider: SSOProviderType;
    readonly displayName: string;
    private readonly _oauth2;
    private readonly _config;
    constructor(provider: SSOProviderType, displayName: string, config: OAuth2Strategy.StrategyOptions);
    handleRequest(_req: Request, _res: Response, _next: NextFunction, options?: IHandlerOptions): Promise<void>;
    handleResponse(req: Request, res: Response, _next: NextFunction): Promise<IProviderHandlerFunctionResponse>;
    _getAccessToken(code: string): Promise<string>;
}
