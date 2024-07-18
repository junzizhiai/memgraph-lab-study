export declare class MemgraphError extends Error {
    message: string;
    status: number;
    constructor(message: string, status: number);
}
export declare class MemgraphValidationError extends MemgraphError {
    constructor(message: string);
}
export declare class MemgraphUnknownError extends MemgraphError {
    constructor(message: string);
}
export declare class MemgraphForbiddenError extends MemgraphError {
    constructor(message: string);
}
export declare class MemgraphNotFoundError extends MemgraphError {
    constructor(message: string);
}
export declare class MemgraphUnsupportedError extends MemgraphError {
    constructor(message: string);
}
export declare class MemgraphUnavailableError extends MemgraphError {
    constructor(message: string);
}
export declare class MemgraphQueryError extends MemgraphError {
    constructor(message: string);
}
export declare class MemgraphLlmSetupError extends MemgraphError {
    constructor(message: string);
}
export declare class MemgraphLlmVerificationError extends MemgraphError {
    constructor(message: string);
}
export declare class MemgraphLlmGraphSchemaError extends MemgraphError {
    constructor(message: string);
}
export declare class MemgraphLlmQueryError extends MemgraphError {
    constructor(message: string);
}
export declare class MemgraphConnectionUnknownError extends MemgraphUnknownError {
    constructor(message: string);
}
export declare class MemgraphConnectionTimeoutError extends MemgraphError {
    constructor();
}
export declare class MemgraphConnectionMissingError extends MemgraphError {
    constructor();
}
export declare class MemgraphWebSocketConnectionMissingError extends MemgraphError {
    constructor();
}
export declare class MemgraphConnectionAuthFailedError extends MemgraphError {
    constructor();
}
export declare class MemgraphConnectionLostError extends MemgraphUnavailableError {
    constructor();
}
export declare class MemgraphConnectionRefusedError extends MemgraphError {
    constructor();
}
export declare class MemgraphConnectionFailedError extends MemgraphError {
    constructor();
}
export declare class MemgraphConnectionEncryptionRequiredError extends MemgraphError {
    constructor();
}
export declare class MemgraphConnectionEncryptionNotRequiredError extends MemgraphError {
    constructor();
}
export declare class MemgraphConnectionUnknownDatabaseError extends MemgraphError {
    constructor();
}
export declare class MemgraphLicenseError extends MemgraphForbiddenError {
    constructor(message: string);
}
export declare class MemgraphLicenseInvalidKeyError extends MemgraphForbiddenError {
    constructor();
}
export declare class MemgraphLicenseInvalidOrgNameError extends MemgraphForbiddenError {
    constructor();
}
export declare class MemgraphLicenseExpiredKeyError extends MemgraphForbiddenError {
    constructor();
}
export declare class MemgraphDataCorruptedError extends MemgraphError {
    constructor(message: string);
}
