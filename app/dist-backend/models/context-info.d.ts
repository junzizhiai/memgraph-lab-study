import { ICypherVocabulary } from '../shared/models/cypher-vocabulary';
import { MemgraphModuleReference } from '../shared/models/memgraph-module';
import { IContextInfoModule } from '../shared/models/context-info';
import { IMgpVocabulary } from '../shared/models/mgp-vocabulary';
export declare const CONTEXT_URL = "https://download.memgraph.com/asset/lab/v1";
export declare const getCypherVocabulary: (mgVersion: string) => Promise<ICypherVocabulary | undefined>;
export declare const getMgpVocabulary: (mgVersion: string) => Promise<IMgpVocabulary | undefined>;
export declare const getModuleReferences: (moduleName: string) => Promise<MemgraphModuleReference[]>;
export declare const getModulesReferences: () => Promise<IContextInfoModule[]>;
