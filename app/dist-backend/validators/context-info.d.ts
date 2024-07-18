import { ICypherVocabulary } from '../shared/models/cypher-vocabulary';
import { MemgraphModuleReference } from '../shared/models/memgraph-module';
import { IMgpVocabulary } from '../shared/models/mgp-vocabulary';
import { IContextInfo, IContextInfoModule, IContextInfoVocabulary } from '../shared/models/context-info';
export declare class CreateModuleReferenceDto implements MemgraphModuleReference {
    title: string;
    url: string;
}
export declare class CreateContextInfoModuleDto implements IContextInfoModule {
    name: string;
    references: MemgraphModuleReference[];
}
export declare class CreateContextInfoVocabularyDto implements IContextInfoVocabulary {
    cypher: ICypherVocabulary[];
    mgp: IMgpVocabulary[];
}
export declare class CreateContextInfoDto implements IContextInfo {
    vocabulary: IContextInfoVocabulary;
    modules: IContextInfoModule[];
}
