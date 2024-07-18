import { RateLimitRequestHandler } from 'express-rate-limit';
import { RequestHandler } from 'express';
export interface SecurityOptions {
    maxRequests: number;
    windowSec: number;
}
export declare const rateLimitRequests: (options: SecurityOptions) => RateLimitRequestHandler;
export declare const slowDownRequests: (options: SecurityOptions) => RequestHandler;
