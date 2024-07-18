import { NextFunction, Request, Response } from 'express';
import { IHandlerOptions, IProviderHandler, IProviderHandlerFunctionResponse } from './shared';
import { SamlConfig } from '@node-saml/node-saml';
import { SSOProviderType } from '../../../shared/models/sso';
declare const SIGNATURE_ALGOS: readonly ["sha1", "sha256", "sha512"];
export declare class SAMLProvider implements IProviderHandler {
    readonly provider: SSOProviderType;
    readonly displayName: string;
    private readonly saml;
    constructor(provider: SSOProviderType, displayName: string, config: Omit<SamlConfig, 'idpCert'>);
    handleRequest(req: Request, res: Response, _next: NextFunction, options?: IHandlerOptions): Promise<void>;
    handleResponse(req: Request, _res: Response, _next: NextFunction): Promise<IProviderHandlerFunctionResponse>;
}
export declare const getSAMLSignatureAlgorithm: (algorithm: any) => (typeof SIGNATURE_ALGOS)[number];
export {};
