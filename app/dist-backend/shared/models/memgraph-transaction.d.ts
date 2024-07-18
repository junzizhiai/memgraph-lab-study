export interface IMemgraphTransaction {
    username: string;
    id: string;
    queries: string[];
    metadata: Record<string, any>;
}
export interface IMemgraphTransactionTerminate {
    isTerminated: boolean;
}
