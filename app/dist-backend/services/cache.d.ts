interface InMemoryCacheOptions {
    timeoutSec: number;
}
declare class InMemoryCache {
    private valueByKey;
    put(key: string, value: any, options: InMemoryCacheOptions): void;
    get(key: string): any | undefined;
    clear(key: string): void;
}
declare const _default: InMemoryCache;
export default _default;
