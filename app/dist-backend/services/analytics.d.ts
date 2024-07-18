import { MemgraphConnectionInfo } from '../shared/models/memgraph-connection';
export interface ISegmentTrackOptions {
    headers: Record<string, any>;
}
export declare const SEGMENT_WRITE_KEY = "aRW3wDBFeuCfy0cRvoA3zDxGsGjWbCjy";
declare class Segment {
    private readonly client?;
    constructor();
    private track;
    trackConnected(anonymousId: string, connection: MemgraphConnectionInfo): void;
}
export declare class WebSegment {
    getAnalyticsJs(): Promise<string>;
    track(payload: any, type: string, options?: Partial<ISegmentTrackOptions>): Promise<void>;
}
declare const _default: Segment;
export default _default;
