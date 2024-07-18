import { MemgraphEvent } from '../../shared/models/memgraph-event';
import { IMemgraphWebSocketConnection } from '../../shared/models/memgraph-connection';
export declare type IMemgraphEventCallback<T extends MemgraphEvent = MemgraphEvent> = (event: T) => void;
export declare class MemgraphWebSocketConnection {
    private readonly host;
    private readonly port;
    private readonly uri;
    private readonly auth?;
    private client;
    private isClosedByUser;
    private state;
    private reconnectRetryCount;
    private reconnectTimeoutId;
    private onEventCallback?;
    constructor(settings?: IMemgraphWebSocketConnection);
    connect(): void;
    onEvent(callback: IMemgraphEventCallback): void;
    disconnect(): void;
    private changeState;
    private handleOnOpen;
    private handleOnMessage;
    private handleOnError;
    private handleOnClose;
    private handleLogEvent;
    private handleStateEvent;
    private handleAuthEvent;
}
