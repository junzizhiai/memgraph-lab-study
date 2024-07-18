import { ResponseEmpty, ResponseMultiple, ResponseSingle } from './common';
import { CreateMemgraphModule, MemgraphModule, MemgraphModuleFunctionType, UpdateMemgraphModule } from '../models/memgraph-module';
export declare type GetModulesRequestQuery = {
    'function-type': MemgraphModuleFunctionType;
};
export declare type GetModulesResponse = ResponseMultiple<MemgraphModule>;
export declare type GetModuleResponse = ResponseSingle<MemgraphModule>;
export declare type PostModuleRequest = CreateMemgraphModule;
export declare type PostModuleResponse = ResponseSingle<MemgraphModule>;
export declare type PutModuleRequest = UpdateMemgraphModule;
export declare type PutModuleResponse = ResponseSingle<MemgraphModule>;
export declare type DeleteModuleResponse = ResponseEmpty;
