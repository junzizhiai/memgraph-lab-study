import { MemgraphInfo } from './memgraph-info';
import { MemgraphStorageStats } from './memgraph-stats';
import { MemgraphFeature } from './memgraph-feature';
import { ICypherVocabulary } from './cypher-vocabulary';
import { IMgpVocabulary } from './mgp-vocabulary';
export declare enum MemgraphConnectionAuthType {
    BASIC = "basic",
    BEARER = "bearer",
    CUSTOM = "custom"
}
export interface MemgraphConnectionAuthBasic {
    type: MemgraphConnectionAuthType.BASIC;
    username: string;
    password: string;
}
export interface MemgraphConnectionAuthCustom {
    type: MemgraphConnectionAuthType.CUSTOM;
    principal: string;
    credentials: string;
    scheme: string;
}
export interface MemgraphConnectionAuthBearer {
    type: MemgraphConnectionAuthType.BEARER;
    token: string;
}
export declare type MemgraphConnectionAuth = MemgraphConnectionAuthBasic | MemgraphConnectionAuthCustom | MemgraphConnectionAuthBearer;
export interface MemgraphConnection {
    host?: string;
    port?: number;
    wsPort?: number;
    databaseName?: string;
    isEncrypted?: boolean;
    auth?: MemgraphConnectionAuth;
}
export declare type IMemgraphWebSocketConnection = Pick<MemgraphConnection, 'host' | 'port' | 'isEncrypted' | 'auth'>;
export interface MemgraphConnectionInfoVocabulary {
    cypher?: ICypherVocabulary;
    mgp?: IMgpVocabulary;
}
export interface MemgraphConnectionInfo {
    info: MemgraphInfo;
    stats: MemgraphStorageStats;
    features: MemgraphFeature[];
    vocabulary: MemgraphConnectionInfoVocabulary;
    token?: string;
}
