import { IDatasetInfo, IDatasetInfoContext } from '../shared/models/dataset-info';
export declare const getDatasetInfo: (slug: string) => Promise<IDatasetInfo | undefined>;
export declare const getDatasetInfoContext: () => Promise<IDatasetInfoContext>;
