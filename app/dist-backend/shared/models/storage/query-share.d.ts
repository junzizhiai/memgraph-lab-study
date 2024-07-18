import { z } from 'zod';
export declare const CodeSchema: z.ZodObject<{
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
}, {
    value: string;
}>;
export declare const QueryShareRequestSchema: z.ZodObject<{
    query: z.ZodObject<{
        code: z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        code: {
            value: string;
        };
        params?: Record<string, any> | undefined;
    }, {
        code: {
            value: string;
        };
        params?: Record<string, any> | undefined;
    }>;
    style: z.ZodObject<{
        code: z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>;
        title: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code: {
            value: string;
        };
        title?: string | undefined;
    }, {
        code: {
            value: string;
        };
        title?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    query: {
        code: {
            value: string;
        };
        params?: Record<string, any> | undefined;
    };
    style: {
        code: {
            value: string;
        };
        title?: string | undefined;
    };
}, {
    query: {
        code: {
            value: string;
        };
        params?: Record<string, any> | undefined;
    };
    style: {
        code: {
            value: string;
        };
        title?: string | undefined;
    };
}>;
export declare enum QueryShareResultsView {
    GRAPH = "Graph",
    DATA = "Data"
}
export declare const QueryShareResponseSchema: z.ZodObject<{
    view: z.ZodNativeEnum<typeof QueryShareResultsView>;
    resultsIndex: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    view: QueryShareResultsView;
    resultsIndex: number;
}, {
    view: QueryShareResultsView;
    resultsIndex: number;
}>;
export declare type IQueryShareResponse = z.infer<typeof QueryShareResponseSchema>;
export declare const QueryShareMemgraphInfoSchema: z.ZodObject<{
    host: z.ZodOptional<z.ZodString>;
    port: z.ZodOptional<z.ZodNumber>;
    isEncrypted: z.ZodOptional<z.ZodBoolean>;
    databaseName: z.ZodOptional<z.ZodString>;
    wsPort: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    port?: number | undefined;
    host?: string | undefined;
    wsPort?: number | undefined;
    databaseName?: string | undefined;
    isEncrypted?: boolean | undefined;
}, {
    port?: number | undefined;
    host?: string | undefined;
    wsPort?: number | undefined;
    databaseName?: string | undefined;
    isEncrypted?: boolean | undefined;
}>;
export declare type IQueryShareMemgraphInfo = z.infer<typeof QueryShareMemgraphInfoSchema>;
export declare const QueryShareIdSchema: z.ZodString;
export declare const QueryShareSchema: z.ZodObject<{
    id: z.ZodString;
    request: z.ZodObject<{
        query: z.ZodObject<{
            code: z.ZodObject<{
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        }, {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        }>;
        style: z.ZodObject<{
            code: z.ZodObject<{
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>;
            title: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code: {
                value: string;
            };
            title?: string | undefined;
        }, {
            code: {
                value: string;
            };
            title?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        query: {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        };
        style: {
            code: {
                value: string;
            };
            title?: string | undefined;
        };
    }, {
        query: {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        };
        style: {
            code: {
                value: string;
            };
            title?: string | undefined;
        };
    }>;
    response: z.ZodObject<{
        view: z.ZodOptional<z.ZodNativeEnum<typeof QueryShareResultsView>>;
        resultsIndex: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        view?: QueryShareResultsView | undefined;
        resultsIndex?: number | undefined;
    }, {
        view?: QueryShareResultsView | undefined;
        resultsIndex?: number | undefined;
    }>;
    url: z.ZodString;
    memgraphUri: z.ZodString;
    memgraphInfo: z.ZodObject<{
        host: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodNumber>;
        isEncrypted: z.ZodOptional<z.ZodBoolean>;
        databaseName: z.ZodOptional<z.ZodString>;
        wsPort: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        port?: number | undefined;
        host?: string | undefined;
        wsPort?: number | undefined;
        databaseName?: string | undefined;
        isEncrypted?: boolean | undefined;
    }, {
        port?: number | undefined;
        host?: string | undefined;
        wsPort?: number | undefined;
        databaseName?: string | undefined;
        isEncrypted?: boolean | undefined;
    }>;
    viewCount: z.ZodNumber;
    createdBy: z.ZodObject<{
        id: z.ZodString;
        username: z.ZodString;
        createdAt: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        username: string;
        id: string;
        createdAt: number;
    }, {
        username: string;
        id: string;
        createdAt: number;
    }>;
    createdAt: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    request: {
        query: {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        };
        style: {
            code: {
                value: string;
            };
            title?: string | undefined;
        };
    };
    url: string;
    id: string;
    createdAt: number;
    response: {
        view?: QueryShareResultsView | undefined;
        resultsIndex?: number | undefined;
    };
    memgraphUri: string;
    memgraphInfo: {
        port?: number | undefined;
        host?: string | undefined;
        wsPort?: number | undefined;
        databaseName?: string | undefined;
        isEncrypted?: boolean | undefined;
    };
    viewCount: number;
    createdBy: {
        username: string;
        id: string;
        createdAt: number;
    };
}, {
    request: {
        query: {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        };
        style: {
            code: {
                value: string;
            };
            title?: string | undefined;
        };
    };
    url: string;
    id: string;
    createdAt: number;
    response: {
        view?: QueryShareResultsView | undefined;
        resultsIndex?: number | undefined;
    };
    memgraphUri: string;
    memgraphInfo: {
        port?: number | undefined;
        host?: string | undefined;
        wsPort?: number | undefined;
        databaseName?: string | undefined;
        isEncrypted?: boolean | undefined;
    };
    viewCount: number;
    createdBy: {
        username: string;
        id: string;
        createdAt: number;
    };
}>;
export declare type IQueryShare = z.infer<typeof QueryShareSchema>;
export declare const QueryShareViewSchema: z.ZodObject<{
    viewedAt: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    viewedAt: number;
}, {
    viewedAt: number;
}>;
export declare type IQueryShareView = z.infer<typeof QueryShareViewSchema>;
export declare const CreateQueryShareSchema: z.ZodObject<Pick<{
    id: z.ZodString;
    request: z.ZodObject<{
        query: z.ZodObject<{
            code: z.ZodObject<{
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        }, {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        }>;
        style: z.ZodObject<{
            code: z.ZodObject<{
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>;
            title: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code: {
                value: string;
            };
            title?: string | undefined;
        }, {
            code: {
                value: string;
            };
            title?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        query: {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        };
        style: {
            code: {
                value: string;
            };
            title?: string | undefined;
        };
    }, {
        query: {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        };
        style: {
            code: {
                value: string;
            };
            title?: string | undefined;
        };
    }>;
    response: z.ZodObject<{
        view: z.ZodOptional<z.ZodNativeEnum<typeof QueryShareResultsView>>;
        resultsIndex: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        view?: QueryShareResultsView | undefined;
        resultsIndex?: number | undefined;
    }, {
        view?: QueryShareResultsView | undefined;
        resultsIndex?: number | undefined;
    }>;
    url: z.ZodString;
    memgraphUri: z.ZodString;
    memgraphInfo: z.ZodObject<{
        host: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodNumber>;
        isEncrypted: z.ZodOptional<z.ZodBoolean>;
        databaseName: z.ZodOptional<z.ZodString>;
        wsPort: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        port?: number | undefined;
        host?: string | undefined;
        wsPort?: number | undefined;
        databaseName?: string | undefined;
        isEncrypted?: boolean | undefined;
    }, {
        port?: number | undefined;
        host?: string | undefined;
        wsPort?: number | undefined;
        databaseName?: string | undefined;
        isEncrypted?: boolean | undefined;
    }>;
    viewCount: z.ZodNumber;
    createdBy: z.ZodObject<{
        id: z.ZodString;
        username: z.ZodString;
        createdAt: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        username: string;
        id: string;
        createdAt: number;
    }, {
        username: string;
        id: string;
        createdAt: number;
    }>;
    createdAt: z.ZodNumber;
}, "request" | "response">, "strip", z.ZodTypeAny, {
    request: {
        query: {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        };
        style: {
            code: {
                value: string;
            };
            title?: string | undefined;
        };
    };
    response: {
        view?: QueryShareResultsView | undefined;
        resultsIndex?: number | undefined;
    };
}, {
    request: {
        query: {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        };
        style: {
            code: {
                value: string;
            };
            title?: string | undefined;
        };
    };
    response: {
        view?: QueryShareResultsView | undefined;
        resultsIndex?: number | undefined;
    };
}>;
export declare type ICreateQueryShare = z.infer<typeof CreateQueryShareSchema>;
export declare const CreateQueryShareWithUrlParamsSchema: z.ZodObject<Pick<{
    id: z.ZodString;
    request: z.ZodObject<{
        query: z.ZodObject<{
            code: z.ZodObject<{
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        }, {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        }>;
        style: z.ZodObject<{
            code: z.ZodObject<{
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>;
            title: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code: {
                value: string;
            };
            title?: string | undefined;
        }, {
            code: {
                value: string;
            };
            title?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        query: {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        };
        style: {
            code: {
                value: string;
            };
            title?: string | undefined;
        };
    }, {
        query: {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        };
        style: {
            code: {
                value: string;
            };
            title?: string | undefined;
        };
    }>;
    response: z.ZodObject<{
        view: z.ZodOptional<z.ZodNativeEnum<typeof QueryShareResultsView>>;
        resultsIndex: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        view?: QueryShareResultsView | undefined;
        resultsIndex?: number | undefined;
    }, {
        view?: QueryShareResultsView | undefined;
        resultsIndex?: number | undefined;
    }>;
    url: z.ZodString;
    memgraphUri: z.ZodString;
    memgraphInfo: z.ZodObject<{
        host: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodNumber>;
        isEncrypted: z.ZodOptional<z.ZodBoolean>;
        databaseName: z.ZodOptional<z.ZodString>;
        wsPort: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        port?: number | undefined;
        host?: string | undefined;
        wsPort?: number | undefined;
        databaseName?: string | undefined;
        isEncrypted?: boolean | undefined;
    }, {
        port?: number | undefined;
        host?: string | undefined;
        wsPort?: number | undefined;
        databaseName?: string | undefined;
        isEncrypted?: boolean | undefined;
    }>;
    viewCount: z.ZodNumber;
    createdBy: z.ZodObject<{
        id: z.ZodString;
        username: z.ZodString;
        createdAt: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        username: string;
        id: string;
        createdAt: number;
    }, {
        username: string;
        id: string;
        createdAt: number;
    }>;
    createdAt: z.ZodNumber;
}, "request" | "response" | "memgraphUri" | "memgraphInfo">, "strip", z.ZodTypeAny, {
    request: {
        query: {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        };
        style: {
            code: {
                value: string;
            };
            title?: string | undefined;
        };
    };
    response: {
        view?: QueryShareResultsView | undefined;
        resultsIndex?: number | undefined;
    };
    memgraphUri: string;
    memgraphInfo: {
        port?: number | undefined;
        host?: string | undefined;
        wsPort?: number | undefined;
        databaseName?: string | undefined;
        isEncrypted?: boolean | undefined;
    };
}, {
    request: {
        query: {
            code: {
                value: string;
            };
            params?: Record<string, any> | undefined;
        };
        style: {
            code: {
                value: string;
            };
            title?: string | undefined;
        };
    };
    response: {
        view?: QueryShareResultsView | undefined;
        resultsIndex?: number | undefined;
    };
    memgraphUri: string;
    memgraphInfo: {
        port?: number | undefined;
        host?: string | undefined;
        wsPort?: number | undefined;
        databaseName?: string | undefined;
        isEncrypted?: boolean | undefined;
    };
}>;
export declare type ICreateQueryShareWithUrlParams = z.infer<typeof CreateQueryShareWithUrlParamsSchema>;
export declare const getQueryShareUrlPart: (shareId: string, memgraphInfo: IQueryShareMemgraphInfo) => string;
