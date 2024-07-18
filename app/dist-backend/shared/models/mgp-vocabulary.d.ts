export declare enum MgpVocabularyLanguageKeywordType {
    EXCEPTION = "exception",
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
export interface IMgpVocabularyLanguageKeyword {
    name: string;
    namespace: string;
    type: MgpVocabularyLanguageKeywordType;
    documentation?: string;
}
export interface IMgpVocabularyLanguage {
    keywords: IMgpVocabularyLanguageKeyword[];
}
export interface IMgpVocabulary {
    name: string;
    version: number;
    support: string;
    language: IMgpVocabularyLanguage;
}
