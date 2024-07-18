export declare function omitUndefined<T extends Record<string, any>>(object: T): Partial<T>;
export declare function isObjectEqual<T extends Record<string, any>>(object: T, otherObject: T): boolean;
export declare function doNothing<T>(): void;
interface Omit {
    <T extends object, K extends readonly [...(keyof T)[]]>(obj: T, ...keys: K): {
        [K2 in Exclude<keyof T, K[number]>]: T[K2];
    };
}
export declare const omit: Omit;
export {};
