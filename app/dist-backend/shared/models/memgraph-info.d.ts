import { MemgraphQueryServerType } from './memgraph-query-result';
export interface MemgraphInfo {
    host: string;
    port: number;
    wsPort: number;
    isEncrypted: boolean;
    uri: string;
    username?: string;
    version?: string;
    databaseName?: string;
    serverType: MemgraphQueryServerType;
    serverId?: string;
}
