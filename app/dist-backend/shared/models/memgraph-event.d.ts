export declare enum MemgraphEventType {
    AUTH = "auth",
    LOG = "log",
    STATE = "state"
}
export declare enum MemgraphLogLevel {
    TRACE = "trace",
    DEBUG = "debug",
    INFO = "info",
    WARNING = "warning",
    ERROR = "error",
    CRITICAL = "critical"
}
export declare enum MemgraphWebSocketState {
    INITIALIZING = "Initializing",
    CONNECTING = "Connecting",
    CONNECTED = "Connected",
    AUTHENTICATING = "Authenticating",
    AUTHENTICATION_FAILED = "Authentication failed",
    RECONNECTING = "Reconnecting",
    DISCONNECTING = "Disconnecting",
    DISCONNECTED = "Disconnected"
}
interface MemgraphBaseEvent<T extends MemgraphEventType, K extends object> {
    type: T;
    timestamp: number;
    data: K;
}
export declare type MemgraphAuthEvent = MemgraphBaseEvent<MemgraphEventType.AUTH, {
    success: boolean;
    message: string;
}>;
export declare type MemgraphLogEvent = MemgraphBaseEvent<MemgraphEventType.LOG, {
    level: MemgraphLogLevel;
    message: string;
}>;
export declare type MemgraphStateInitializingEvent = MemgraphBaseEvent<MemgraphEventType.STATE, {
    oldState: MemgraphWebSocketState;
    newState: MemgraphWebSocketState.INITIALIZING;
}>;
export declare type MemgraphStateConnectingEvent = MemgraphBaseEvent<MemgraphEventType.STATE, {
    oldState: MemgraphWebSocketState;
    newState: MemgraphWebSocketState.CONNECTING;
}>;
export declare type MemgraphStateConnectedEvent = MemgraphBaseEvent<MemgraphEventType.STATE, {
    oldState: MemgraphWebSocketState;
    newState: MemgraphWebSocketState.CONNECTED;
}>;
export declare type MemgraphStateAuthenticatingEvent = MemgraphBaseEvent<MemgraphEventType.STATE, {
    oldState: MemgraphWebSocketState;
    newState: MemgraphWebSocketState.AUTHENTICATING;
}>;
export declare type MemgraphStateAuthenticationFailedEvent = MemgraphBaseEvent<MemgraphEventType.STATE, {
    oldState: MemgraphWebSocketState;
    newState: MemgraphWebSocketState.AUTHENTICATION_FAILED;
}>;
export declare type MemgraphStateReconnectingEvent = MemgraphBaseEvent<MemgraphEventType.STATE, {
    oldState: MemgraphWebSocketState;
    newState: MemgraphWebSocketState.RECONNECTING;
    retryCount: number;
    retryTimestamp: number;
}>;
export declare type MemgraphStateDisconnectingEvent = MemgraphBaseEvent<MemgraphEventType.STATE, {
    oldState: MemgraphWebSocketState;
    newState: MemgraphWebSocketState.DISCONNECTING;
}>;
export declare type MemgraphStateDisconnectedEvent = MemgraphBaseEvent<MemgraphEventType.STATE, {
    oldState: MemgraphWebSocketState;
    newState: MemgraphWebSocketState.DISCONNECTED;
}>;
export declare type MemgraphStateEvent = MemgraphStateInitializingEvent | MemgraphStateConnectingEvent | MemgraphStateConnectedEvent | MemgraphStateAuthenticatingEvent | MemgraphStateAuthenticationFailedEvent | MemgraphStateReconnectingEvent | MemgraphStateDisconnectingEvent | MemgraphStateDisconnectedEvent;
export declare type MemgraphEvent = MemgraphAuthEvent | MemgraphLogEvent | MemgraphStateEvent;
export {};
