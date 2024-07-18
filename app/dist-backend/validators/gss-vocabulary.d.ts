import 'reflect-metadata';
import { IGraphStyleScriptVocabulary, IGraphStyleScriptVocabularyColor, IGraphStyleScriptVocabularyConstant, IGraphStyleScriptVocabularyDirective, IGraphStyleScriptVocabularyDirectiveProperty, IGraphStyleScriptVocabularyFunction, IGraphStyleScriptVocabularyFunctionInput, IGraphStyleScriptVocabularyFunctionOutput, IGraphStyleScriptVocabularyVariable } from '../shared/models/gss-vocabulary';
export declare class CreateGraphStyleScriptVocabularyColorDto implements IGraphStyleScriptVocabularyColor {
    name: string;
}
export declare class CreateGraphStyleScriptVocabularyConstantDto implements IGraphStyleScriptVocabularyConstant {
    name: string;
}
export declare class CreateGraphStyleScriptVocabularyDirectivePropertyDto implements IGraphStyleScriptVocabularyDirectiveProperty {
    name: string;
    type: string;
    documentation: string;
}
export declare class CreateGraphStyleScriptVocabularyDirectiveDto implements IGraphStyleScriptVocabularyDirective {
    name: string;
    documentation: string;
    properties: IGraphStyleScriptVocabularyDirectiveProperty[];
}
export declare class CreateGraphStyleScriptVocabularyVariableDto implements IGraphStyleScriptVocabularyVariable {
    name: string;
    type: string;
    documentation: string;
}
export declare class CreateGraphStyleScriptVocabularyFunctionInputDto implements IGraphStyleScriptVocabularyFunctionInput {
    name: string;
    type: string;
}
export declare class CreateGraphStyleScriptVocabularyFunctionOutputDto implements IGraphStyleScriptVocabularyFunctionOutput {
    type: string;
}
export declare class CreateGraphStyleScriptVocabularyFunctionDto implements IGraphStyleScriptVocabularyFunction {
    name: string;
    namespace: string;
    signature: string;
    documentation?: string;
    inputs: IGraphStyleScriptVocabularyFunctionInput[];
    outputs: IGraphStyleScriptVocabularyFunctionOutput[];
}
export declare class CreateGraphStyleScriptVocabularyDto implements IGraphStyleScriptVocabulary {
    version: number;
    directives: IGraphStyleScriptVocabularyDirective[];
    colors: IGraphStyleScriptVocabularyColor[];
    constants: CreateGraphStyleScriptVocabularyConstantDto[];
    variables: IGraphStyleScriptVocabularyVariable[];
    functions: IGraphStyleScriptVocabularyFunction[];
}
