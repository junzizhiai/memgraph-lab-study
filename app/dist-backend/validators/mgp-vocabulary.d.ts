import 'reflect-metadata';
import { IMgpVocabulary, IMgpVocabularyLanguage, IMgpVocabularyLanguageKeyword, MgpVocabularyLanguageKeywordType } from '../shared/models/mgp-vocabulary';
export declare class CreateMgpVocabularyLanguageKeyword implements IMgpVocabularyLanguageKeyword {
    name: string;
    namespace: string;
    type: MgpVocabularyLanguageKeywordType;
    documentation?: string;
}
export declare class CreateMgpVocabularyLanguageDto implements IMgpVocabularyLanguage {
    keywords: IMgpVocabularyLanguageKeyword[];
}
export declare class CreateMgpVocabularyDto implements IMgpVocabulary {
    name: string;
    version: number;
    support: string;
    language: IMgpVocabularyLanguage;
}
