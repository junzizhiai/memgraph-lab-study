import { Expand } from '../types';
export declare type RequestBodyEmpty = {};
export declare type ResponseEmpty = {};
export interface ResponseError {
    id: string;
    error: {
        code: number;
        name: string;
        message: string;
    };
}
export declare type ResponseSingle<T> = {
    data: Expand<T>;
};
export declare type ResponseMultiple<T> = {
    startIndex: number;
    totalItems: number;
    pageIndex: number;
    itemsPerPage: number;
    currentItemCount: number;
    totalPages: number;
    nextLink: string | null;
    previousLink: string | null;
    items: Expand<T>[];
};
