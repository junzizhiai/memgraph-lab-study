import { ResponseMultiple, ResponseSingle } from './common';
import { MemgraphDatabase, MemgraphDatabaseChange } from '../models/memgraph-database';
export declare type GetDatabasesResponse = ResponseMultiple<MemgraphDatabase>;
export declare type PostDatabaseChangeResponse = ResponseSingle<MemgraphDatabaseChange>;
