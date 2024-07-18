import { GetModulesRequestQuery, PostModuleRequest, PutModuleRequest } from '../shared/api/modules';
import { MemgraphModuleFunctionType } from '../shared/models/memgraph-module';
export declare class GetModulesDto implements GetModulesRequestQuery {
    'function-type': MemgraphModuleFunctionType;
}
export declare class UpdateModuleDto implements PutModuleRequest {
    content: string;
}
export declare class CreateModuleDto implements PostModuleRequest {
    filename: string;
    content: string;
    templateTypes: MemgraphModuleFunctionType[];
}
