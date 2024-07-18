import { MemgraphConnectionParams, PostLoginRequest } from '../shared/api/auth';
import { RequestHandler } from 'express';
declare class LoginSharedDto {
    host?: string;
    databaseName?: string;
    appId?: string;
}
export declare class LoginQueryDto extends LoginSharedDto implements MemgraphConnectionParams {
    port?: number;
    wsPort?: number;
    isEncrypted?: boolean;
}
export declare class LoginBodyDto extends LoginSharedDto implements PostLoginRequest {
    username?: string;
    password?: string;
    port?: number;
    wsPort?: number;
    isEncrypted?: boolean;
}
export declare function validateDisabledNativeAuth({ isSkipped }?: {
    isSkipped: boolean;
}): RequestHandler;
export declare function validateReservedHostname({ isSkipped }?: {
    isSkipped: boolean;
}): RequestHandler;
export {};
