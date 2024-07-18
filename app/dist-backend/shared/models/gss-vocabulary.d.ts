export interface IGraphStyleScriptVocabularyDirectiveProperty {
    name: string;
    type: string;
    documentation?: string;
}
export interface IGraphStyleScriptVocabularyDirective {
    name: string;
    documentation?: string;
    properties: IGraphStyleScriptVocabularyDirectiveProperty[];
}
export interface IGraphStyleScriptVocabularyColor {
    name: string;
}
export interface IGraphStyleScriptVocabularyConstant {
    name: string;
}
export interface IGraphStyleScriptVocabularyVariable {
    name: string;
    type: string;
    documentation?: string;
}
export interface IGraphStyleScriptVocabularyFunctionInput {
    name: string;
    type: string;
}
export interface IGraphStyleScriptVocabularyFunctionOutput {
    type: string;
}
export interface IGraphStyleScriptVocabularyFunction {
    name: string;
    namespace: string;
    signature: string;
    documentation?: string;
    inputs: IGraphStyleScriptVocabularyFunctionInput[];
    outputs: IGraphStyleScriptVocabularyFunctionOutput[];
}
export interface IGraphStyleScriptVocabulary {
    version: number;
    directives: IGraphStyleScriptVocabularyDirective[];
    colors: IGraphStyleScriptVocabularyColor[];
    constants: IGraphStyleScriptVocabularyConstant[];
    variables: IGraphStyleScriptVocabularyVariable[];
    functions: IGraphStyleScriptVocabularyFunction[];
}
