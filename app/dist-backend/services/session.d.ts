import MemgraphService from './memgraph';
export declare class SessionService {
    private sessionToMemgraphService;
    private sessionMaxAge;
    constructor(sessionMaxAge: number);
    createMemgraphService(sessionId: string): MemgraphService;
    getMemgraphServiceBySession(sessionId: string): MemgraphService;
    deleteMemgraphServiceBySession(sessionId: string): void;
    private isSessionExpired;
}
declare const _default: SessionService;
export default _default;
