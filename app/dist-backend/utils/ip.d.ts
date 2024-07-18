/**
 * Checks if IP address is valid and unicast.
 *
 * IP addresses that are not unicast are part of
 * reserved IP ranges such as: localhost, broadcast,
 * multicast, private network ranges, etc.
 *
 * @param ip IP Address
 */
export declare function isUnicastIP(ip: string): boolean;
export declare function isLoopbackIP(ip: string): boolean;
export declare function isLocalhost(host: string): boolean;
export declare function isLoopbackHostname(hostOrIp: string): boolean;
export declare function isReservedHostname(hostOrIp: string): boolean;
