import Memgraph from '../../models/memgraph';
import { QueryShareHandler } from './handlers/query-share.handler';
import { IConnectionClient } from './shared';
export interface IStorageConnection {
    host: string;
    port: number;
    isEncrypted?: boolean;
    databaseName?: string;
    username?: string;
    password?: string;
}
export interface IStorageConnectOptions {
    timeoutMs: number;
}
export declare class StorageService implements IConnectionClient {
    private connection;
    private isConnectionActive;
    private readonly queryShares;
    private isQueryShareSetupCompleted;
    constructor(config: IStorageConnection);
    get uri(): string | undefined;
    getQuerySharesHandler(): Promise<QueryShareHandler>;
    getConnection(options?: Partial<IStorageConnectOptions>): Promise<Memgraph>;
    connect(): Promise<void>;
    disconect(): Promise<void>;
}
declare const _default: StorageService;
export default _default;
