export declare enum DatasetInfoReferenceType {
    BLOG = "Blog",
    DOCS = "Docs",
    PLAYGROUND = "Playground"
}
export interface IDatasetInfoReference {
    title: string;
    type: DatasetInfoReferenceType;
    url: string;
}
export interface IDatasetInfoStyle {
    title: string;
    code: string;
}
export interface IDatasetInfoQuery {
    title: string;
    query: string;
    description?: string;
    style?: IDatasetInfoStyle;
}
export interface IDatasetInfoCollection {
    title: string;
    style?: IDatasetInfoStyle;
    queries: IDatasetInfoQuery[];
}
export interface IDatasetInfoFormatCypherl {
    counts: {
        nodes: number;
        relationships: number;
        lines: number;
    };
    url: string;
}
export interface IDatasetInfoFormatCsvRequirements {
    memgraph: {
        minVersion: string;
    };
    modules: {
        name: string;
    }[];
}
export interface IDatasetInfoFormatCsvQuery {
    query: string;
}
export interface IDatasetInfoFormatCsv {
    counts: {
        nodes: number;
        relationships: number;
        files: number;
    };
    requirements: Partial<IDatasetInfoFormatCsvRequirements>;
    queries: IDatasetInfoFormatCsvQuery[];
}
export interface IDatasetInfo {
    slug: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    isFeatured: boolean;
    backgroundImageUrl?: string;
    counts: {
        nodes: number;
        relationships: number;
    };
    graphModel: {
        imageUrl?: string;
        description: string;
    };
    references: IDatasetInfoReference[];
    sampleQueries: IDatasetInfoQuery[];
    sampleCollections: IDatasetInfoCollection[];
    formats: {
        csv: IDatasetInfoFormatCsv;
        cypherl: IDatasetInfoFormatCypherl;
    };
}
export interface IDatasetInfoContext {
    datasets: IDatasetInfo[];
    categories: string[];
}
