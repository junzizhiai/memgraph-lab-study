export declare enum MemgraphModuleFunctionType {
    PROCEDURE = "Procedure",
    TRANSFORMATION = "Transformation",
    FUNCTION = "Function"
}
export interface MemgraphModuleFunctionInput {
    name: string;
    type: string;
    default?: any;
}
export interface MemgraphModuleFunctionOutput {
    name: string;
    type: string;
}
export interface MemgraphModuleFunction {
    name: string;
    namespace: string;
    path: string;
    type: MemgraphModuleFunctionType;
    isWrite: boolean;
    isEditable: boolean;
    signature: string;
    inputs: MemgraphModuleFunctionInput[];
    outputs: MemgraphModuleFunctionOutput[];
}
export interface MemgraphModuleReference {
    title: string;
    url: string;
}
export interface MemgraphModule {
    name: string;
    path: string;
    content?: string;
    isEditable: boolean;
    functions: MemgraphModuleFunction[];
    references?: MemgraphModuleReference[];
}
export interface UpdateMemgraphModule {
    content: string;
}
export interface CreateMemgraphModule {
    filename: string;
    content: string;
    templateTypes?: MemgraphModuleFunctionType[];
}
