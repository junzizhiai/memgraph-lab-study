import { ResponseEmpty, ResponseSingle } from './common';
import { MemgraphConnection, MemgraphConnectionInfo } from '../models/memgraph-connection';
export declare type MemgraphConnectionParams = Omit<MemgraphConnection, 'auth'>;
export interface MemgraphConnectionContextParams {
    appId?: string;
    shareId?: string;
}
export declare type PostLoginRequest = MemgraphConnectionParams & MemgraphConnectionContextParams & {
    username?: string;
    password?: string;
};
export declare type PostLoginDryRunRequest = MemgraphConnection;
export declare type PostLoginDryRunResponse = ResponseSingle<{
    isConnectionAlive: boolean;
}>;
export declare type PostLoginResponse = ResponseSingle<MemgraphConnectionInfo>;
export declare type PostLogoutResponse = ResponseEmpty;
