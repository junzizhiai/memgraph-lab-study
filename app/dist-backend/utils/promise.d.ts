export declare class TimeoutError extends Error {
    constructor();
}
export declare const promiseWithTimeout: <T>(promise: Promise<T>, ms: number) => Promise<T>;
