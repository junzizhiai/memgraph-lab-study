import { MemgraphConstraint } from '../../../shared/models/memgraph-constraint';
import { MemgraphIndex } from '../../../shared/models/memgraph-index';
import { CreateMemgraphStream } from '../../../shared/models/memgraph-stream';
export declare const escapeCypherValue: (value: any) => string;
export declare const escapeCypherVariable: (variableName: string) => string;
export declare const getCypherFromMemgraphIndex: (index: MemgraphIndex) => string;
export declare const getCypherFromMemgraphConstraint: (constraint: MemgraphConstraint) => string;
export declare const getCypherFromMemgraphStream: (stream: CreateMemgraphStream) => string;
export declare const extractDatabaseNameFromCypherUseDatabase: (command: string) => string | null;
