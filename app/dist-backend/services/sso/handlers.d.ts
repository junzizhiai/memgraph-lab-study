import { IProviderHandler } from './providers/shared';
import { SSOProviderType } from '../../shared/models/sso';
export declare const getSSOProviderType: (name: string) => SSOProviderType | undefined;
export declare const getSSOProviderHandler: (name: string) => IProviderHandler;
export declare const getEnabledSSOProviders: () => {
    type: SSOProviderType;
    displayName: string;
}[];
