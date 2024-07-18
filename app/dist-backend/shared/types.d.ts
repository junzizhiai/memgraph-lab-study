/**
 * List of TypeScript Primitive
 */
export declare type Primitive = string | Function | number | boolean | Symbol | undefined | null | symbol | {
    [Symbol.toPrimitive](hint: string): string | number;
};
/**
 * Extract type T from T[] or return T
 */
export declare type Unpack<T> = T extends (infer U)[] ? U : T;
/**
 * Define which properties are optional
 * type a = WithOptional<MyInterface, 'deletedAt' | 'userId'>
 */
export declare type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
/**
 * Extract common properties from A and B
 */
export declare type MappedKeys<A, B> = {
    [K in keyof A & keyof B]: A[K] extends B[K] ? K : never;
};
/**
 * Get list of keys of pro2perties that are optional for type T
 */
export declare type OptionalKeysOnly<T> = {
    [K in keyof T]-?: {} extends {
        [P in K]: T[K];
    } ? K : never;
}[keyof T];
/**
 * Get list of keys of properties that are required for type T
 */
export declare type RequiredKeysOnly<T> = {
    [K in keyof T]-?: {} extends {
        [P in K]: T[K];
    } ? never : K;
}[keyof T];
/**
 * PickI<T,U>
 *
 * similar to Pick but takes intreface instead of keys
 *
 * overrides property optionality with U
 */
export declare type PickI<T, U extends NoExtraKeys<Partial<T>, U>> = Expand<{
    [P in RequiredKeysOnly<U> & keyof T]: U[P];
} & {
    [P in OptionalKeysOnly<U> & keyof T]?: U[P];
}>;
/**
 * Keys from T that have a value of type V
 */
export declare type KeysMatching<T, V> = {
    [K in keyof T]-?: NonNullable<T[K]> extends V ? K : never;
}[keyof T];
/**
 * When interface extends this type it ensures that Child has no extra keys
 * Usage:
 * MyChild extends NoExtraKeys<MyParent, MyChild>
 */
export declare type NoExtraKeys<Parent, Child> = {
    [key in keyof Child]: keyof Child extends keyof Parent ? Child[key] : never;
};
/**
 * Usage: FullType = BaseType & Either<A, B>
 * Now FullType either A or B, it can't contain both.
 */
export declare type Either<A, B> = (A & {
    [key in keyof B]?: never;
}) | (B & {
    [key in keyof A]?: never;
});
/**
 * All keys become :never
 */
export declare type Never<T> = {
    [key in keyof T]-?: never;
};
/**
 * E.g.
 * NeverlessKeys<{ a: never; b: number; c: string }>
 *  = "b" | "c"
 */
export declare type NeverlessKeys<T> = {
    [P in keyof T]: T[P] extends never ? never : P;
}[keyof T];
/**
 * E.g.
 * NeverlessKeys<{ a: never; b: number; c: string }>
 *  = "a"
 */
export declare type NeverKeys<T> = Exclude<keyof T, NeverlessKeys<T>>;
/**
 * E.g.
 * OmitNevers<{ a: never; b: number; c: string }>
 *  = { b: number; c: string }
 */
declare type DeepOmitNeversHelper<T> = Expand<{
    [P in RequiredKeysOnly<T> & NeverlessKeys<T> & keyof T]: T[P] extends Primitive ? T[P] : T[P] extends any[] ? DeepOmitArrayNevers<T[P]> : DeepOmitNevers<T[P]>;
} & {
    [P in OptionalKeysOnly<T> & NeverlessKeys<T> & keyof T]?: T[P] extends Primitive ? T[P] : T[P] extends any[] ? DeepOmitArrayNevers<T[P]> : DeepOmitNevers<T[P]>;
}>;
declare type DeepOmitArrayNevers<T extends any[]> = {
    [P in keyof T]: DeepOmitNevers<T[P]>;
};
export declare type DeepOmitNevers<T> = T extends Primitive ? T : DeepOmitNeversHelper<T>;
export declare type OmitNevers<T> = Expand<T extends Primitive ? T : {
    [P in keyof T & NeverlessKeys<T> & RequiredKeysOnly<T>]: T[P];
} & {
    [P in keyof T & NeverlessKeys<T> & OptionalKeysOnly<T>]?: T[P];
}>;
/**
 * Same as Omit but keeps optional propeties optional
 */
export declare type OmitRespectOptional<T, K extends keyof T> = Expand<WithOptional<Omit<T, K>, OptionalKeysOnly<Omit<T, K>>>>;
/**
 * Removes readonly tag from all properties
 */
export declare type Writeable<T> = {
    -readonly [P in keyof T]: T[P];
};
/**
 * Removes readonly tag from all deep properties
 */
export declare type DeepWriteable<T> = {
    -readonly [P in keyof T]: DeepWriteable<T[P]>;
};
/**
 * Returns the same type but expands it so IDE shows specific keys instead of an high level type
 */
export declare type Expand<T> = T extends infer O ? {
    [K in keyof O]: O[K];
} : never;
export declare type ExpandRecursively<T> = T extends Primitive ? T : T extends infer O ? {
    [K in keyof O]: ExpandRecursively<O[K]>;
} : never;
export {};
