import { Server } from 'http';
import { WebSocket } from 'ws';
export declare const setupWebsocket: (server: Server) => import("ws").Server<WebSocket>;
