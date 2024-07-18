import { MemgraphSingleQueryResult } from './memgraph-query-result';
export declare enum LlmType {
    OPEN_AI = "OpenAI",
    AZURE_OPEN_AI = "AzureOpenAI",
    OLLAMA = "Ollama",
    UNDEFINED = "undefined"
}
export interface ILlmOpenAISetup {
    openAIApiKey: string;
}
export interface ILlmAzureOpenAISetup {
    azureOpenAIApiVersion: string;
    azureOpenAIApiKey: string;
    azureOpenAIApiInstanceName: string;
    azureOpenAIApiDeploymentName: string;
    azureOpenAIBasePath?: string;
}
export interface ILlmOllamaSetup {
    baseUrl: string;
}
export interface ILlmUndefinedSetup {
    type: LlmType.UNDEFINED;
}
export declare type ILlmApiSetup = ILlmAzureOpenAISetup | ILlmOpenAISetup | ILlmOllamaSetup | ILlmUndefinedSetup;
export declare type ILlmConfiguration = {
    modelName: string;
    temperature: number;
    maxTokens: number;
    topP: number;
    frequencyPenalty: number;
    presencePenalty: number;
};
export declare type ILlmPermissions = {
    isReadPermitted: boolean;
    isUpdatePermitted: boolean;
    isDeletePermitted: boolean;
    isWritePermitted: boolean;
};
export declare type ILlmSetup = {
    apiSetup: ILlmApiSetup;
    configuration: ILlmConfiguration;
    permissions: ILlmPermissions;
};
export declare const isAzureOpenAISetup: (apiSetup: ILlmApiSetup) => apiSetup is ILlmAzureOpenAISetup;
export declare const isOpenAISetup: (apiSetup: ILlmApiSetup) => apiSetup is ILlmOpenAISetup;
export declare const isOllamaSetup: (apiSetup: ILlmApiSetup) => apiSetup is ILlmOllamaSetup;
export declare const LLM_DEFAULT_CONFIGURATION: ILlmConfiguration;
export declare const LLM_DEFAULT_PERMISSIONS: ILlmPermissions;
export interface ILlmSchema {
    value: string;
    createdAt: number;
}
export declare type ILlmOpenAIVerificationRequest = Omit<ILlmOpenAISetup, 'type'>;
export declare type ILlmAzureVerificationRequest = Omit<ILlmAzureOpenAISetup, 'type'>;
export declare type ILlmOllamaVerificationRequest = Omit<ILlmOllamaSetup, 'type'>;
export interface ILlmVerificationResponse {
    isValid: boolean;
}
export interface ILlmRequest {
    query: string;
    config: ILlmSetup;
    isSchemaRefreshed?: boolean;
    schema?: ILlmSchema;
}
export declare type IMemgraphTextQueryIntermediateResult = MemgraphSingleQueryResult['records'] | IMemgraphTextErrorRecord;
export interface IMemgraphTextQueryResult {
    textQuery: string;
    cypherQuery: string;
    intermediateResult: IMemgraphTextQueryIntermediateResult;
    result: string;
    schema: ILlmSchema;
}
export declare const isMemgraphTextQueryResult: (value: any) => value is IMemgraphTextQueryResult;
export interface IMemgraphTextErrorRecord {
    error: string;
}
export declare const isMemgraphTextErrorRecord: (value: any) => value is IMemgraphTextErrorRecord;
