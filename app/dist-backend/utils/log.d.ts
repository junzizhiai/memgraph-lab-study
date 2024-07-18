import os from 'os';
declare enum LogLevel {
    DEBUG = "debug",
    INFO = "info",
    WARN = "warn",
    ERROR = "error"
}
declare const _default: {
    debug: (message: string, context?: Record<string, any> | undefined) => void;
    info: (message: string, context?: Record<string, any> | undefined) => void;
    warn: (message: string, context?: Record<string, any> | undefined) => void;
    error: (error: Error, message?: string | undefined, context?: Record<string, any> | undefined) => void;
    flush: () => void;
    logger: import("pino").Logger<{
        level: string;
        formatters: {
            level: (label: string) => {
                level: string;
            };
        };
        base: {
            app: string;
            hostname?: undefined;
            env?: undefined;
        } | {
            hostname: typeof os.hostname;
            env: string;
            app: string;
        };
        enabled: boolean;
        timestamp: () => string;
        transport: {
            target: string;
            options: {
                translateTime: string;
                messageFormat: string;
                ignore: string;
            };
        } | undefined;
    }>;
    LogLevel: typeof LogLevel;
};
export default _default;
