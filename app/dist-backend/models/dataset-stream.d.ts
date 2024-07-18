/// <reference types="node" />
import * as readline from 'readline';
import { PassThrough } from 'stream';
import { IDatasetInfo } from '../shared/models/dataset-info';
export declare class DatasetStream {
    readonly datasetInfo: IDatasetInfo;
    readonly url: string;
    constructor(datasetInfo: IDatasetInfo);
    getStreamContent(): Promise<string>;
    getStream(): Promise<PassThrough>;
    getReadlineStream(): Promise<readline.Interface>;
}
export declare function getDatasetStream(slug: string): Promise<DatasetStream>;
