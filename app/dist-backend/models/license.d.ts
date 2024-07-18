export interface MemgraphLicense {
    organizationName: string;
    validUntil?: Date;
}
export declare const decodeMemgraphLicenseKey: (key: string) => MemgraphLicense | null;
export declare const validateMemgraphLicense: (orgName: string, key: string) => void;
