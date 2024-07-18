import { Request, Response } from 'express';
import { ResponseEmpty, ResponseMultiple, ResponseSingle } from '../shared/api/common';
import { Unpack } from '../shared/types';
/**
 * Generic type must be provided
 * sendSingleResponse<RequestType>
 */
export declare const sendMultiResponse: <T extends ResponseMultiple<Unpack<T["items"]>> = never>(req: Request, res: Response, content: T["items"], totalCount?: number | undefined) => void;
/**
 * Generic type must be provided
 * sendSingleResponse<RequestType>
 */
export declare const sendSingleResponse: <T extends ResponseSingle<T["data"]> = never>(req: Request, res: Response, content: T["data"]) => void;
export declare function sendEmptyResponse<T extends ResponseEmpty>(_req: Request, res: Response): void;
export declare const sendErrorResponse: (_req: Request, res: Response, error: Error) => void;
export interface RequestUserInformation {
    countryCode: string;
    userAgent: string;
    ipAddress: string;
}
export declare const getCountryCodeFromRequest: (req: Request) => string | undefined;
export declare const getUserInformationFromRequest: (req: Request) => RequestUserInformation;
