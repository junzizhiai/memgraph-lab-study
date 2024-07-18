import * as neo4j from 'neo4j-driver';
import { MemgraphQueryResultRecord } from '../../../shared/models/memgraph-query-result';
export interface IMemgraphQueryResultParser {
    parse(record: neo4j.Record): any;
}
export declare class MemgraphQueryResultEmptyParser implements IMemgraphQueryResultParser {
    parse(_record: neo4j.Record): undefined;
}
export declare class MemgraphQueryResultDefaultParser implements IMemgraphQueryResultParser {
    parse(record: neo4j.Record): MemgraphQueryResultRecord;
}
export declare class MemgraphQueryResultDumpDatabaseParser implements IMemgraphQueryResultParser {
    parse(record: neo4j.Record): string;
}
export declare const parseField: (field: any) => any;
export declare const parseRecord: (record: neo4j.Record) => MemgraphQueryResultRecord;
