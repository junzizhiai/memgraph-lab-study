export declare class LabError extends Error {
    message: string;
    status: number;
    constructor(message: string, status: number);
}
/**
 * The server could not understand the request due to invalid syntax.
 */
export declare class LabBadRequestError extends LabError {
    constructor(message: string);
}
/**
 * The client must authenticate itself to get the requested response.
 */
export declare class LabUnauthorizedError extends LabError {
    constructor(message: string);
}
/**
 * The client does not have access rights to the content; that is,
 * it is unauthorized, so the server is refusing to give the requested
 * resource. Unlike 401, the client's identity is known to the server.
 */
export declare class LabForbiddenError extends LabError {
    constructor(message: string);
}
/**
 * The server can not find the requested resource.
 */
export declare class LabNotFoundError extends LabError {
    constructor(message: string);
}
/**
 * The user has sent too many requests in a given amount of time ("rate limiting").
 */
export declare class LabTooManyRequestsError extends LabError {
    constructor(message: string);
}
/**
 * The user has sent too many requests in a given amount of time ("rate limiting").
 */
export declare class LabInternalError extends LabError {
    constructor(message: string);
}
