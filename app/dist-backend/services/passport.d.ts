import { PassportStatic } from 'passport';
export interface JWTPayload {
    sessionId: string;
}
export declare const signJWT: (payload: JWTPayload) => string;
export declare const parseJWT: (token: string) => Promise<JWTPayload>;
/**
 * Strategy used to validate received JWT token from authorization header.
 * It will find correct payload and set it to req.user.
 *
 * @param passport Passport instance
 */
export declare const applyJWTStrategy: (passport: PassportStatic) => void;
