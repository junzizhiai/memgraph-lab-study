/**
 * Get the most correct time in milliseconds. For input parameter
 * as current time send "process.hrtime()".
 *
 * @param startedHrTime Current process.hrtime()
 */
export declare const getDurationInMs: (startedHrTime: [number, number]) => number;
export declare const wait: (milliseconds: number) => Promise<void>;
