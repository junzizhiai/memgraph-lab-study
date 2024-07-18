export declare class Version {
    readonly value: string;
    readonly numbers: number[];
    constructor(value: string);
    eq(version: Version): boolean;
    lt(version: Version): boolean;
    lte(version: Version): boolean;
    gt(version: Version): boolean;
    gte(version: Version): boolean;
}
