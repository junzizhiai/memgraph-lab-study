import 'reflect-metadata';
import { CypherVocabularyGroupType, ICypherVocabulary, ICypherVocabularyColor, ICypherVocabularyCommand, ICypherVocabularyCommandGroup, ICypherVocabularyFunction, ICypherVocabularyFunctionGroup, ICypherVocabularyFunctionInput, ICypherVocabularyFunctionOutput, ICypherVocabularyLanguage, ICypherVocabularyType } from '../shared/models/cypher-vocabulary';
export declare class CreateCypherVocabularyColorDto implements ICypherVocabularyColor {
    token: string;
    foreground: string;
    background: string;
    fontStyle: string;
}
export declare class CreateCypherVocabularyTypeDto implements ICypherVocabularyType {
    name: string;
    properties: string[];
}
export declare class CreateCypherVocabularyCommandDto implements ICypherVocabularyCommand {
    showText: string;
    insertText: string;
    searchText: string;
    caption: string;
    documentation: string;
    type: CypherVocabularyGroupType;
}
export declare class CreateCypherVocabularyCommandGroupDto implements ICypherVocabularyCommandGroup {
    name: string;
    type: CypherVocabularyGroupType;
    items: ICypherVocabularyCommand[];
}
export declare class CreateCypherVocabularyFunctionInputDto implements ICypherVocabularyFunctionInput {
    name: string;
    type: string;
    default: string;
}
export declare class CreateCypherVocabularyFunctionOutputDto implements ICypherVocabularyFunctionOutput {
    type: string;
}
export declare class CreateCypherVocabularyFunctionDto implements ICypherVocabularyFunction {
    name: string;
    namespace: string;
    signature: string;
    template?: string;
    documentation?: string;
    inputs: ICypherVocabularyFunctionInput[];
    outputs: ICypherVocabularyFunctionOutput[];
}
export declare class CreateCypherVocabularyFunctionGroupDto implements ICypherVocabularyFunctionGroup {
    name: string;
    type: CypherVocabularyGroupType;
    items: ICypherVocabularyFunction[];
}
export declare class CreateCypherVocabularyLanguageDto implements ICypherVocabularyLanguage {
    types: ICypherVocabularyType[];
    commands: ICypherVocabularyCommandGroup[];
    functions: ICypherVocabularyFunctionGroup[];
}
export declare class CreateCypherVocabularyDto implements ICypherVocabulary {
    name: string;
    version: number;
    support: string;
    colors: ICypherVocabularyColor[];
    language: ICypherVocabularyLanguage;
}
