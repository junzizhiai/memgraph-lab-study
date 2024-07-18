export interface MemgraphTrigger {
    name: string;
    statement: string;
    eventType: string;
    owner?: string;
}
