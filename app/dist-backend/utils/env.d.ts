export interface Env {
    [index: string]: string | number | boolean;
    NODE_ENV: string;
    PORT: number;
    NAME: string;
    KEEP_ALIVE_TIMEOUT_MS: number;
    CACHE_IS_DISABLED: boolean;
    SESSION_SECRET: string;
    SESSION_MAX_AGE_SEC: number;
    REQUEST_BODY_LIMIT_MB: number;
    QUICK_CONNECT_IS_DISABLED: boolean;
    QUICK_CONNECT_MG_HOST: string;
    QUICK_CONNECT_MG_PORT: number;
    QUICK_CONNECT_MG_IS_ENCRYPTED: boolean;
    LOGIN_RESERVED_HOSTNAME_IS_ENABLED: boolean;
    LOGIN_VALIDATION_IS_ENABLED: boolean;
    LOGIN_RATE_LIMIT_IS_ENABLED: boolean;
    LOGIN_RATE_LIMIT_WINDOW_SEC: number;
    LOGIN_RATE_LIMIT_MAX_COUNT: number;
    AUTH_NATIVE_IS_DISABLED: boolean;
    AUTH_SAML_ENTRA_ID_IS_ENABLED: boolean;
    AUTH_SAML_ENTRA_ID_DISPLAY_NAME: string;
    AUTH_SAML_ENTRA_ID_ENTRY_POINT: string;
    AUTH_SAML_ENTRA_ID_CALLBACK_URL: string;
    AUTH_SAML_ENTRA_ID_APP_ID: string;
    AUTH_SAML_ENTRA_ID_SIGNATURE_ALGORITHM: string;
    AUTH_OIDC_ENTRA_ID_IS_ENABLED: boolean;
    AUTH_OIDC_ENTRA_ID_DISPLAY_NAME: string;
    AUTH_OIDC_ENTRA_ID_ISSUER: string;
    AUTH_OIDC_ENTRA_ID_AUTHORIZATION_URL: string;
    AUTH_OIDC_ENTRA_ID_TOKEN_URL: string;
    AUTH_OIDC_ENTRA_ID_USER_INFO_URL: string;
    AUTH_OIDC_ENTRA_ID_CLIENT_ID: string;
    AUTH_OIDC_ENTRA_ID_CLIENT_SECRET: string;
    AUTH_OIDC_ENTRA_ID_CALLBACK_URL: string;
    AUTH_OIDC_ENTRA_ID_SCOPE: string;
    AUTH_OIDC_OKTA_IS_ENABLED: boolean;
    AUTH_OIDC_OKTA_DISPLAY_NAME: string;
    AUTH_OIDC_OKTA_ISSUER: string;
    AUTH_OIDC_OKTA_AUTHORIZATION_URL: string;
    AUTH_OIDC_OKTA_TOKEN_URL: string;
    AUTH_OIDC_OKTA_USER_INFO_URL: string;
    AUTH_OIDC_OKTA_CLIENT_ID: string;
    AUTH_OIDC_OKTA_CLIENT_SECRET: string;
    AUTH_OIDC_OKTA_CALLBACK_URL: string;
    AUTH_OIDC_OKTA_SCOPE: string;
    AUTH_SAML_OKTA_IS_ENABLED: boolean;
    AUTH_SAML_OKTA_DISPLAY_NAME: string;
    AUTH_SAML_OKTA_ENTRY_POINT: string;
    AUTH_SAML_OKTA_CALLBACK_URL: string;
    AUTH_SAML_OKTA_ISSUER: string;
    AUTH_SAML_OKTA_SIGNATURE_ALGORITHM: string;
    QUERY_RATE_LIMIT_IS_ENABLED: boolean;
    QUERY_RATE_LIMIT_WINDOW_SEC: number;
    QUERY_RATE_LIMIT_MAX_COUNT: number;
    QUERY_VALIDATION_IS_ENABLED: boolean;
    QUERY_MAX_LEN: number;
    NOTIFICATIONS_RATE_LIMIT_IS_ENABLED: boolean;
    NOTIFICATIONS_RATE_LIMIT_WINDOW_SEC: number;
    NOTIFICATIONS_RATE_LIMIT_MAX_COUNT: number;
    NOTIFICATIONS_HOSTNAME: string;
    STREAM_NAME_MAX_LEN: number;
    STREAM_VALIDATION_IS_ENABLED: boolean;
    NODE_LABEL_MAX_LEN: number;
    NODE_LABEL_VALIDATION_IS_ENABLED: boolean;
    NODE_PROPERTY_MAX_LEN: number;
    NODE_PROPERTY_VALIDATION_IS_ENABLED: boolean;
    MODULE_NAME_MAX_LEN: number;
    MODULE_CONTENT_MAX_LEN: number;
    MODULE_VALIDATION_IS_ENABLED: boolean;
    LOG_LEVEL: string;
    LOG_IS_ENABLED: boolean;
    LOG_CONTEXT_IS_ENABLED: boolean;
    LOG_IS_PRETTY_PRINT: boolean;
    LOG_REQUEST_BODY_IS_ENABLED: boolean;
    LOG_RESPONSE_BODY_IS_ENABLED: boolean;
    SLACK_IS_ENABLED: boolean;
    SLACK_NOTIFICATION_URL: string;
    STORAGE_MG_HOST: string;
    STORAGE_MG_PORT: number;
    STORAGE_MG_IS_ENCRYPTED: boolean;
    STORAGE_MG_DATABASE_NAME: string;
    STORAGE_MG_USERNAME: string;
    STORAGE_MG_PASSWORD: string;
    STORAGE_MG_CONNECT_TIMEOUT_MS: number;
    ENTERPRISE_LICENSE_ORG_NAME: string;
    ENTERPRISE_LICENSE_KEY: string;
}
declare const env: Env;
export declare const isProduction: () => boolean;
export declare const isPlatform: () => boolean;
export declare const isDocker: () => boolean;
export declare const isStaging: () => boolean;
export declare const isLocal: () => boolean;
export declare const isTesting: () => boolean;
export default env;