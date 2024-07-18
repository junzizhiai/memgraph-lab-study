import { MemgraphConnectionInfo } from './memgraph-connection';
export interface MemgraphDatabase {
    name: string;
    isCurrent: boolean;
}
export declare type MemgraphDatabaseChange = Pick<MemgraphConnectionInfo, 'info' | 'stats'>;
