import { IConnectionClient, IStorageServiceHandler } from '../shared';
import { IQueryShare, ICreateQueryShareWithUrlParams } from '../../../shared/models/storage/query-share';
export interface IFindAllOptions {
    username: string;
    memgraphUri?: string;
    limit?: number;
    offset?: number;
}
export interface ICreateOneOptions {
    username: string;
}
export interface IViewOneOptions {
    username: string;
    memgraphUri?: string;
}
export interface IRemoveOneOptions {
    username: string;
    memgraphUri?: string;
}
export declare class QueryShareHandler implements IStorageServiceHandler {
    private readonly client;
    constructor(client: IConnectionClient);
    setup(): Promise<void>;
    findAll(options: IFindAllOptions): Promise<{
        shares: IQueryShare[];
        totalCount: number;
    }>;
    viewOne(shareId: string, options: IViewOneOptions): Promise<IQueryShare | null>;
    create(share: ICreateQueryShareWithUrlParams, options: ICreateOneOptions): Promise<IQueryShare>;
    removeOne(shareId: string, options: IRemoveOneOptions): Promise<boolean>;
}
