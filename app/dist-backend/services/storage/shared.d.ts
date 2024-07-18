import Memgraph from '../../models/memgraph';
export interface IStorageServiceHandler {
    setup(): Promise<void>;
}
export interface IConnectionClient {
    getConnection(): Promise<Memgraph>;
}
