import { PostLlmAzureSetupVerificationRequest, PostLlmOllamaSetupVerificationRequest, PostLlmOpenAIKeyVerificationRequest, PostLlmRequest } from '../shared/api/llm';
import { ILlmSchema, ILlmSetup, LlmType } from '../shared/models/llm';
export declare class RunTextQueryDto implements PostLlmRequest {
    query: string;
    config: ILlmSetup;
    isSchemaRefreshed: boolean;
    schema: ILlmSchema;
}
export declare class ValidateLlmOpenAIKeyDto implements PostLlmOpenAIKeyVerificationRequest {
    openAIApiKey: string;
}
export declare class ValidateLlmAzureSetupDto implements PostLlmAzureSetupVerificationRequest {
    azureOpenAIApiKey: string;
    azureOpenAIApiInstanceName: string;
    azureOpenAIApiDeploymentName: string;
    azureOpenAIApiVersion: string;
}
export declare class ValidateLlmOllamaSetupDto implements PostLlmOllamaSetupVerificationRequest {
    baseUrl: string;
}
export declare class ValidateLlmSetupDto {
    type: LlmType;
}
