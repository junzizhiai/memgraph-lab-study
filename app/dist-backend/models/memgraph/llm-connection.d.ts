import { Memgraph } from '../../models/memgraph';
import { ILlmConfiguration, ILlmPermissions, ILlmSchema, ILlmSetup, IMemgraphTextQueryIntermediateResult, IMemgraphTextQueryResult } from '../../shared/models/llm';
interface ILlmConnection {
    getSchema(): string;
    query(query: string, params: Record<string, any>): Promise<IMemgraphTextQueryIntermediateResult>;
}
export declare class MemgraphLlmConnection implements ILlmConnection {
    private model;
    private chain;
    private _schema;
    private memgraph;
    private _setup;
    constructor(memgraph: Memgraph, setup: ILlmSetup);
    query(query: string, params?: Record<string, any>): Promise<IMemgraphTextQueryIntermediateResult>;
    get schema(): ILlmSchema;
    set schema(value: ILlmSchema);
    getSchema(): string;
    loadSchema(schema: ILlmSchema): void;
    getConfiguration(): ILlmConfiguration;
    getPermissions(): ILlmPermissions;
    setPermissions(permissions: ILlmPermissions): void;
    runTextQuery(query: string): Promise<IMemgraphTextQueryResult>;
    refreshSchema(): Promise<void>;
}
export {};
