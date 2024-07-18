declare enum PrimitiveClassType {
    BIG_INT = "BigInt"
}
interface IEncodedBigInt {
    class: PrimitiveClassType.BIG_INT;
    value: string;
}
declare type IEncodeBigInt<T> = T extends bigint ? IEncodedBigInt : T extends Array<infer U> ? Array<IEncodeBigInt<U>> : T extends object ? {
    [K in keyof T]: IEncodeBigInt<T[K]>;
} : T;
declare type IDecodeBigInt<T> = T extends IEncodedBigInt ? bigint : T extends Array<infer U> ? Array<IDecodeBigInt<U>> : T extends object ? {
    [K in keyof T]: IDecodeBigInt<T[K]>;
} : T;
export declare const isEncodedBigInt: (value: any) => value is IEncodedBigInt;
export declare const decodeBigInt: <T>(value: T) => IDecodeBigInt<T>;
export declare const encodeBigInt: <T>(value: T) => IEncodeBigInt<T>;
export {};
