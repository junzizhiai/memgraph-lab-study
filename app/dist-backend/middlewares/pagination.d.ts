import { Handler, Request } from 'express';
export declare class Page<T> {
    readonly totalCount: number;
    readonly records: T[];
    constructor(totalCount: number, records: T[]);
    private isFirstPage;
    private isLastPage;
    getNextLink(req: Request, options: PaginationOptions): string | null;
    getPreviousLink(req: Request, options: PaginationOptions): string | null;
    static getLink(req: Request, newPage: number, newSize: number): string | null;
}
export interface PaginationOptions {
    page: number;
    size: number;
    limit: number;
    offset: number;
}
export interface Pagination {
    options: PaginationOptions;
}
export declare const getPaginationOptions: (req: Request) => PaginationOptions;
export declare const handlePagination: () => Handler;
