import { ResponseMultiple, ResponseSingle } from './common';
import { IMemgraphTransaction, IMemgraphTransactionTerminate } from '../models/memgraph-transaction';
export declare type GetTransactionsResponse = ResponseMultiple<IMemgraphTransaction>;
export declare type TerminateTransactionResponse = ResponseSingle<IMemgraphTransactionTerminate>;
