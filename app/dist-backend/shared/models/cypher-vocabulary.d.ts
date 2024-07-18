export declare enum CypherVocabularyGroupType {
    KEYWORD = "keyword",
    CONSTANT = "constant",
    FUNCTION = "function",
    PROPERTY = "property",
    METHOD = "method",
    MODULE = "module",
    CLASS = "class",
    SNIPPET = "snippet",
    UNIT = "unit",
    VARIABLE = "variable",
    COLOR = "color",
    CONSTRUCTOR = "constructor",
    ENUM = "enum",
    EVENT = "event",
    FIELD = "field",
    FILE = "file",
    INTERFACE = "interface",
    FOLDER = "folder",
    ISSUE = "issue",
    OPERATOR = "operator",
    REFERENCE = "reference",
    STRUCT = "struct",
    TEXT = "text",
    TYPE = "type",
    USER = "user",
    VALUE = "value"
}
export interface ICypherVocabularyType {
    name: string;
    properties?: string[];
}
export interface ICypherVocabularyCommand {
    showText: string;
    insertText?: string;
    searchText?: string;
    caption?: string;
    documentation?: string;
    type?: CypherVocabularyGroupType;
}
export interface ICypherVocabularyCommandGroup {
    name: string;
    type: CypherVocabularyGroupType;
    items: ICypherVocabularyCommand[];
}
export interface ICypherVocabularyFunctionInput {
    name: string;
    type?: string;
    default?: string;
}
export interface ICypherVocabularyFunctionOutput {
    type: string;
}
export interface ICypherVocabularyFunction {
    name: string;
    namespace: string;
    signature: string;
    template?: string;
    documentation?: string;
    inputs: ICypherVocabularyFunctionInput[];
    outputs: ICypherVocabularyFunctionOutput[];
}
export interface ICypherVocabularyFunctionGroup {
    name: string;
    type: CypherVocabularyGroupType;
    items: ICypherVocabularyFunction[];
}
export interface ICypherVocabularyColor {
    token: string;
    foreground?: string;
    background?: string;
    fontStyle?: string;
}
export interface ICypherVocabularyLanguage {
    types: ICypherVocabularyType[];
    commands: ICypherVocabularyCommandGroup[];
    functions: ICypherVocabularyFunctionGroup[];
}
export interface ICypherVocabulary {
    name: string;
    version: number;
    support: string;
    colors: ICypherVocabularyColor[];
    language: ICypherVocabularyLanguage;
}
