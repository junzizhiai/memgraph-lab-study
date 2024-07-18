import { ICypherVocabulary } from './cypher-vocabulary';
import { MemgraphModuleReference } from './memgraph-module';
import { IMgpVocabulary } from './mgp-vocabulary';
export interface IContextInfoModule {
    name: string;
    references: MemgraphModuleReference[];
}
export interface IContextInfoVocabulary {
    cypher: ICypherVocabulary[];
    mgp: IMgpVocabulary[];
}
export interface IContextInfo {
    vocabulary: IContextInfoVocabulary;
    modules: IContextInfoModule[];
}
