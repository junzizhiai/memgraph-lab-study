export declare type IAnalyticsProperties<T> = T & {
    system: IAnalyticsSystemProperties;
};
export declare enum AnalyticsConfigurationType {
    WEB = "Web",
    ELECTRON = "Electron",
    PLATFORM = "Platform",
    DOCKER = "Docker"
}
export interface IAnalyticsSystemProperties {
    version: string;
    os: string;
    configuration: AnalyticsConfigurationType;
    databaseName?: 'memgraph' | 'neo4j';
    databaseId?: string;
}
