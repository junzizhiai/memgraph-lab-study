import { RequestHandler } from 'express';
export interface ILicenseOptions {
    organizationName: string;
    key: string;
}
export declare const requireLicense: (options: ILicenseOptions) => RequestHandler;
