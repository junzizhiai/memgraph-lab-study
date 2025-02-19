"use strict";
exports.id = 138;
exports.ids = [138];
exports.modules = {

/***/ 31395:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ BaseCallbackHandler)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var _load_serializable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86270);


/**
 * Abstract class that provides a set of optional methods that can be
 * overridden in derived classes to handle various events during the
 * execution of a LangChain application.
 */
class BaseCallbackHandlerMethodsClass {
}
/**
 * Abstract base class for creating callback handlers in the LangChain
 * framework. It provides a set of optional methods that can be overridden
 * in derived classes to handle various events during the execution of a
 * LangChain application.
 */
class BaseCallbackHandler extends BaseCallbackHandlerMethodsClass {
    get lc_namespace() {
        return ["langchain_core", "callbacks", this.name];
    }
    get lc_secrets() {
        return undefined;
    }
    get lc_attributes() {
        return undefined;
    }
    get lc_aliases() {
        return undefined;
    }
    /**
     * The name of the serializable. Override to provide an alias or
     * to preserve the serialized module name in minified environments.
     *
     * Implemented as a static method to support loading logic.
     */
    static lc_name() {
        return this.name;
    }
    /**
     * The final serialized identifier for the module.
     */
    get lc_id() {
        return [
            ...this.lc_namespace,
            (0,_load_serializable_js__WEBPACK_IMPORTED_MODULE_0__/* .get_lc_unique_name */ .j)(this.constructor),
        ];
    }
    constructor(input) {
        super();
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "lc_kwargs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ignoreLLM", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "ignoreChain", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "ignoreAgent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "ignoreRetriever", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "awaitHandlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: typeof process !== "undefined"
                ? // eslint-disable-next-line no-process-env
                    process.env?.LANGCHAIN_CALLBACKS_BACKGROUND !== "true"
                : true
        });
        this.lc_kwargs = input || {};
        if (input) {
            this.ignoreLLM = input.ignoreLLM ?? this.ignoreLLM;
            this.ignoreChain = input.ignoreChain ?? this.ignoreChain;
            this.ignoreAgent = input.ignoreAgent ?? this.ignoreAgent;
            this.ignoreRetriever = input.ignoreRetriever ?? this.ignoreRetriever;
        }
    }
    copy() {
        return new this.constructor(this);
    }
    toJSON() {
        return _load_serializable_js__WEBPACK_IMPORTED_MODULE_0__/* .Serializable.prototype.toJSON.call */ .i.prototype.toJSON.call(this);
    }
    toJSONNotImplemented() {
        return _load_serializable_js__WEBPACK_IMPORTED_MODULE_0__/* .Serializable.prototype.toJSONNotImplemented.call */ .i.prototype.toJSONNotImplemented.call(this);
    }
    static fromMethods(methods) {
        class Handler extends BaseCallbackHandler {
            constructor() {
                super();
                Object.defineProperty(this, "name", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: uuid__WEBPACK_IMPORTED_MODULE_1__.v4()
                });
                Object.assign(this, methods);
            }
        }
        return new Handler();
    }
}


/***/ }),

/***/ 34235:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ye": () => (/* binding */ CallbackManager),
  "xz": () => (/* binding */ ensureHandler),
  "QH": () => (/* binding */ parseCallbackConfigArg)
});

// UNUSED EXPORTS: BaseCallbackManager, CallbackManagerForChainRun, CallbackManagerForLLMRun, CallbackManagerForRetrieverRun, CallbackManagerForToolRun, TraceGroup, traceAsGroup

// EXTERNAL MODULE: ./node_modules/uuid/wrapper.mjs
var wrapper = __webpack_require__(7561);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/callbacks/base.js
var base = __webpack_require__(31395);
// EXTERNAL MODULE: ./node_modules/@langchain/core/node_modules/ansi-styles/index.js
var ansi_styles = __webpack_require__(65269);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/tracers/base.js
var tracers_base = __webpack_require__(74492);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/tracers/console.js


function wrap(style, text) {
    return `${style.open}${text}${style.close}`;
}
function tryJsonStringify(obj, fallback) {
    try {
        return JSON.stringify(obj, null, 2);
    }
    catch (err) {
        return fallback;
    }
}
function elapsed(run) {
    if (!run.end_time)
        return "";
    const elapsed = run.end_time - run.start_time;
    if (elapsed < 1000) {
        return `${elapsed}ms`;
    }
    return `${(elapsed / 1000).toFixed(2)}s`;
}
const { color } = ansi_styles;
/**
 * A tracer that logs all events to the console. It extends from the
 * `BaseTracer` class and overrides its methods to provide custom logging
 * functionality.
 * @example
 * ```typescript
 *
 * const llm = new ChatAnthropic({
 *   temperature: 0,
 *   tags: ["example", "callbacks", "constructor"],
 *   callbacks: [new ConsoleCallbackHandler()],
 * });
 *
 * ```
 */
class ConsoleCallbackHandler extends tracers_base/* BaseTracer */.Z {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "console_callback_handler"
        });
    }
    /**
     * Method used to persist the run. In this case, it simply returns a
     * resolved promise as there's no persistence logic.
     * @param _run The run to persist.
     * @returns A resolved promise.
     */
    persistRun(_run) {
        return Promise.resolve();
    }
    // utility methods
    /**
     * Method used to get all the parent runs of a given run.
     * @param run The run whose parents are to be retrieved.
     * @returns An array of parent runs.
     */
    getParents(run) {
        const parents = [];
        let currentRun = run;
        while (currentRun.parent_run_id) {
            const parent = this.runMap.get(currentRun.parent_run_id);
            if (parent) {
                parents.push(parent);
                currentRun = parent;
            }
            else {
                break;
            }
        }
        return parents;
    }
    /**
     * Method used to get a string representation of the run's lineage, which
     * is used in logging.
     * @param run The run whose lineage is to be retrieved.
     * @returns A string representation of the run's lineage.
     */
    getBreadcrumbs(run) {
        const parents = this.getParents(run).reverse();
        const string = [...parents, run]
            .map((parent, i, arr) => {
            const name = `${parent.execution_order}:${parent.run_type}:${parent.name}`;
            return i === arr.length - 1 ? wrap(ansi_styles.bold, name) : name;
        })
            .join(" > ");
        return wrap(color.grey, string);
    }
    // logging methods
    /**
     * Method used to log the start of a chain run.
     * @param run The chain run that has started.
     * @returns void
     */
    onChainStart(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.green, "[chain/start]")} [${crumbs}] Entering Chain run with input: ${tryJsonStringify(run.inputs, "[inputs]")}`);
    }
    /**
     * Method used to log the end of a chain run.
     * @param run The chain run that has ended.
     * @returns void
     */
    onChainEnd(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.cyan, "[chain/end]")} [${crumbs}] [${elapsed(run)}] Exiting Chain run with output: ${tryJsonStringify(run.outputs, "[outputs]")}`);
    }
    /**
     * Method used to log any errors of a chain run.
     * @param run The chain run that has errored.
     * @returns void
     */
    onChainError(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.red, "[chain/error]")} [${crumbs}] [${elapsed(run)}] Chain run errored with error: ${tryJsonStringify(run.error, "[error]")}`);
    }
    /**
     * Method used to log the start of an LLM run.
     * @param run The LLM run that has started.
     * @returns void
     */
    onLLMStart(run) {
        const crumbs = this.getBreadcrumbs(run);
        const inputs = "prompts" in run.inputs
            ? { prompts: run.inputs.prompts.map((p) => p.trim()) }
            : run.inputs;
        console.log(`${wrap(color.green, "[llm/start]")} [${crumbs}] Entering LLM run with input: ${tryJsonStringify(inputs, "[inputs]")}`);
    }
    /**
     * Method used to log the end of an LLM run.
     * @param run The LLM run that has ended.
     * @returns void
     */
    onLLMEnd(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.cyan, "[llm/end]")} [${crumbs}] [${elapsed(run)}] Exiting LLM run with output: ${tryJsonStringify(run.outputs, "[response]")}`);
    }
    /**
     * Method used to log any errors of an LLM run.
     * @param run The LLM run that has errored.
     * @returns void
     */
    onLLMError(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.red, "[llm/error]")} [${crumbs}] [${elapsed(run)}] LLM run errored with error: ${tryJsonStringify(run.error, "[error]")}`);
    }
    /**
     * Method used to log the start of a tool run.
     * @param run The tool run that has started.
     * @returns void
     */
    onToolStart(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.green, "[tool/start]")} [${crumbs}] Entering Tool run with input: "${run.inputs.input?.trim()}"`);
    }
    /**
     * Method used to log the end of a tool run.
     * @param run The tool run that has ended.
     * @returns void
     */
    onToolEnd(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.cyan, "[tool/end]")} [${crumbs}] [${elapsed(run)}] Exiting Tool run with output: "${run.outputs?.output?.trim()}"`);
    }
    /**
     * Method used to log any errors of a tool run.
     * @param run The tool run that has errored.
     * @returns void
     */
    onToolError(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.red, "[tool/error]")} [${crumbs}] [${elapsed(run)}] Tool run errored with error: ${tryJsonStringify(run.error, "[error]")}`);
    }
    /**
     * Method used to log the start of a retriever run.
     * @param run The retriever run that has started.
     * @returns void
     */
    onRetrieverStart(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.green, "[retriever/start]")} [${crumbs}] Entering Retriever run with input: ${tryJsonStringify(run.inputs, "[inputs]")}`);
    }
    /**
     * Method used to log the end of a retriever run.
     * @param run The retriever run that has ended.
     * @returns void
     */
    onRetrieverEnd(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.cyan, "[retriever/end]")} [${crumbs}] [${elapsed(run)}] Exiting Retriever run with output: ${tryJsonStringify(run.outputs, "[outputs]")}`);
    }
    /**
     * Method used to log any errors of a retriever run.
     * @param run The retriever run that has errored.
     * @returns void
     */
    onRetrieverError(run) {
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.red, "[retriever/error]")} [${crumbs}] [${elapsed(run)}] Retriever run errored with error: ${tryJsonStringify(run.error, "[error]")}`);
    }
    /**
     * Method used to log the action selected by the agent.
     * @param run The run in which the agent action occurred.
     * @returns void
     */
    onAgentAction(run) {
        const agentRun = run;
        const crumbs = this.getBreadcrumbs(run);
        console.log(`${wrap(color.blue, "[agent/action]")} [${crumbs}] Agent selected action: ${tryJsonStringify(agentRun.actions[agentRun.actions.length - 1], "[action]")}`);
    }
}

// EXTERNAL MODULE: ./node_modules/p-retry/index.js
var p_retry = __webpack_require__(42570);
// EXTERNAL MODULE: ./node_modules/p-queue/dist/index.js
var dist = __webpack_require__(94850);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/node_modules/langsmith/dist/utils/async_caller.js


const STATUS_NO_RETRY = [
    400,
    401,
    403,
    404,
    405,
    406,
    407,
    408, // Request Timeout
];
const STATUS_IGNORE = [
    409, // Conflict
];
/**
 * A class that can be used to make async calls with concurrency and retry logic.
 *
 * This is useful for making calls to any kind of "expensive" external resource,
 * be it because it's rate-limited, subject to network issues, etc.
 *
 * Concurrent calls are limited by the `maxConcurrency` parameter, which defaults
 * to `Infinity`. This means that by default, all calls will be made in parallel.
 *
 * Retries are limited by the `maxRetries` parameter, which defaults to 6. This
 * means that by default, each call will be retried up to 6 times, with an
 * exponential backoff between each attempt.
 */
class AsyncCaller {
    constructor(params) {
        Object.defineProperty(this, "maxConcurrency", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "maxRetries", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "queue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "onFailedResponseHook", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maxConcurrency = params.maxConcurrency ?? Infinity;
        this.maxRetries = params.maxRetries ?? 6;
        const PQueue =  true ? dist["default"] : dist;
        this.queue = new PQueue({ concurrency: this.maxConcurrency });
        this.onFailedResponseHook = params?.onFailedResponseHook;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    call(callable, ...args) {
        const onFailedResponseHook = this.onFailedResponseHook;
        return this.queue.add(() => p_retry(() => callable(...args).catch((error) => {
            // eslint-disable-next-line no-instanceof/no-instanceof
            if (error instanceof Error) {
                throw error;
            }
            else {
                throw new Error(error);
            }
        }), {
            async onFailedAttempt(error) {
                if (error.message.startsWith("Cancel") ||
                    error.message.startsWith("TimeoutError") ||
                    error.message.startsWith("AbortError")) {
                    throw error;
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (error?.code === "ECONNABORTED") {
                    throw error;
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const response = error?.response;
                const status = response?.status;
                if (status) {
                    if (STATUS_NO_RETRY.includes(+status)) {
                        throw error;
                    }
                    else if (STATUS_IGNORE.includes(+status)) {
                        return;
                    }
                    if (onFailedResponseHook) {
                        await onFailedResponseHook(response);
                    }
                }
            },
            // If needed we can change some of the defaults here,
            // but they're quite sensible.
            retries: this.maxRetries,
            randomize: true,
        }), { throwOnTimeout: true });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callWithOptions(options, callable, ...args) {
        // Note this doesn't cancel the underlying request,
        // when available prefer to use the signal option of the underlying call
        if (options.signal) {
            return Promise.race([
                this.call(callable, ...args),
                new Promise((_, reject) => {
                    options.signal?.addEventListener("abort", () => {
                        reject(new Error("AbortError"));
                    });
                }),
            ]);
        }
        return this.call(callable, ...args);
    }
    fetch(...args) {
        return this.call(() => fetch(...args).then((res) => (res.ok ? res : Promise.reject(res))));
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/node_modules/langsmith/dist/utils/messages.js
function isLangChainMessage(message) {
    return typeof message?._getType === "function";
}
function convertLangChainMessageToExample(message) {
    const converted = {
        type: message._getType(),
        data: { content: message.content },
    };
    // Check for presence of keys in additional_kwargs
    if (message?.additional_kwargs &&
        Object.keys(message.additional_kwargs).length > 0) {
        converted.data.additional_kwargs = { ...message.additional_kwargs };
    }
    return converted;
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/node_modules/langsmith/dist/utils/env.js
// Inlined from https://github.com/flexdinesh/browser-or-node

let globalEnv;
const isBrowser = () => typeof window !== "undefined" && typeof window.document !== "undefined";
const isWebWorker = () => typeof globalThis === "object" &&
    globalThis.constructor &&
    globalThis.constructor.name === "DedicatedWorkerGlobalScope";
const isJsDom = () => (typeof window !== "undefined" && window.name === "nodejs") ||
    (typeof navigator !== "undefined" &&
        (navigator.userAgent.includes("Node.js") ||
            navigator.userAgent.includes("jsdom")));
// Supabase Edge Function provides a `Deno` global object
// without `version` property
const isDeno = () => typeof Deno !== "undefined";
// Mark not-as-node if in Supabase Edge Function
const isNode = () => typeof process !== "undefined" &&
    typeof process.versions !== "undefined" &&
    typeof process.versions.node !== "undefined" &&
    !isDeno();
const getEnv = () => {
    if (globalEnv) {
        return globalEnv;
    }
    if (isBrowser()) {
        globalEnv = "browser";
    }
    else if (isNode()) {
        globalEnv = "node";
    }
    else if (isWebWorker()) {
        globalEnv = "webworker";
    }
    else if (isJsDom()) {
        globalEnv = "jsdom";
    }
    else if (isDeno()) {
        globalEnv = "deno";
    }
    else {
        globalEnv = "other";
    }
    return globalEnv;
};
let runtimeEnvironment;
async function env_getRuntimeEnvironment() {
    if (runtimeEnvironment === undefined) {
        const env = getEnv();
        const releaseEnv = getShas();
        runtimeEnvironment = {
            library: "langsmith",
            runtime: env,
            sdk: "langsmith-js",
            sdk_version: __version__,
            ...releaseEnv,
        };
    }
    return runtimeEnvironment;
}
/**
 * Retrieves the LangChain-specific environment variables from the current runtime environment.
 * Sensitive keys (containing the word "key", "token", or "secret") have their values redacted for security.
 *
 * @returns {Record<string, string>}
 *  - A record of LangChain-specific environment variables.
 */
function getLangChainEnvVars() {
    const allEnvVars = getEnvironmentVariables() || {};
    const envVars = {};
    for (const [key, value] of Object.entries(allEnvVars)) {
        if (key.startsWith("LANGCHAIN_") && typeof value === "string") {
            envVars[key] = value;
        }
    }
    for (const key in envVars) {
        if ((key.toLowerCase().includes("key") ||
            key.toLowerCase().includes("secret") ||
            key.toLowerCase().includes("token")) &&
            typeof envVars[key] === "string") {
            const value = envVars[key];
            envVars[key] =
                value.slice(0, 2) + "*".repeat(value.length - 4) + value.slice(-2);
        }
    }
    return envVars;
}
/**
 * Retrieves the LangChain-specific metadata from the current runtime environment.
 *
 * @returns {Record<string, string>}
 *  - A record of LangChain-specific metadata environment variables.
 */
function getLangChainEnvVarsMetadata() {
    const allEnvVars = getEnvironmentVariables() || {};
    const envVars = {};
    const excluded = [
        "LANGCHAIN_API_KEY",
        "LANGCHAIN_ENDPOINT",
        "LANGCHAIN_TRACING_V2",
        "LANGCHAIN_PROJECT",
        "LANGCHAIN_SESSION",
    ];
    for (const [key, value] of Object.entries(allEnvVars)) {
        if (key.startsWith("LANGCHAIN_") &&
            typeof value === "string" &&
            !excluded.includes(key) &&
            !key.toLowerCase().includes("key") &&
            !key.toLowerCase().includes("secret") &&
            !key.toLowerCase().includes("token")) {
            if (key === "LANGCHAIN_REVISION_ID") {
                envVars["revision_id"] = value;
            }
            else {
                envVars[key] = value;
            }
        }
    }
    return envVars;
}
/**
 * Retrieves the environment variables from the current runtime environment.
 *
 * This function is designed to operate in a variety of JS environments,
 * including Node.js, Deno, browsers, etc.
 *
 * @returns {Record<string, string> | undefined}
 *  - A record of environment variables if available.
 *  - `undefined` if the environment does not support or allows access to environment variables.
 */
function getEnvironmentVariables() {
    try {
        // Check for Node.js environment
        // eslint-disable-next-line no-process-env
        if (typeof process !== "undefined" && process.env) {
            // eslint-disable-next-line no-process-env
            return Object.entries(process.env).reduce((acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            }, {});
        }
        // For browsers and other environments, we may not have direct access to env variables
        // Return undefined or any other fallback as required.
        return undefined;
    }
    catch (e) {
        // Catch any errors that might occur while trying to access environment variables
        return undefined;
    }
}
function env_getEnvironmentVariable(name) {
    // Certain Deno setups will throw an error if you try to access environment variables
    // https://github.com/hwchase17/langchainjs/issues/1412
    try {
        return typeof process !== "undefined"
            ? // eslint-disable-next-line no-process-env
                process.env?.[name]
            : undefined;
    }
    catch (e) {
        return undefined;
    }
}
function setEnvironmentVariable(name, value) {
    if (typeof process !== "undefined") {
        // eslint-disable-next-line no-process-env
        process.env[name] = value;
    }
}
let cachedCommitSHAs;
/**
 * Get the Git commit SHA from common environment variables
 * used by different CI/CD platforms.
 * @returns {string | undefined} The Git commit SHA or undefined if not found.
 */
function getShas() {
    if (cachedCommitSHAs !== undefined) {
        return cachedCommitSHAs;
    }
    const common_release_envs = [
        "VERCEL_GIT_COMMIT_SHA",
        "NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA",
        "COMMIT_REF",
        "RENDER_GIT_COMMIT",
        "CI_COMMIT_SHA",
        "CIRCLE_SHA1",
        "CF_PAGES_COMMIT_SHA",
        "REACT_APP_GIT_SHA",
        "SOURCE_VERSION",
        "GITHUB_SHA",
        "TRAVIS_COMMIT",
        "GIT_COMMIT",
        "BUILD_VCS_NUMBER",
        "bamboo_planRepository_revision",
        "Build.SourceVersion",
        "BITBUCKET_COMMIT",
        "DRONE_COMMIT_SHA",
        "SEMAPHORE_GIT_SHA",
        "BUILDKITE_COMMIT",
    ];
    const shas = {};
    for (const env of common_release_envs) {
        const envVar = env_getEnvironmentVariable(env);
        if (envVar !== undefined) {
            shas[env] = envVar;
        }
    }
    cachedCommitSHAs = shas;
    return shas;
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/node_modules/langsmith/dist/client.js





async function mergeRuntimeEnvIntoRunCreates(runs) {
    const runtimeEnv = await env_getRuntimeEnvironment();
    const envVars = getLangChainEnvVarsMetadata();
    return runs.map((run) => {
        const extra = run.extra ?? {};
        const metadata = extra.metadata;
        run.extra = {
            ...extra,
            runtime: {
                ...runtimeEnv,
                ...extra?.runtime,
            },
            metadata: {
                ...envVars,
                ...(envVars.revision_id || run.revision_id
                    ? { revision_id: run.revision_id ?? envVars.revision_id }
                    : {}),
                ...metadata,
            },
        };
        return run;
    });
}
const getTracingSamplingRate = () => {
    const samplingRateStr = env_getEnvironmentVariable("LANGCHAIN_TRACING_SAMPLING_RATE");
    if (samplingRateStr === undefined) {
        return undefined;
    }
    const samplingRate = parseFloat(samplingRateStr);
    if (samplingRate < 0 || samplingRate > 1) {
        throw new Error(`LANGCHAIN_TRACING_SAMPLING_RATE must be between 0 and 1 if set. Got: ${samplingRate}`);
    }
    return samplingRate;
};
// utility functions
const isLocalhost = (url) => {
    const strippedUrl = url.replace("http://", "").replace("https://", "");
    const hostname = strippedUrl.split("/")[0].split(":")[0];
    return (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1");
};
const raiseForStatus = async (response, operation) => {
    // consume the response body to release the connection
    // https://undici.nodejs.org/#/?id=garbage-collection
    const body = await response.text();
    if (!response.ok) {
        throw new Error(`Failed to ${operation}: ${response.status} ${response.statusText} ${body}`);
    }
};
async function toArray(iterable) {
    const result = [];
    for await (const item of iterable) {
        result.push(item);
    }
    return result;
}
function trimQuotes(str) {
    if (str === undefined) {
        return undefined;
    }
    return str
        .trim()
        .replace(/^"(.*)"$/, "$1")
        .replace(/^'(.*)'$/, "$1");
}
function assertUuid(str) {
    if (!wrapper/* validate */.Gu(str)) {
        throw new Error(`Invalid UUID: ${str}`);
    }
}
const handle429 = async (response) => {
    if (response?.status === 429) {
        const retryAfter = parseInt(response.headers.get("retry-after") ?? "30", 10) * 1000;
        if (retryAfter > 0) {
            await new Promise((resolve) => setTimeout(resolve, retryAfter));
            // Return directly after calling this check
            return true;
        }
    }
    // Fall back to existing status checks
    return false;
};
class Queue {
    constructor() {
        Object.defineProperty(this, "items", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    get size() {
        return this.items.length;
    }
    push(item) {
        // this.items.push is synchronous with promise creation:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise
        return new Promise((resolve) => {
            this.items.push([item, resolve]);
        });
    }
    pop(upToN) {
        if (upToN < 1) {
            throw new Error("Number of items to pop off may not be less than 1.");
        }
        const popped = [];
        while (popped.length < upToN && this.items.length) {
            const item = this.items.shift();
            if (item) {
                popped.push(item);
            }
            else {
                break;
            }
        }
        return [popped.map((it) => it[0]), () => popped.forEach((it) => it[1]())];
    }
}
// 20 MB
const DEFAULT_BATCH_SIZE_LIMIT_BYTES = 20971520;
class client_Client {
    constructor(config = {}) {
        Object.defineProperty(this, "apiKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "apiUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "webUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "caller", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "batchIngestCaller", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timeout_ms", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_tenantId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "hideInputs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hideOutputs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tracingSampleRate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sampledPostUuids", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set()
        });
        Object.defineProperty(this, "autoBatchTracing", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "batchEndpointSupported", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "autoBatchQueue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Queue()
        });
        Object.defineProperty(this, "pendingAutoBatchedRunLimit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 100
        });
        Object.defineProperty(this, "autoBatchTimeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "autoBatchInitialDelayMs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 250
        });
        Object.defineProperty(this, "autoBatchAggregationDelayMs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 50
        });
        Object.defineProperty(this, "serverInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const defaultConfig = client_Client.getDefaultClientConfig();
        this.tracingSampleRate = getTracingSamplingRate();
        this.apiUrl = trimQuotes(config.apiUrl ?? defaultConfig.apiUrl) ?? "";
        this.apiKey = trimQuotes(config.apiKey ?? defaultConfig.apiKey);
        this.webUrl = trimQuotes(config.webUrl ?? defaultConfig.webUrl);
        this.timeout_ms = config.timeout_ms ?? 12000;
        this.caller = new AsyncCaller(config.callerOptions ?? {});
        this.batchIngestCaller = new AsyncCaller({
            ...(config.callerOptions ?? {}),
            onFailedResponseHook: handle429,
        });
        this.hideInputs = config.hideInputs ?? defaultConfig.hideInputs;
        this.hideOutputs = config.hideOutputs ?? defaultConfig.hideOutputs;
        this.autoBatchTracing = config.autoBatchTracing ?? this.autoBatchTracing;
        this.pendingAutoBatchedRunLimit =
            config.pendingAutoBatchedRunLimit ?? this.pendingAutoBatchedRunLimit;
    }
    static getDefaultClientConfig() {
        const apiKey = env_getEnvironmentVariable("LANGCHAIN_API_KEY");
        const apiUrl = env_getEnvironmentVariable("LANGCHAIN_ENDPOINT") ??
            "https://api.smith.langchain.com";
        const hideInputs = env_getEnvironmentVariable("LANGCHAIN_HIDE_INPUTS") === "true";
        const hideOutputs = env_getEnvironmentVariable("LANGCHAIN_HIDE_OUTPUTS") === "true";
        return {
            apiUrl: apiUrl,
            apiKey: apiKey,
            webUrl: undefined,
            hideInputs: hideInputs,
            hideOutputs: hideOutputs,
        };
    }
    getHostUrl() {
        if (this.webUrl) {
            return this.webUrl;
        }
        else if (isLocalhost(this.apiUrl)) {
            this.webUrl = "http://localhost";
            return "http://localhost";
        }
        else if (this.apiUrl.includes("/api") &&
            !this.apiUrl.split(".", 1)[0].endsWith("api")) {
            this.webUrl = this.apiUrl.replace("/api", "");
            return this.webUrl;
        }
        else if (this.apiUrl.split(".", 1)[0].includes("dev")) {
            this.webUrl = "https://dev.smith.langchain.com";
            return "https://dev.smith.langchain.com";
        }
        else {
            this.webUrl = "https://smith.langchain.com";
            return "https://smith.langchain.com";
        }
    }
    get headers() {
        const headers = {
            "User-Agent": `langsmith-js/${__version__}`,
        };
        if (this.apiKey) {
            headers["x-api-key"] = `${this.apiKey}`;
        }
        return headers;
    }
    processInputs(inputs) {
        if (this.hideInputs) {
            return {};
        }
        return inputs;
    }
    processOutputs(outputs) {
        if (this.hideOutputs) {
            return {};
        }
        return outputs;
    }
    prepareRunCreateOrUpdateInputs(run) {
        const runParams = { ...run };
        if (runParams.inputs !== undefined) {
            runParams.inputs = this.processInputs(runParams.inputs);
        }
        if (runParams.outputs !== undefined) {
            runParams.outputs = this.processOutputs(runParams.outputs);
        }
        return runParams;
    }
    async _getResponse(path, queryParams) {
        const paramsString = queryParams?.toString() ?? "";
        const url = `${this.apiUrl}${path}?${paramsString}`;
        const response = await this.caller.call(fetch, url, {
            method: "GET",
            headers: this.headers,
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch ${path}: ${response.status} ${response.statusText}`);
        }
        return response;
    }
    async _get(path, queryParams) {
        const response = await this._getResponse(path, queryParams);
        return response.json();
    }
    async *_getPaginated(path, queryParams = new URLSearchParams()) {
        let offset = Number(queryParams.get("offset")) || 0;
        const limit = Number(queryParams.get("limit")) || 100;
        while (true) {
            queryParams.set("offset", String(offset));
            queryParams.set("limit", String(limit));
            const url = `${this.apiUrl}${path}?${queryParams}`;
            const response = await this.caller.call(fetch, url, {
                method: "GET",
                headers: this.headers,
                signal: AbortSignal.timeout(this.timeout_ms),
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch ${path}: ${response.status} ${response.statusText}`);
            }
            const items = await response.json();
            if (items.length === 0) {
                break;
            }
            yield items;
            if (items.length < limit) {
                break;
            }
            offset += items.length;
        }
    }
    async *_getCursorPaginatedList(path, body = null, requestMethod = "POST", dataKey = "runs") {
        const bodyParams = body ? { ...body } : {};
        while (true) {
            const response = await this.caller.call(fetch, `${this.apiUrl}${path}`, {
                method: requestMethod,
                headers: { ...this.headers, "Content-Type": "application/json" },
                signal: AbortSignal.timeout(this.timeout_ms),
                body: JSON.stringify(bodyParams),
            });
            const responseBody = await response.json();
            if (!responseBody) {
                break;
            }
            if (!responseBody[dataKey]) {
                break;
            }
            yield responseBody[dataKey];
            const cursors = responseBody.cursors;
            if (!cursors) {
                break;
            }
            if (!cursors.next) {
                break;
            }
            bodyParams.cursor = cursors.next;
        }
    }
    _filterForSampling(runs, patch = false) {
        if (this.tracingSampleRate === undefined) {
            return runs;
        }
        if (patch) {
            const sampled = [];
            for (const run of runs) {
                if (this.sampledPostUuids.has(run.id)) {
                    sampled.push(run);
                    this.sampledPostUuids.delete(run.id);
                }
            }
            return sampled;
        }
        else {
            const sampled = [];
            for (const run of runs) {
                if (Math.random() < this.tracingSampleRate) {
                    sampled.push(run);
                    this.sampledPostUuids.add(run.id);
                }
            }
            return sampled;
        }
    }
    async drainAutoBatchQueue() {
        while (this.autoBatchQueue.size >= 0) {
            const [batch, done] = this.autoBatchQueue.pop(this.pendingAutoBatchedRunLimit);
            if (!batch.length) {
                done();
                return;
            }
            try {
                await this.batchIngestRuns({
                    runCreates: batch
                        .filter((item) => item.action === "create")
                        .map((item) => item.item),
                    runUpdates: batch
                        .filter((item) => item.action === "update")
                        .map((item) => item.item),
                });
            }
            finally {
                done();
            }
        }
    }
    async processRunOperation(item, immediatelyTriggerBatch) {
        const oldTimeout = this.autoBatchTimeout;
        clearTimeout(this.autoBatchTimeout);
        this.autoBatchTimeout = undefined;
        const itemPromise = this.autoBatchQueue.push(item);
        if (immediatelyTriggerBatch ||
            this.autoBatchQueue.size > this.pendingAutoBatchedRunLimit) {
            await this.drainAutoBatchQueue();
        }
        if (this.autoBatchQueue.size > 0) {
            this.autoBatchTimeout = setTimeout(() => {
                this.autoBatchTimeout = undefined;
                // This error would happen in the background and is uncatchable
                // from the outside. So just log instead.
                void this.drainAutoBatchQueue().catch(console.error);
            }, oldTimeout
                ? this.autoBatchAggregationDelayMs
                : this.autoBatchInitialDelayMs);
        }
        return itemPromise;
    }
    async _getServerInfo() {
        const response = await fetch(`${this.apiUrl}/info`, {
            method: "GET",
            headers: { Accept: "application/json" },
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        if (!response.ok) {
            // consume the response body to release the connection
            // https://undici.nodejs.org/#/?id=garbage-collection
            await response.text();
            throw new Error("Failed to retrieve server info.");
        }
        return response.json();
    }
    async batchEndpointIsSupported() {
        try {
            this.serverInfo = await this._getServerInfo();
        }
        catch (e) {
            return false;
        }
        return true;
    }
    async createRun(run) {
        if (!this._filterForSampling([run]).length) {
            return;
        }
        const headers = { ...this.headers, "Content-Type": "application/json" };
        const session_name = run.project_name;
        delete run.project_name;
        const runCreate = this.prepareRunCreateOrUpdateInputs({
            session_name,
            ...run,
            start_time: run.start_time ?? Date.now(),
        });
        if (this.autoBatchTracing &&
            runCreate.trace_id !== undefined &&
            runCreate.dotted_order !== undefined) {
            void this.processRunOperation({
                action: "create",
                item: runCreate,
            }).catch(console.error);
            return;
        }
        const mergedRunCreateParams = await mergeRuntimeEnvIntoRunCreates([
            runCreate,
        ]);
        const response = await this.caller.call(fetch, `${this.apiUrl}/runs`, {
            method: "POST",
            headers,
            body: JSON.stringify(mergedRunCreateParams[0]),
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        await raiseForStatus(response, "create run");
    }
    /**
     * Batch ingest/upsert multiple runs in the Langsmith system.
     * @param runs
     */
    async batchIngestRuns({ runCreates, runUpdates, }) {
        if (runCreates === undefined && runUpdates === undefined) {
            return;
        }
        let preparedCreateParams = runCreates?.map((create) => this.prepareRunCreateOrUpdateInputs(create)) ?? [];
        let preparedUpdateParams = runUpdates?.map((update) => this.prepareRunCreateOrUpdateInputs(update)) ?? [];
        if (preparedCreateParams.length > 0 && preparedUpdateParams.length > 0) {
            const createById = preparedCreateParams.reduce((params, run) => {
                if (!run.id) {
                    return params;
                }
                params[run.id] = run;
                return params;
            }, {});
            const standaloneUpdates = [];
            for (const updateParam of preparedUpdateParams) {
                if (updateParam.id !== undefined && createById[updateParam.id]) {
                    createById[updateParam.id] = {
                        ...createById[updateParam.id],
                        ...updateParam,
                    };
                }
                else {
                    standaloneUpdates.push(updateParam);
                }
            }
            preparedCreateParams = Object.values(createById);
            preparedUpdateParams = standaloneUpdates;
        }
        const rawBatch = {
            post: this._filterForSampling(preparedCreateParams),
            patch: this._filterForSampling(preparedUpdateParams, true),
        };
        if (!rawBatch.post.length && !rawBatch.patch.length) {
            return;
        }
        preparedCreateParams = await mergeRuntimeEnvIntoRunCreates(preparedCreateParams);
        if (this.batchEndpointSupported === undefined) {
            this.batchEndpointSupported = await this.batchEndpointIsSupported();
        }
        if (!this.batchEndpointSupported) {
            this.autoBatchTracing = false;
            for (const preparedCreateParam of rawBatch.post) {
                await this.createRun(preparedCreateParam);
            }
            for (const preparedUpdateParam of rawBatch.patch) {
                if (preparedUpdateParam.id !== undefined) {
                    await this.updateRun(preparedUpdateParam.id, preparedUpdateParam);
                }
            }
            return;
        }
        const sizeLimitBytes = this.serverInfo?.batch_ingest_config?.size_limit_bytes ??
            DEFAULT_BATCH_SIZE_LIMIT_BYTES;
        const batchChunks = {
            post: [],
            patch: [],
        };
        let currentBatchSizeBytes = 0;
        for (const k of ["post", "patch"]) {
            const key = k;
            const batchItems = rawBatch[key].reverse();
            let batchItem = batchItems.pop();
            while (batchItem !== undefined) {
                const stringifiedBatchItem = JSON.stringify(batchItem);
                if (currentBatchSizeBytes > 0 &&
                    currentBatchSizeBytes + stringifiedBatchItem.length > sizeLimitBytes) {
                    await this._postBatchIngestRuns(JSON.stringify(batchChunks));
                    currentBatchSizeBytes = 0;
                    batchChunks.post = [];
                    batchChunks.patch = [];
                }
                currentBatchSizeBytes += stringifiedBatchItem.length;
                batchChunks[key].push(batchItem);
                batchItem = batchItems.pop();
            }
        }
        if (batchChunks.post.length > 0 || batchChunks.patch.length > 0) {
            await this._postBatchIngestRuns(JSON.stringify(batchChunks));
        }
    }
    async _postBatchIngestRuns(body) {
        const headers = {
            ...this.headers,
            "Content-Type": "application/json",
            Accept: "application/json",
        };
        const response = await this.batchIngestCaller.call(fetch, `${this.apiUrl}/runs/batch`, {
            method: "POST",
            headers,
            body: body,
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        await raiseForStatus(response, "batch create run");
    }
    async updateRun(runId, run) {
        assertUuid(runId);
        if (run.inputs) {
            run.inputs = this.processInputs(run.inputs);
        }
        if (run.outputs) {
            run.outputs = this.processOutputs(run.outputs);
        }
        // TODO: Untangle types
        const data = { ...run, id: runId };
        if (!this._filterForSampling([data], true).length) {
            return;
        }
        if (this.autoBatchTracing &&
            data.trace_id !== undefined &&
            data.dotted_order !== undefined) {
            if (run.end_time !== undefined && data.parent_run_id === undefined) {
                // Trigger a batch as soon as a root trace ends and block to ensure trace finishes
                // in serverless environments.
                await this.processRunOperation({ action: "update", item: data }, true);
                return;
            }
            else {
                void this.processRunOperation({ action: "update", item: data }).catch(console.error);
            }
            return;
        }
        const headers = { ...this.headers, "Content-Type": "application/json" };
        const response = await this.caller.call(fetch, `${this.apiUrl}/runs/${runId}`, {
            method: "PATCH",
            headers,
            body: JSON.stringify(run),
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        await raiseForStatus(response, "update run");
    }
    async readRun(runId, { loadChildRuns } = { loadChildRuns: false }) {
        assertUuid(runId);
        let run = await this._get(`/runs/${runId}`);
        if (loadChildRuns && run.child_run_ids) {
            run = await this._loadChildRuns(run);
        }
        return run;
    }
    async getRunUrl({ runId, run, projectOpts, }) {
        if (run !== undefined) {
            let sessionId;
            if (run.session_id) {
                sessionId = run.session_id;
            }
            else if (projectOpts?.projectName) {
                sessionId = (await this.readProject({ projectName: projectOpts?.projectName })).id;
            }
            else if (projectOpts?.projectId) {
                sessionId = projectOpts?.projectId;
            }
            else {
                const project = await this.readProject({
                    projectName: env_getEnvironmentVariable("LANGCHAIN_PROJECT") || "default",
                });
                sessionId = project.id;
            }
            const tenantId = await this._getTenantId();
            return `${this.getHostUrl()}/o/${tenantId}/projects/p/${sessionId}/r/${run.id}?poll=true`;
        }
        else if (runId !== undefined) {
            const run_ = await this.readRun(runId);
            if (!run_.app_path) {
                throw new Error(`Run ${runId} has no app_path`);
            }
            const baseUrl = this.getHostUrl();
            return `${baseUrl}${run_.app_path}`;
        }
        else {
            throw new Error("Must provide either runId or run");
        }
    }
    async _loadChildRuns(run) {
        const childRuns = await toArray(this.listRuns({ id: run.child_run_ids }));
        const treemap = {};
        const runs = {};
        // TODO: make dotted order required when the migration finishes
        childRuns.sort((a, b) => (a?.dotted_order ?? "").localeCompare(b?.dotted_order ?? ""));
        for (const childRun of childRuns) {
            if (childRun.parent_run_id === null ||
                childRun.parent_run_id === undefined) {
                throw new Error(`Child run ${childRun.id} has no parent`);
            }
            if (!(childRun.parent_run_id in treemap)) {
                treemap[childRun.parent_run_id] = [];
            }
            treemap[childRun.parent_run_id].push(childRun);
            runs[childRun.id] = childRun;
        }
        run.child_runs = treemap[run.id] || [];
        for (const runId in treemap) {
            if (runId !== run.id) {
                runs[runId].child_runs = treemap[runId];
            }
        }
        return run;
    }
    /**
     * List runs from the LangSmith server.
     * @param projectId - The ID of the project to filter by.
     * @param projectName - The name of the project to filter by.
     * @param parentRunId - The ID of the parent run to filter by.
     * @param traceId - The ID of the trace to filter by.
     * @param referenceExampleId - The ID of the reference example to filter by.
     * @param startTime - The start time to filter by.
     * @param executionOrder - The execution order to filter by.
     * @param runType - The run type to filter by.
     * @param error - Indicates whether to filter by error runs.
     * @param id - The ID of the run to filter by.
     * @param query - The query string to filter by.
     * @param filter - The filter string to apply to the run spans.
     * @param traceFilter - The filter string to apply on the root run of the trace.
     * @param limit - The maximum number of runs to retrieve.
     * @returns {AsyncIterable<Run>} - The runs.
     *
     * @example
     * // List all runs in a project
     * const projectRuns = client.listRuns({ projectName: "<your_project>" });
     *
     * @example
     * // List LLM and Chat runs in the last 24 hours
     * const todaysLLMRuns = client.listRuns({
     *   projectName: "<your_project>",
     *   start_time: new Date(Date.now() - 24 * 60 * 60 * 1000),
     *   run_type: "llm",
     * });
     *
     * @example
     * // List traces in a project
     * const rootRuns = client.listRuns({
     *   projectName: "<your_project>",
     *   execution_order: 1,
     * });
     *
     * @example
     * // List runs without errors
     * const correctRuns = client.listRuns({
     *   projectName: "<your_project>",
     *   error: false,
     * });
     *
     * @example
     * // List runs by run ID
     * const runIds = [
     *   "a36092d2-4ad5-4fb4-9c0d-0dba9a2ed836",
     *   "9398e6be-964f-4aa4-8ae9-ad78cd4b7074",
     * ];
     * const selectedRuns = client.listRuns({ run_ids: runIds });
     *
     * @example
     * // List all "chain" type runs that took more than 10 seconds and had `total_tokens` greater than 5000
     * const chainRuns = client.listRuns({
     *   projectName: "<your_project>",
     *   filter: 'and(eq(run_type, "chain"), gt(latency, 10), gt(total_tokens, 5000))',
     * });
     *
     * @example
     * // List all runs called "extractor" whose root of the trace was assigned feedback "user_score" score of 1
     * const goodExtractorRuns = client.listRuns({
     *   projectName: "<your_project>",
     *   filter: 'eq(name, "extractor")',
     *   traceFilter: 'and(eq(feedback_key, "user_score"), eq(feedback_score, 1))',
     * });
     *
     * @example
     * // List all runs that started after a specific timestamp and either have "error" not equal to null or a "Correctness" feedback score equal to 0
     * const complexRuns = client.listRuns({
     *   projectName: "<your_project>",
     *   filter: 'and(gt(start_time, "2023-07-15T12:34:56Z"), or(neq(error, null), and(eq(feedback_key, "Correctness"), eq(feedback_score, 0.0))))',
     * });
     *
     * @example
     * // List all runs where `tags` include "experimental" or "beta" and `latency` is greater than 2 seconds
     * const taggedRuns = client.listRuns({
     *   projectName: "<your_project>",
     *   filter: 'and(or(has(tags, "experimental"), has(tags, "beta")), gt(latency, 2))',
     * });
     */
    async *listRuns(props) {
        const { projectId, projectName, parentRunId, traceId, referenceExampleId, startTime, executionOrder, runType, error, id, query, filter, traceFilter, limit, } = props;
        let projectIds = [];
        if (projectId) {
            projectIds = Array.isArray(projectId) ? projectId : [projectId];
        }
        if (projectName) {
            const projectNames = Array.isArray(projectName)
                ? projectName
                : [projectName];
            const projectIds_ = await Promise.all(projectNames.map((name) => this.readProject({ projectName: name }).then((project) => project.id)));
            projectIds.push(...projectIds_);
        }
        const body = {
            session: projectIds.length ? projectIds : null,
            run_type: runType,
            reference_example: referenceExampleId,
            query,
            filter,
            trace_filter: traceFilter,
            execution_order: executionOrder,
            parent_run: parentRunId ? [parentRunId] : null,
            start_time: startTime ? startTime.toISOString() : null,
            error,
            id,
            limit,
            trace: traceId,
        };
        for await (const runs of this._getCursorPaginatedList("/runs/query", body)) {
            yield* runs;
        }
    }
    async shareRun(runId, { shareId } = {}) {
        const data = {
            run_id: runId,
            share_token: shareId || wrapper.v4(),
        };
        assertUuid(runId);
        const response = await this.caller.call(fetch, `${this.apiUrl}/runs/${runId}/share`, {
            method: "PUT",
            headers: this.headers,
            body: JSON.stringify(data),
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        const result = await response.json();
        if (result === null || !("share_token" in result)) {
            throw new Error("Invalid response from server");
        }
        return `${this.getHostUrl()}/public/${result["share_token"]}/r`;
    }
    async unshareRun(runId) {
        assertUuid(runId);
        const response = await this.caller.call(fetch, `${this.apiUrl}/runs/${runId}/share`, {
            method: "DELETE",
            headers: this.headers,
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        await raiseForStatus(response, "unshare run");
    }
    async readRunSharedLink(runId) {
        assertUuid(runId);
        const response = await this.caller.call(fetch, `${this.apiUrl}/runs/${runId}/share`, {
            method: "GET",
            headers: this.headers,
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        const result = await response.json();
        if (result === null || !("share_token" in result)) {
            return undefined;
        }
        return `${this.getHostUrl()}/public/${result["share_token"]}/r`;
    }
    async listSharedRuns(shareToken, { runIds, } = {}) {
        const queryParams = new URLSearchParams({
            share_token: shareToken,
        });
        if (runIds !== undefined) {
            for (const runId of runIds) {
                queryParams.append("id", runId);
            }
        }
        assertUuid(shareToken);
        const response = await this.caller.call(fetch, `${this.apiUrl}/public/${shareToken}/runs${queryParams}`, {
            method: "GET",
            headers: this.headers,
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        const runs = await response.json();
        return runs;
    }
    async readDatasetSharedSchema(datasetId, datasetName) {
        if (!datasetId && !datasetName) {
            throw new Error("Either datasetId or datasetName must be given");
        }
        if (!datasetId) {
            const dataset = await this.readDataset({ datasetName });
            datasetId = dataset.id;
        }
        assertUuid(datasetId);
        const response = await this.caller.call(fetch, `${this.apiUrl}/datasets/${datasetId}/share`, {
            method: "GET",
            headers: this.headers,
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        const shareSchema = await response.json();
        shareSchema.url = `${this.getHostUrl()}/public/${shareSchema.share_token}/d`;
        return shareSchema;
    }
    async shareDataset(datasetId, datasetName) {
        if (!datasetId && !datasetName) {
            throw new Error("Either datasetId or datasetName must be given");
        }
        if (!datasetId) {
            const dataset = await this.readDataset({ datasetName });
            datasetId = dataset.id;
        }
        const data = {
            dataset_id: datasetId,
        };
        assertUuid(datasetId);
        const response = await this.caller.call(fetch, `${this.apiUrl}/datasets/${datasetId}/share`, {
            method: "PUT",
            headers: this.headers,
            body: JSON.stringify(data),
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        const shareSchema = await response.json();
        shareSchema.url = `${this.getHostUrl()}/public/${shareSchema.share_token}/d`;
        return shareSchema;
    }
    async unshareDataset(datasetId) {
        assertUuid(datasetId);
        const response = await this.caller.call(fetch, `${this.apiUrl}/datasets/${datasetId}/share`, {
            method: "DELETE",
            headers: this.headers,
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        await raiseForStatus(response, "unshare dataset");
    }
    async readSharedDataset(shareToken) {
        assertUuid(shareToken);
        const response = await this.caller.call(fetch, `${this.apiUrl}/public/${shareToken}/datasets`, {
            method: "GET",
            headers: this.headers,
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        const dataset = await response.json();
        return dataset;
    }
    async createProject({ projectName, description = null, metadata = null, upsert = false, projectExtra = null, referenceDatasetId = null, }) {
        const upsert_ = upsert ? `?upsert=true` : "";
        const endpoint = `${this.apiUrl}/sessions${upsert_}`;
        const extra = projectExtra || {};
        if (metadata) {
            extra["metadata"] = metadata;
        }
        const body = {
            name: projectName,
            extra,
            description,
        };
        if (referenceDatasetId !== null) {
            body["reference_dataset_id"] = referenceDatasetId;
        }
        const response = await this.caller.call(fetch, endpoint, {
            method: "POST",
            headers: { ...this.headers, "Content-Type": "application/json" },
            body: JSON.stringify(body),
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error(`Failed to create session ${projectName}: ${response.status} ${response.statusText}`);
        }
        return result;
    }
    async updateProject(projectId, { name = null, description = null, metadata = null, projectExtra = null, endTime = null, }) {
        const endpoint = `${this.apiUrl}/sessions/${projectId}`;
        let extra = projectExtra;
        if (metadata) {
            extra = { ...(extra || {}), metadata };
        }
        const body = {
            name,
            extra,
            description,
            end_time: endTime ? new Date(endTime).toISOString() : null,
        };
        const response = await this.caller.call(fetch, endpoint, {
            method: "PATCH",
            headers: { ...this.headers, "Content-Type": "application/json" },
            body: JSON.stringify(body),
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error(`Failed to update project ${projectId}: ${response.status} ${response.statusText}`);
        }
        return result;
    }
    async hasProject({ projectId, projectName, }) {
        // TODO: Add a head request
        let path = "/sessions";
        const params = new URLSearchParams();
        if (projectId !== undefined && projectName !== undefined) {
            throw new Error("Must provide either projectName or projectId, not both");
        }
        else if (projectId !== undefined) {
            assertUuid(projectId);
            path += `/${projectId}`;
        }
        else if (projectName !== undefined) {
            params.append("name", projectName);
        }
        else {
            throw new Error("Must provide projectName or projectId");
        }
        const response = await this.caller.call(fetch, `${this.apiUrl}${path}?${params}`, {
            method: "GET",
            headers: this.headers,
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        // consume the response body to release the connection
        // https://undici.nodejs.org/#/?id=garbage-collection
        try {
            const result = await response.json();
            if (!response.ok) {
                return false;
            }
            // If it's OK and we're querying by name, need to check the list is not empty
            if (Array.isArray(result)) {
                return result.length > 0;
            }
            // projectId querying
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async readProject({ projectId, projectName, includeStats, }) {
        let path = "/sessions";
        const params = new URLSearchParams();
        if (projectId !== undefined && projectName !== undefined) {
            throw new Error("Must provide either projectName or projectId, not both");
        }
        else if (projectId !== undefined) {
            assertUuid(projectId);
            path += `/${projectId}`;
        }
        else if (projectName !== undefined) {
            params.append("name", projectName);
        }
        else {
            throw new Error("Must provide projectName or projectId");
        }
        if (includeStats !== undefined) {
            params.append("include_stats", includeStats.toString());
        }
        const response = await this._get(path, params);
        let result;
        if (Array.isArray(response)) {
            if (response.length === 0) {
                throw new Error(`Project[id=${projectId}, name=${projectName}] not found`);
            }
            result = response[0];
        }
        else {
            result = response;
        }
        return result;
    }
    async _getTenantId() {
        if (this._tenantId !== null) {
            return this._tenantId;
        }
        const queryParams = new URLSearchParams({ limit: "1" });
        for await (const projects of this._getPaginated("/sessions", queryParams)) {
            this._tenantId = projects[0].tenant_id;
            return projects[0].tenant_id;
        }
        throw new Error("No projects found to resolve tenant.");
    }
    async *listProjects({ projectIds, name, nameContains, referenceDatasetId, referenceDatasetName, referenceFree, } = {}) {
        const params = new URLSearchParams();
        if (projectIds !== undefined) {
            for (const projectId of projectIds) {
                params.append("id", projectId);
            }
        }
        if (name !== undefined) {
            params.append("name", name);
        }
        if (nameContains !== undefined) {
            params.append("name_contains", nameContains);
        }
        if (referenceDatasetId !== undefined) {
            params.append("reference_dataset", referenceDatasetId);
        }
        else if (referenceDatasetName !== undefined) {
            const dataset = await this.readDataset({
                datasetName: referenceDatasetName,
            });
            params.append("reference_dataset", dataset.id);
        }
        if (referenceFree !== undefined) {
            params.append("reference_free", referenceFree.toString());
        }
        for await (const projects of this._getPaginated("/sessions", params)) {
            yield* projects;
        }
    }
    async deleteProject({ projectId, projectName, }) {
        let projectId_;
        if (projectId === undefined && projectName === undefined) {
            throw new Error("Must provide projectName or projectId");
        }
        else if (projectId !== undefined && projectName !== undefined) {
            throw new Error("Must provide either projectName or projectId, not both");
        }
        else if (projectId === undefined) {
            projectId_ = (await this.readProject({ projectName })).id;
        }
        else {
            projectId_ = projectId;
        }
        assertUuid(projectId_);
        const response = await this.caller.call(fetch, `${this.apiUrl}/sessions/${projectId_}`, {
            method: "DELETE",
            headers: this.headers,
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        await raiseForStatus(response, `delete session ${projectId_} (${projectName})`);
    }
    async uploadCsv({ csvFile, fileName, inputKeys, outputKeys, description, dataType, name, }) {
        const url = `${this.apiUrl}/datasets/upload`;
        const formData = new FormData();
        formData.append("file", csvFile, fileName);
        inputKeys.forEach((key) => {
            formData.append("input_keys", key);
        });
        outputKeys.forEach((key) => {
            formData.append("output_keys", key);
        });
        if (description) {
            formData.append("description", description);
        }
        if (dataType) {
            formData.append("data_type", dataType);
        }
        if (name) {
            formData.append("name", name);
        }
        const response = await this.caller.call(fetch, url, {
            method: "POST",
            headers: this.headers,
            body: formData,
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        if (!response.ok) {
            const result = await response.json();
            if (result.detail && result.detail.includes("already exists")) {
                throw new Error(`Dataset ${fileName} already exists`);
            }
            throw new Error(`Failed to upload CSV: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        return result;
    }
    async createDataset(name, { description, dataType, } = {}) {
        const body = {
            name,
            description,
        };
        if (dataType) {
            body.data_type = dataType;
        }
        const response = await this.caller.call(fetch, `${this.apiUrl}/datasets`, {
            method: "POST",
            headers: { ...this.headers, "Content-Type": "application/json" },
            body: JSON.stringify(body),
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        if (!response.ok) {
            const result = await response.json();
            if (result.detail && result.detail.includes("already exists")) {
                throw new Error(`Dataset ${name} already exists`);
            }
            throw new Error(`Failed to create dataset ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        return result;
    }
    async readDataset({ datasetId, datasetName, }) {
        let path = "/datasets";
        // limit to 1 result
        const params = new URLSearchParams({ limit: "1" });
        if (datasetId !== undefined && datasetName !== undefined) {
            throw new Error("Must provide either datasetName or datasetId, not both");
        }
        else if (datasetId !== undefined) {
            assertUuid(datasetId);
            path += `/${datasetId}`;
        }
        else if (datasetName !== undefined) {
            params.append("name", datasetName);
        }
        else {
            throw new Error("Must provide datasetName or datasetId");
        }
        const response = await this._get(path, params);
        let result;
        if (Array.isArray(response)) {
            if (response.length === 0) {
                throw new Error(`Dataset[id=${datasetId}, name=${datasetName}] not found`);
            }
            result = response[0];
        }
        else {
            result = response;
        }
        return result;
    }
    async readDatasetOpenaiFinetuning({ datasetId, datasetName, }) {
        const path = "/datasets";
        if (datasetId !== undefined) {
            // do nothing
        }
        else if (datasetName !== undefined) {
            datasetId = (await this.readDataset({ datasetName })).id;
        }
        else {
            throw new Error("Must provide datasetName or datasetId");
        }
        const response = await this._getResponse(`${path}/${datasetId}/openai_ft`);
        const datasetText = await response.text();
        const dataset = datasetText
            .trim()
            .split("\n")
            .map((line) => JSON.parse(line));
        return dataset;
    }
    async *listDatasets({ limit = 100, offset = 0, datasetIds, datasetName, datasetNameContains, } = {}) {
        const path = "/datasets";
        const params = new URLSearchParams({
            limit: limit.toString(),
            offset: offset.toString(),
        });
        if (datasetIds !== undefined) {
            for (const id_ of datasetIds) {
                params.append("id", id_);
            }
        }
        if (datasetName !== undefined) {
            params.append("name", datasetName);
        }
        if (datasetNameContains !== undefined) {
            params.append("name_contains", datasetNameContains);
        }
        for await (const datasets of this._getPaginated(path, params)) {
            yield* datasets;
        }
    }
    async deleteDataset({ datasetId, datasetName, }) {
        let path = "/datasets";
        let datasetId_ = datasetId;
        if (datasetId !== undefined && datasetName !== undefined) {
            throw new Error("Must provide either datasetName or datasetId, not both");
        }
        else if (datasetName !== undefined) {
            const dataset = await this.readDataset({ datasetName });
            datasetId_ = dataset.id;
        }
        if (datasetId_ !== undefined) {
            assertUuid(datasetId_);
            path += `/${datasetId_}`;
        }
        else {
            throw new Error("Must provide datasetName or datasetId");
        }
        const response = await this.caller.call(fetch, this.apiUrl + path, {
            method: "DELETE",
            headers: this.headers,
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        if (!response.ok) {
            throw new Error(`Failed to delete ${path}: ${response.status} ${response.statusText}`);
        }
        await response.json();
    }
    async createExample(inputs, outputs, { datasetId, datasetName, createdAt, exampleId }) {
        let datasetId_ = datasetId;
        if (datasetId_ === undefined && datasetName === undefined) {
            throw new Error("Must provide either datasetName or datasetId");
        }
        else if (datasetId_ !== undefined && datasetName !== undefined) {
            throw new Error("Must provide either datasetName or datasetId, not both");
        }
        else if (datasetId_ === undefined) {
            const dataset = await this.readDataset({ datasetName });
            datasetId_ = dataset.id;
        }
        const createdAt_ = createdAt || new Date();
        const data = {
            dataset_id: datasetId_,
            inputs,
            outputs,
            created_at: createdAt_?.toISOString(),
            id: exampleId,
        };
        const response = await this.caller.call(fetch, `${this.apiUrl}/examples`, {
            method: "POST",
            headers: { ...this.headers, "Content-Type": "application/json" },
            body: JSON.stringify(data),
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        if (!response.ok) {
            throw new Error(`Failed to create example: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        return result;
    }
    async createExamples(props) {
        const { inputs, outputs, sourceRunIds, exampleIds, datasetId, datasetName, } = props;
        let datasetId_ = datasetId;
        if (datasetId_ === undefined && datasetName === undefined) {
            throw new Error("Must provide either datasetName or datasetId");
        }
        else if (datasetId_ !== undefined && datasetName !== undefined) {
            throw new Error("Must provide either datasetName or datasetId, not both");
        }
        else if (datasetId_ === undefined) {
            const dataset = await this.readDataset({ datasetName });
            datasetId_ = dataset.id;
        }
        const formattedExamples = inputs.map((input, idx) => {
            return {
                dataset_id: datasetId_,
                inputs: input,
                outputs: outputs ? outputs[idx] : undefined,
                id: exampleIds ? exampleIds[idx] : undefined,
                source_run_id: sourceRunIds ? sourceRunIds[idx] : undefined,
            };
        });
        const response = await this.caller.call(fetch, `${this.apiUrl}/examples/bulk`, {
            method: "POST",
            headers: { ...this.headers, "Content-Type": "application/json" },
            body: JSON.stringify(formattedExamples),
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        if (!response.ok) {
            throw new Error(`Failed to create examples: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        return result;
    }
    async createLLMExample(input, generation, options) {
        return this.createExample({ input }, { output: generation }, options);
    }
    async createChatExample(input, generations, options) {
        const finalInput = input.map((message) => {
            if (isLangChainMessage(message)) {
                return convertLangChainMessageToExample(message);
            }
            return message;
        });
        const finalOutput = isLangChainMessage(generations)
            ? convertLangChainMessageToExample(generations)
            : generations;
        return this.createExample({ input: finalInput }, { output: finalOutput }, options);
    }
    async readExample(exampleId) {
        assertUuid(exampleId);
        const path = `/examples/${exampleId}`;
        return await this._get(path);
    }
    async *listExamples({ datasetId, datasetName, exampleIds, } = {}) {
        let datasetId_;
        if (datasetId !== undefined && datasetName !== undefined) {
            throw new Error("Must provide either datasetName or datasetId, not both");
        }
        else if (datasetId !== undefined) {
            datasetId_ = datasetId;
        }
        else if (datasetName !== undefined) {
            const dataset = await this.readDataset({ datasetName });
            datasetId_ = dataset.id;
        }
        else {
            throw new Error("Must provide a datasetName or datasetId");
        }
        const params = new URLSearchParams({ dataset: datasetId_ });
        if (exampleIds !== undefined) {
            for (const id_ of exampleIds) {
                params.append("id", id_);
            }
        }
        for await (const examples of this._getPaginated("/examples", params)) {
            yield* examples;
        }
    }
    async deleteExample(exampleId) {
        assertUuid(exampleId);
        const path = `/examples/${exampleId}`;
        const response = await this.caller.call(fetch, this.apiUrl + path, {
            method: "DELETE",
            headers: this.headers,
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        if (!response.ok) {
            throw new Error(`Failed to delete ${path}: ${response.status} ${response.statusText}`);
        }
        await response.json();
    }
    async updateExample(exampleId, update) {
        assertUuid(exampleId);
        const response = await this.caller.call(fetch, `${this.apiUrl}/examples/${exampleId}`, {
            method: "PATCH",
            headers: { ...this.headers, "Content-Type": "application/json" },
            body: JSON.stringify(update),
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        if (!response.ok) {
            throw new Error(`Failed to update example ${exampleId}: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        return result;
    }
    async evaluateRun(run, evaluator, { sourceInfo, loadChildRuns, referenceExample, } = { loadChildRuns: false }) {
        let run_;
        if (typeof run === "string") {
            run_ = await this.readRun(run, { loadChildRuns });
        }
        else if (typeof run === "object" && "id" in run) {
            run_ = run;
        }
        else {
            throw new Error(`Invalid run type: ${typeof run}`);
        }
        if (run_.reference_example_id !== null &&
            run_.reference_example_id !== undefined) {
            referenceExample = await this.readExample(run_.reference_example_id);
        }
        const feedbackResult = await evaluator.evaluateRun(run_, referenceExample);
        let sourceInfo_ = sourceInfo ?? {};
        if (feedbackResult.evaluatorInfo) {
            sourceInfo_ = { ...sourceInfo_, ...feedbackResult.evaluatorInfo };
        }
        const runId = feedbackResult.targetRunId ?? run_.id;
        return await this.createFeedback(runId, feedbackResult.key, {
            score: feedbackResult?.score,
            value: feedbackResult?.value,
            comment: feedbackResult?.comment,
            correction: feedbackResult?.correction,
            sourceInfo: sourceInfo_,
            feedbackSourceType: "model",
            sourceRunId: feedbackResult?.sourceRunId,
        });
    }
    async createFeedback(runId, key, { score, value, correction, comment, sourceInfo, feedbackSourceType = "api", sourceRunId, feedbackId, eager = false, }) {
        const feedback_source = {
            type: feedbackSourceType ?? "api",
            metadata: sourceInfo ?? {},
        };
        if (sourceRunId !== undefined &&
            feedback_source?.metadata !== undefined &&
            !feedback_source.metadata["__run"]) {
            feedback_source.metadata["__run"] = { run_id: sourceRunId };
        }
        if (feedback_source?.metadata !== undefined &&
            feedback_source.metadata["__run"]?.run_id !== undefined) {
            assertUuid(feedback_source.metadata["__run"].run_id);
        }
        const feedback = {
            id: feedbackId ?? wrapper.v4(),
            run_id: runId,
            key,
            score,
            value,
            correction,
            comment,
            feedback_source: feedback_source,
        };
        const url = `${this.apiUrl}/feedback` + (eager ? "/eager" : "");
        const response = await this.caller.call(fetch, url, {
            method: "POST",
            headers: { ...this.headers, "Content-Type": "application/json" },
            body: JSON.stringify(feedback),
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        await raiseForStatus(response, "create feedback");
        return feedback;
    }
    async updateFeedback(feedbackId, { score, value, correction, comment, }) {
        const feedbackUpdate = {};
        if (score !== undefined && score !== null) {
            feedbackUpdate["score"] = score;
        }
        if (value !== undefined && value !== null) {
            feedbackUpdate["value"] = value;
        }
        if (correction !== undefined && correction !== null) {
            feedbackUpdate["correction"] = correction;
        }
        if (comment !== undefined && comment !== null) {
            feedbackUpdate["comment"] = comment;
        }
        assertUuid(feedbackId);
        const response = await this.caller.call(fetch, `${this.apiUrl}/feedback/${feedbackId}`, {
            method: "PATCH",
            headers: { ...this.headers, "Content-Type": "application/json" },
            body: JSON.stringify(feedbackUpdate),
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        await raiseForStatus(response, "update feedback");
    }
    async readFeedback(feedbackId) {
        assertUuid(feedbackId);
        const path = `/feedback/${feedbackId}`;
        const response = await this._get(path);
        return response;
    }
    async deleteFeedback(feedbackId) {
        assertUuid(feedbackId);
        const path = `/feedback/${feedbackId}`;
        const response = await this.caller.call(fetch, this.apiUrl + path, {
            method: "DELETE",
            headers: this.headers,
            signal: AbortSignal.timeout(this.timeout_ms),
        });
        if (!response.ok) {
            throw new Error(`Failed to delete ${path}: ${response.status} ${response.statusText}`);
        }
        await response.json();
    }
    async *listFeedback({ runIds, feedbackKeys, feedbackSourceTypes, } = {}) {
        const queryParams = new URLSearchParams();
        if (runIds) {
            queryParams.append("run", runIds.join(","));
        }
        if (feedbackKeys) {
            for (const key of feedbackKeys) {
                queryParams.append("key", key);
            }
        }
        if (feedbackSourceTypes) {
            for (const type of feedbackSourceTypes) {
                queryParams.append("source", type);
            }
        }
        for await (const feedbacks of this._getPaginated("/feedback", queryParams)) {
            yield* feedbacks;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/node_modules/langsmith/dist/run_trees.js



const warnedMessages = {};
function warnOnce(message) {
    if (!warnedMessages[message]) {
        console.warn(message);
        warnedMessages[message] = true;
    }
}
function stripNonAlphanumeric(input) {
    return input.replace(/[-:.]/g, "");
}
function convertToDottedOrderFormat(epoch, runId) {
    return (stripNonAlphanumeric(`${new Date(epoch).toISOString().slice(0, -1)}000Z`) +
        runId);
}
class RunTree {
    constructor(config) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "run_type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "project_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "parent_run", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "child_runs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "start_time", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "end_time", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "extra", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "error", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "serialized", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "inputs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "outputs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reference_example_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "events", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "trace_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dotted_order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const defaultConfig = RunTree.getDefaultConfig();
        const client = config.client ?? new Client();
        Object.assign(this, { ...defaultConfig, ...config, client });
        if (!this.trace_id) {
            if (this.parent_run) {
                this.trace_id = this.parent_run.trace_id ?? this.id;
            }
            else {
                this.trace_id = this.id;
            }
        }
        if (!this.dotted_order) {
            const currentDottedOrder = convertToDottedOrderFormat(this.start_time, this.id);
            if (this.parent_run) {
                this.dotted_order =
                    this.parent_run.dotted_order + "." + currentDottedOrder;
            }
            else {
                this.dotted_order = currentDottedOrder;
            }
        }
    }
    static fromRunnableConfig(config, props) {
        // We only handle the callback manager case for now
        const callbackManager = config?.callbacks;
        let parentRun;
        let projectName;
        if (callbackManager) {
            const parentRunId = callbackManager?.getParentRunId?.() ?? "";
            const langChainTracer = callbackManager?.handlers?.find((handler) => handler?.name == "langchain_tracer");
            parentRun = langChainTracer?.getRun?.(parentRunId);
            projectName = langChainTracer?.projectName;
        }
        const deduppedTags = [
            ...new Set((parentRun?.tags ?? []).concat(config?.tags ?? [])),
        ];
        const dedupedMetadata = {
            ...parentRun?.extra?.metadata,
            ...config?.metadata,
        };
        const rt = new RunTree({
            name: props?.name ?? "<lambda>",
            parent_run: parentRun,
            tags: deduppedTags,
            extra: {
                metadata: dedupedMetadata,
            },
            project_name: projectName,
        });
        return rt;
    }
    static getDefaultConfig() {
        return {
            id: uuid.v4(),
            run_type: "chain",
            project_name: getEnvironmentVariable("LANGCHAIN_PROJECT") ??
                getEnvironmentVariable("LANGCHAIN_SESSION") ?? // TODO: Deprecate
                "default",
            child_runs: [],
            api_url: getEnvironmentVariable("LANGCHAIN_ENDPOINT") ?? "http://localhost:1984",
            api_key: getEnvironmentVariable("LANGCHAIN_API_KEY"),
            caller_options: {},
            start_time: Date.now(),
            serialized: {},
            inputs: {},
            extra: {},
        };
    }
    async createChild(config) {
        const child = new RunTree({
            ...config,
            parent_run: this,
            project_name: this.project_name,
            client: this.client,
        });
        this.child_runs.push(child);
        return child;
    }
    async end(outputs, error, endTime = Date.now()) {
        this.outputs = outputs;
        this.error = error;
        this.end_time = endTime;
    }
    async _convertToCreate(run, excludeChildRuns = true) {
        const runExtra = run.extra ?? {};
        if (!runExtra.runtime) {
            runExtra.runtime = {};
        }
        const runtimeEnv = await getRuntimeEnvironment();
        for (const [k, v] of Object.entries(runtimeEnv)) {
            if (!runExtra.runtime[k]) {
                runExtra.runtime[k] = v;
            }
        }
        let child_runs;
        let parent_run_id;
        if (!excludeChildRuns) {
            child_runs = await Promise.all(run.child_runs.map((child_run) => this._convertToCreate(child_run, excludeChildRuns)));
            parent_run_id = undefined;
        }
        else {
            parent_run_id = run.parent_run?.id;
            child_runs = [];
        }
        const persistedRun = {
            id: run.id,
            name: run.name,
            start_time: run.start_time,
            end_time: run.end_time,
            run_type: run.run_type,
            reference_example_id: run.reference_example_id,
            extra: runExtra,
            serialized: run.serialized,
            error: run.error,
            inputs: run.inputs,
            outputs: run.outputs,
            session_name: run.project_name,
            child_runs: child_runs,
            parent_run_id: parent_run_id,
            trace_id: run.trace_id,
            dotted_order: run.dotted_order,
            tags: run.tags,
        };
        return persistedRun;
    }
    async postRun(excludeChildRuns = true) {
        const runCreate = await this._convertToCreate(this, true);
        await this.client.createRun(runCreate);
        if (!excludeChildRuns) {
            warnOnce("Posting with excludeChildRuns=false is deprecated and will be removed in a future version.");
            for (const childRun of this.child_runs) {
                await childRun.postRun(false);
            }
        }
    }
    async patchRun() {
        const runUpdate = {
            end_time: this.end_time,
            error: this.error,
            outputs: this.outputs,
            parent_run_id: this.parent_run?.id,
            reference_example_id: this.reference_example_id,
            extra: this.extra,
            events: this.events,
            dotted_order: this.dotted_order,
            trace_id: this.trace_id,
            tags: this.tags,
        };
        await this.client.updateRun(this.id, runUpdate);
    }
}
function isRunTree(x) {
    return (x !== undefined &&
        typeof x.createChild === "function" &&
        typeof x.postRun === "function");
}
function containsLangChainTracerLike(x) {
    return (Array.isArray(x) &&
        x.some((callback) => {
            return (typeof callback.name === "string" &&
                callback.name === "langchain_tracer");
        }));
}
function isRunnableConfigLike(x) {
    // Check that it's an object with a callbacks arg
    // that has either a CallbackManagerLike object with a langchain tracer within it
    // or an array with a LangChainTracerLike object within it
    return (x !== undefined &&
        typeof x.callbacks === "object" &&
        // Callback manager with a langchain tracer
        (containsLangChainTracerLike(x.callbacks?.handlers) ||
            // Or it's an array with a LangChainTracerLike object within it
            containsLangChainTracerLike(x.callbacks)));
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/node_modules/langsmith/dist/index.js


// Update using yarn bump-version
const __version__ = "0.1.8";

;// CONCATENATED MODULE: ./node_modules/@langchain/core/node_modules/langsmith/index.js

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/env.js
const env_isBrowser = () => typeof window !== "undefined" && typeof window.document !== "undefined";
const env_isWebWorker = () => typeof globalThis === "object" &&
    globalThis.constructor &&
    globalThis.constructor.name === "DedicatedWorkerGlobalScope";
const env_isJsDom = () => (typeof window !== "undefined" && window.name === "nodejs") ||
    (typeof navigator !== "undefined" &&
        (navigator.userAgent.includes("Node.js") ||
            navigator.userAgent.includes("jsdom")));
// Supabase Edge Function provides a `Deno` global object
// without `version` property
const env_isDeno = () => typeof Deno !== "undefined";
// Mark not-as-node if in Supabase Edge Function
const env_isNode = () => typeof process !== "undefined" &&
    typeof process.versions !== "undefined" &&
    typeof process.versions.node !== "undefined" &&
    !env_isDeno();
const env_getEnv = () => {
    let env;
    if (env_isBrowser()) {
        env = "browser";
    }
    else if (env_isNode()) {
        env = "node";
    }
    else if (env_isWebWorker()) {
        env = "webworker";
    }
    else if (env_isJsDom()) {
        env = "jsdom";
    }
    else if (env_isDeno()) {
        env = "deno";
    }
    else {
        env = "other";
    }
    return env;
};
let env_runtimeEnvironment;
async function utils_env_getRuntimeEnvironment() {
    if (env_runtimeEnvironment === undefined) {
        const env = env_getEnv();
        env_runtimeEnvironment = {
            library: "langchain-js",
            runtime: env,
        };
    }
    return env_runtimeEnvironment;
}
function utils_env_getEnvironmentVariable(name) {
    // Certain Deno setups will throw an error if you try to access environment variables
    // https://github.com/langchain-ai/langchainjs/issues/1412
    try {
        return typeof process !== "undefined"
            ? // eslint-disable-next-line no-process-env
                process.env?.[name]
            : undefined;
    }
    catch (e) {
        return undefined;
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/tracers/tracer_langchain.js



class tracer_langchain_LangChainTracer extends tracers_base/* BaseTracer */.Z {
    constructor(fields = {}) {
        super(fields);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "langchain_tracer"
        });
        Object.defineProperty(this, "projectName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "exampleId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const { exampleId, projectName, client } = fields;
        this.projectName =
            projectName ??
                utils_env_getEnvironmentVariable("LANGCHAIN_PROJECT") ??
                utils_env_getEnvironmentVariable("LANGCHAIN_SESSION");
        this.exampleId = exampleId;
        this.client = client ?? new client_Client({});
    }
    async _convertToCreate(run, example_id = undefined) {
        return {
            ...run,
            extra: {
                ...run.extra,
                runtime: await utils_env_getRuntimeEnvironment(),
            },
            child_runs: undefined,
            session_name: this.projectName,
            reference_example_id: run.parent_run_id ? undefined : example_id,
        };
    }
    async persistRun(_run) { }
    async onRunCreate(run) {
        const persistedRun = await this._convertToCreate(run, this.exampleId);
        await this.client.createRun(persistedRun);
    }
    async onRunUpdate(run) {
        const runUpdate = {
            end_time: run.end_time,
            error: run.error,
            outputs: run.outputs,
            events: run.events,
            inputs: run.inputs,
            trace_id: run.trace_id,
            dotted_order: run.dotted_order,
            parent_run_id: run.parent_run_id,
        };
        await this.client.updateRun(run.id, runUpdate);
    }
    getRun(id) {
        return this.runMap.get(id);
    }
}

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/messages/index.js
var dist_messages = __webpack_require__(20596);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/tracers/tracer_langchain_v1.js



/** @deprecated Use LangChainTracer instead. */
class tracer_langchain_v1_LangChainTracerV1 extends (/* unused pure expression or super */ null && (BaseTracer)) {
    constructor() {
        super();
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "langchain_tracer"
        });
        Object.defineProperty(this, "endpoint", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: getEnvironmentVariable("LANGCHAIN_ENDPOINT") || "http://localhost:1984"
        });
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                "Content-Type": "application/json",
            }
        });
        Object.defineProperty(this, "session", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const apiKey = getEnvironmentVariable("LANGCHAIN_API_KEY");
        if (apiKey) {
            this.headers["x-api-key"] = apiKey;
        }
    }
    async newSession(sessionName) {
        const sessionCreate = {
            start_time: Date.now(),
            name: sessionName,
        };
        const session = await this.persistSession(sessionCreate);
        this.session = session;
        return session;
    }
    async loadSession(sessionName) {
        const endpoint = `${this.endpoint}/sessions?name=${sessionName}`;
        return this._handleSessionResponse(endpoint);
    }
    async loadDefaultSession() {
        const endpoint = `${this.endpoint}/sessions?name=default`;
        return this._handleSessionResponse(endpoint);
    }
    async convertV2RunToRun(run) {
        const session = this.session ?? (await this.loadDefaultSession());
        const serialized = run.serialized;
        let runResult;
        if (run.run_type === "llm") {
            const prompts = run.inputs.prompts
                ? run.inputs.prompts
                : run.inputs.messages.map((x) => getBufferString(x));
            const llmRun = {
                uuid: run.id,
                start_time: run.start_time,
                end_time: run.end_time,
                execution_order: run.execution_order,
                child_execution_order: run.child_execution_order,
                serialized,
                type: run.run_type,
                session_id: session.id,
                prompts,
                response: run.outputs,
            };
            runResult = llmRun;
        }
        else if (run.run_type === "chain") {
            const child_runs = await Promise.all(run.child_runs.map((child_run) => this.convertV2RunToRun(child_run)));
            const chainRun = {
                uuid: run.id,
                start_time: run.start_time,
                end_time: run.end_time,
                execution_order: run.execution_order,
                child_execution_order: run.child_execution_order,
                serialized,
                type: run.run_type,
                session_id: session.id,
                inputs: run.inputs,
                outputs: run.outputs,
                child_llm_runs: child_runs.filter((child_run) => child_run.type === "llm"),
                child_chain_runs: child_runs.filter((child_run) => child_run.type === "chain"),
                child_tool_runs: child_runs.filter((child_run) => child_run.type === "tool"),
            };
            runResult = chainRun;
        }
        else if (run.run_type === "tool") {
            const child_runs = await Promise.all(run.child_runs.map((child_run) => this.convertV2RunToRun(child_run)));
            const toolRun = {
                uuid: run.id,
                start_time: run.start_time,
                end_time: run.end_time,
                execution_order: run.execution_order,
                child_execution_order: run.child_execution_order,
                serialized,
                type: run.run_type,
                session_id: session.id,
                tool_input: run.inputs.input,
                output: run.outputs?.output,
                action: JSON.stringify(serialized),
                child_llm_runs: child_runs.filter((child_run) => child_run.type === "llm"),
                child_chain_runs: child_runs.filter((child_run) => child_run.type === "chain"),
                child_tool_runs: child_runs.filter((child_run) => child_run.type === "tool"),
            };
            runResult = toolRun;
        }
        else {
            throw new Error(`Unknown run type: ${run.run_type}`);
        }
        return runResult;
    }
    async persistRun(run) {
        let endpoint;
        let v1Run;
        if (run.run_type !== undefined) {
            v1Run = await this.convertV2RunToRun(run);
        }
        else {
            v1Run = run;
        }
        if (v1Run.type === "llm") {
            endpoint = `${this.endpoint}/llm-runs`;
        }
        else if (v1Run.type === "chain") {
            endpoint = `${this.endpoint}/chain-runs`;
        }
        else {
            endpoint = `${this.endpoint}/tool-runs`;
        }
        const response = await fetch(endpoint, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(v1Run),
        });
        if (!response.ok) {
            console.error(`Failed to persist run: ${response.status} ${response.statusText}`);
        }
    }
    async persistSession(sessionCreate) {
        const endpoint = `${this.endpoint}/sessions`;
        const response = await fetch(endpoint, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(sessionCreate),
        });
        if (!response.ok) {
            console.error(`Failed to persist session: ${response.status} ${response.statusText}, using default session.`);
            return {
                id: 1,
                ...sessionCreate,
            };
        }
        return {
            id: (await response.json()).id,
            ...sessionCreate,
        };
    }
    async _handleSessionResponse(endpoint) {
        const response = await fetch(endpoint, {
            method: "GET",
            headers: this.headers,
        });
        let tracerSession;
        if (!response.ok) {
            console.error(`Failed to load session: ${response.status} ${response.statusText}`);
            tracerSession = {
                id: 1,
                start_time: Date.now(),
            };
            this.session = tracerSession;
            return tracerSession;
        }
        const resp = (await response.json());
        if (resp.length === 0) {
            tracerSession = {
                id: 1,
                start_time: Date.now(),
            };
            this.session = tracerSession;
            return tracerSession;
        }
        [tracerSession] = resp;
        this.session = tracerSession;
        return tracerSession;
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/tracers/initialize.js


/**
 * @deprecated Use the V2 handler instead.
 *
 * Function that returns an instance of `LangChainTracerV1`. If a session
 * is provided, it loads that session into the tracer; otherwise, it loads
 * a default session.
 * @param session Optional session to load into the tracer.
 * @returns An instance of `LangChainTracerV1`.
 */
async function getTracingCallbackHandler(session) {
    const tracer = new LangChainTracerV1();
    if (session) {
        await tracer.loadSession(session);
    }
    else {
        await tracer.loadDefaultSession();
    }
    return tracer;
}
/**
 * Function that returns an instance of `LangChainTracer`. It does not
 * load any session data.
 * @returns An instance of `LangChainTracer`.
 */
async function getTracingV2CallbackHandler() {
    return new tracer_langchain_LangChainTracer();
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/callbacks/promises.js

let queue;
/**
 * Creates a queue using the p-queue library. The queue is configured to
 * auto-start and has a concurrency of 1, meaning it will process tasks
 * one at a time.
 */
function createQueue() {
    const PQueue =  true ? dist["default"] : dist;
    return new PQueue({
        autoStart: true,
        concurrency: 1,
    });
}
/**
 * Consume a promise, either adding it to the queue or waiting for it to resolve
 * @param promise Promise to consume
 * @param wait Whether to wait for the promise to resolve or resolve immediately
 */
async function consumeCallback(promiseFn, wait) {
    if (wait === true) {
        await promiseFn();
    }
    else {
        if (typeof queue === "undefined") {
            queue = createQueue();
        }
        void queue.add(promiseFn);
    }
}
/**
 * Waits for all promises in the queue to resolve. If the queue is
 * undefined, it immediately resolves a promise.
 */
function awaitAllCallbacks() {
    return typeof queue !== "undefined" ? queue.onIdle() : Promise.resolve();
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/callbacks/manager.js








function parseCallbackConfigArg(arg) {
    if (!arg) {
        return {};
    }
    else if (Array.isArray(arg) || "name" in arg) {
        return { callbacks: arg };
    }
    else {
        return arg;
    }
}
/**
 * Manage callbacks from different components of LangChain.
 */
class BaseCallbackManager {
    setHandler(handler) {
        return this.setHandlers([handler]);
    }
}
/**
 * Base class for run manager in LangChain.
 */
class BaseRunManager {
    constructor(runId, handlers, inheritableHandlers, tags, inheritableTags, metadata, inheritableMetadata, _parentRunId) {
        Object.defineProperty(this, "runId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: runId
        });
        Object.defineProperty(this, "handlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: handlers
        });
        Object.defineProperty(this, "inheritableHandlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: inheritableHandlers
        });
        Object.defineProperty(this, "tags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: tags
        });
        Object.defineProperty(this, "inheritableTags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: inheritableTags
        });
        Object.defineProperty(this, "metadata", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: metadata
        });
        Object.defineProperty(this, "inheritableMetadata", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: inheritableMetadata
        });
        Object.defineProperty(this, "_parentRunId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _parentRunId
        });
    }
    async handleText(text) {
        await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
            try {
                await handler.handleText?.(text, this.runId, this._parentRunId, this.tags);
            }
            catch (err) {
                console.error(`Error in handler ${handler.constructor.name}, handleText: ${err}`);
            }
        }, handler.awaitHandlers)));
    }
}
/**
 * Manages callbacks for retriever runs.
 */
class CallbackManagerForRetrieverRun extends BaseRunManager {
    getChild(tag) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const manager = new CallbackManager(this.runId);
        manager.setHandlers(this.inheritableHandlers);
        manager.addTags(this.inheritableTags);
        manager.addMetadata(this.inheritableMetadata);
        if (tag) {
            manager.addTags([tag], false);
        }
        return manager;
    }
    async handleRetrieverEnd(documents) {
        await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
            if (!handler.ignoreRetriever) {
                try {
                    await handler.handleRetrieverEnd?.(documents, this.runId, this._parentRunId, this.tags);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleRetriever`);
                }
            }
        }, handler.awaitHandlers)));
    }
    async handleRetrieverError(err) {
        await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
            if (!handler.ignoreRetriever) {
                try {
                    await handler.handleRetrieverError?.(err, this.runId, this._parentRunId, this.tags);
                }
                catch (error) {
                    console.error(`Error in handler ${handler.constructor.name}, handleRetrieverError: ${error}`);
                }
            }
        }, handler.awaitHandlers)));
    }
}
class CallbackManagerForLLMRun extends BaseRunManager {
    async handleLLMNewToken(token, idx, _runId, _parentRunId, _tags, fields) {
        await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
            if (!handler.ignoreLLM) {
                try {
                    await handler.handleLLMNewToken?.(token, idx ?? { prompt: 0, completion: 0 }, this.runId, this._parentRunId, this.tags, fields);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleLLMNewToken: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
    async handleLLMError(err) {
        await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
            if (!handler.ignoreLLM) {
                try {
                    await handler.handleLLMError?.(err, this.runId, this._parentRunId, this.tags);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleLLMError: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
    async handleLLMEnd(output) {
        await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
            if (!handler.ignoreLLM) {
                try {
                    await handler.handleLLMEnd?.(output, this.runId, this._parentRunId, this.tags);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleLLMEnd: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
}
class CallbackManagerForChainRun extends BaseRunManager {
    getChild(tag) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const manager = new CallbackManager(this.runId);
        manager.setHandlers(this.inheritableHandlers);
        manager.addTags(this.inheritableTags);
        manager.addMetadata(this.inheritableMetadata);
        if (tag) {
            manager.addTags([tag], false);
        }
        return manager;
    }
    async handleChainError(err, _runId, _parentRunId, _tags, kwargs) {
        await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
            if (!handler.ignoreChain) {
                try {
                    await handler.handleChainError?.(err, this.runId, this._parentRunId, this.tags, kwargs);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleChainError: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
    async handleChainEnd(output, _runId, _parentRunId, _tags, kwargs) {
        await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
            if (!handler.ignoreChain) {
                try {
                    await handler.handleChainEnd?.(output, this.runId, this._parentRunId, this.tags, kwargs);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleChainEnd: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
    async handleAgentAction(action) {
        await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
            if (!handler.ignoreAgent) {
                try {
                    await handler.handleAgentAction?.(action, this.runId, this._parentRunId, this.tags);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleAgentAction: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
    async handleAgentEnd(action) {
        await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
            if (!handler.ignoreAgent) {
                try {
                    await handler.handleAgentEnd?.(action, this.runId, this._parentRunId, this.tags);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleAgentEnd: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
}
class CallbackManagerForToolRun extends BaseRunManager {
    getChild(tag) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const manager = new CallbackManager(this.runId);
        manager.setHandlers(this.inheritableHandlers);
        manager.addTags(this.inheritableTags);
        manager.addMetadata(this.inheritableMetadata);
        if (tag) {
            manager.addTags([tag], false);
        }
        return manager;
    }
    async handleToolError(err) {
        await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
            if (!handler.ignoreAgent) {
                try {
                    await handler.handleToolError?.(err, this.runId, this._parentRunId, this.tags);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleToolError: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
    async handleToolEnd(output) {
        await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
            if (!handler.ignoreAgent) {
                try {
                    await handler.handleToolEnd?.(output, this.runId, this._parentRunId, this.tags);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleToolEnd: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
}
/**
 * @example
 * ```typescript
 * const prompt = PromptTemplate.fromTemplate("What is the answer to {question}?");
 *
 * // Example of using LLMChain with OpenAI and a simple prompt
 * const chain = new LLMChain({
 *   llm: new ChatOpenAI({ temperature: 0.9 }),
 *   prompt,
 * });
 *
 * // Running the chain with a single question
 * const result = await chain.call({
 *   question: "What is the airspeed velocity of an unladen swallow?",
 * });
 * console.log("The answer is:", result);
 * ```
 */
class CallbackManager extends BaseCallbackManager {
    constructor(parentRunId, options) {
        super();
        Object.defineProperty(this, "handlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "inheritableHandlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "tags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "inheritableTags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "metadata", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "inheritableMetadata", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "callback_manager"
        });
        Object.defineProperty(this, "_parentRunId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.handlers = options?.handlers ?? this.handlers;
        this.inheritableHandlers =
            options?.inheritableHandlers ?? this.inheritableHandlers;
        this.tags = options?.tags ?? this.tags;
        this.inheritableTags = options?.inheritableTags ?? this.inheritableTags;
        this.metadata = options?.metadata ?? this.metadata;
        this.inheritableMetadata =
            options?.inheritableMetadata ?? this.inheritableMetadata;
        this._parentRunId = parentRunId;
    }
    /**
     * Gets the parent run ID, if any.
     *
     * @returns The parent run ID.
     */
    getParentRunId() {
        return this._parentRunId;
    }
    async handleLLMStart(llm, prompts, _runId = undefined, _parentRunId = undefined, extraParams = undefined, _tags = undefined, _metadata = undefined, runName = undefined) {
        return Promise.all(prompts.map(async (prompt) => {
            const runId = (0,wrapper.v4)();
            await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
                if (!handler.ignoreLLM) {
                    try {
                        await handler.handleLLMStart?.(llm, [prompt], runId, this._parentRunId, extraParams, this.tags, this.metadata, runName);
                    }
                    catch (err) {
                        console.error(`Error in handler ${handler.constructor.name}, handleLLMStart: ${err}`);
                    }
                }
            }, handler.awaitHandlers)));
            return new CallbackManagerForLLMRun(runId, this.handlers, this.inheritableHandlers, this.tags, this.inheritableTags, this.metadata, this.inheritableMetadata, this._parentRunId);
        }));
    }
    async handleChatModelStart(llm, messages, _runId = undefined, _parentRunId = undefined, extraParams = undefined, _tags = undefined, _metadata = undefined, runName = undefined) {
        return Promise.all(messages.map(async (messageGroup) => {
            const runId = (0,wrapper.v4)();
            await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
                if (!handler.ignoreLLM) {
                    try {
                        if (handler.handleChatModelStart) {
                            await handler.handleChatModelStart?.(llm, [messageGroup], runId, this._parentRunId, extraParams, this.tags, this.metadata, runName);
                        }
                        else if (handler.handleLLMStart) {
                            const messageString = (0,dist_messages/* getBufferString */.zs)(messageGroup);
                            await handler.handleLLMStart?.(llm, [messageString], runId, this._parentRunId, extraParams, this.tags, this.metadata, runName);
                        }
                    }
                    catch (err) {
                        console.error(`Error in handler ${handler.constructor.name}, handleLLMStart: ${err}`);
                    }
                }
            }, handler.awaitHandlers)));
            return new CallbackManagerForLLMRun(runId, this.handlers, this.inheritableHandlers, this.tags, this.inheritableTags, this.metadata, this.inheritableMetadata, this._parentRunId);
        }));
    }
    async handleChainStart(chain, inputs, runId = (0,wrapper.v4)(), runType = undefined, _tags = undefined, _metadata = undefined, runName = undefined) {
        await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
            if (!handler.ignoreChain) {
                try {
                    await handler.handleChainStart?.(chain, inputs, runId, this._parentRunId, this.tags, this.metadata, runType, runName);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleChainStart: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
        return new CallbackManagerForChainRun(runId, this.handlers, this.inheritableHandlers, this.tags, this.inheritableTags, this.metadata, this.inheritableMetadata, this._parentRunId);
    }
    async handleToolStart(tool, input, runId = (0,wrapper.v4)(), _parentRunId = undefined, _tags = undefined, _metadata = undefined, runName = undefined) {
        await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
            if (!handler.ignoreAgent) {
                try {
                    await handler.handleToolStart?.(tool, input, runId, this._parentRunId, this.tags, this.metadata, runName);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleToolStart: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
        return new CallbackManagerForToolRun(runId, this.handlers, this.inheritableHandlers, this.tags, this.inheritableTags, this.metadata, this.inheritableMetadata, this._parentRunId);
    }
    async handleRetrieverStart(retriever, query, runId = (0,wrapper.v4)(), _parentRunId = undefined, _tags = undefined, _metadata = undefined, runName = undefined) {
        await Promise.all(this.handlers.map((handler) => consumeCallback(async () => {
            if (!handler.ignoreRetriever) {
                try {
                    await handler.handleRetrieverStart?.(retriever, query, runId, this._parentRunId, this.tags, this.metadata, runName);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleRetrieverStart: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
        return new CallbackManagerForRetrieverRun(runId, this.handlers, this.inheritableHandlers, this.tags, this.inheritableTags, this.metadata, this.inheritableMetadata, this._parentRunId);
    }
    addHandler(handler, inherit = true) {
        this.handlers.push(handler);
        if (inherit) {
            this.inheritableHandlers.push(handler);
        }
    }
    removeHandler(handler) {
        this.handlers = this.handlers.filter((_handler) => _handler !== handler);
        this.inheritableHandlers = this.inheritableHandlers.filter((_handler) => _handler !== handler);
    }
    setHandlers(handlers, inherit = true) {
        this.handlers = [];
        this.inheritableHandlers = [];
        for (const handler of handlers) {
            this.addHandler(handler, inherit);
        }
    }
    addTags(tags, inherit = true) {
        this.removeTags(tags); // Remove duplicates
        this.tags.push(...tags);
        if (inherit) {
            this.inheritableTags.push(...tags);
        }
    }
    removeTags(tags) {
        this.tags = this.tags.filter((tag) => !tags.includes(tag));
        this.inheritableTags = this.inheritableTags.filter((tag) => !tags.includes(tag));
    }
    addMetadata(metadata, inherit = true) {
        this.metadata = { ...this.metadata, ...metadata };
        if (inherit) {
            this.inheritableMetadata = { ...this.inheritableMetadata, ...metadata };
        }
    }
    removeMetadata(metadata) {
        for (const key of Object.keys(metadata)) {
            delete this.metadata[key];
            delete this.inheritableMetadata[key];
        }
    }
    copy(additionalHandlers = [], inherit = true) {
        const manager = new CallbackManager(this._parentRunId);
        for (const handler of this.handlers) {
            const inheritable = this.inheritableHandlers.includes(handler);
            manager.addHandler(handler, inheritable);
        }
        for (const tag of this.tags) {
            const inheritable = this.inheritableTags.includes(tag);
            manager.addTags([tag], inheritable);
        }
        for (const key of Object.keys(this.metadata)) {
            const inheritable = Object.keys(this.inheritableMetadata).includes(key);
            manager.addMetadata({ [key]: this.metadata[key] }, inheritable);
        }
        for (const handler of additionalHandlers) {
            if (
            // Prevent multiple copies of console_callback_handler
            manager.handlers
                .filter((h) => h.name === "console_callback_handler")
                .some((h) => h.name === handler.name)) {
                continue;
            }
            manager.addHandler(handler, inherit);
        }
        return manager;
    }
    static fromHandlers(handlers) {
        class Handler extends base/* BaseCallbackHandler */.E {
            constructor() {
                super();
                Object.defineProperty(this, "name", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: (0,wrapper.v4)()
                });
                Object.assign(this, handlers);
            }
        }
        const manager = new this();
        manager.addHandler(new Handler());
        return manager;
    }
    static async configure(inheritableHandlers, localHandlers, inheritableTags, localTags, inheritableMetadata, localMetadata, options) {
        let callbackManager;
        if (inheritableHandlers || localHandlers) {
            if (Array.isArray(inheritableHandlers) || !inheritableHandlers) {
                callbackManager = new CallbackManager();
                callbackManager.setHandlers(inheritableHandlers?.map(ensureHandler) ?? [], true);
            }
            else {
                callbackManager = inheritableHandlers;
            }
            callbackManager = callbackManager.copy(Array.isArray(localHandlers)
                ? localHandlers.map(ensureHandler)
                : localHandlers?.handlers, false);
        }
        const verboseEnabled = utils_env_getEnvironmentVariable("LANGCHAIN_VERBOSE") === "true" ||
            options?.verbose;
        const tracingV2Enabled = utils_env_getEnvironmentVariable("LANGCHAIN_TRACING_V2") === "true";
        const tracingEnabled = tracingV2Enabled ||
            (utils_env_getEnvironmentVariable("LANGCHAIN_TRACING") ?? false);
        if (verboseEnabled || tracingEnabled) {
            if (!callbackManager) {
                callbackManager = new CallbackManager();
            }
            if (verboseEnabled &&
                !callbackManager.handlers.some((handler) => handler.name === ConsoleCallbackHandler.prototype.name)) {
                const consoleHandler = new ConsoleCallbackHandler();
                callbackManager.addHandler(consoleHandler, true);
            }
            if (tracingEnabled &&
                !callbackManager.handlers.some((handler) => handler.name === "langchain_tracer")) {
                if (tracingV2Enabled) {
                    callbackManager.addHandler(await getTracingV2CallbackHandler(), true);
                }
            }
        }
        if (inheritableTags || localTags) {
            if (callbackManager) {
                callbackManager.addTags(inheritableTags ?? []);
                callbackManager.addTags(localTags ?? [], false);
            }
        }
        if (inheritableMetadata || localMetadata) {
            if (callbackManager) {
                callbackManager.addMetadata(inheritableMetadata ?? {});
                callbackManager.addMetadata(localMetadata ?? {}, false);
            }
        }
        return callbackManager;
    }
}
function ensureHandler(handler) {
    if ("name" in handler) {
        return handler;
    }
    return base/* BaseCallbackHandler.fromMethods */.E.fromMethods(handler);
}
/**
 * @example
 * ```typescript
 * const prompt = PromptTemplate.fromTemplate(`What is the answer to {question}?`);
 *
 * // Example of using LLMChain to process a series of questions
 * const chain = new LLMChain({
 *   llm: new ChatOpenAI({ temperature: 0.9 }),
 *   prompt,
 * });
 *
 * // Process questions using the chain
 * const processQuestions = async (questions) => {
 *   for (const question of questions) {
 *     const result = await chain.call({ question });
 *     console.log(result);
 *   }
 * };
 *
 * // Example questions
 * const questions = [
 *   "What is your name?",
 *   "What is your quest?",
 *   "What is your favorite color?",
 * ];
 *
 * // Run the example
 * processQuestions(questions).catch(console.error);
 *
 * ```
 */
class TraceGroup {
    constructor(groupName, options) {
        Object.defineProperty(this, "groupName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: groupName
        });
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: options
        });
        Object.defineProperty(this, "runManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    async getTraceGroupCallbackManager(group_name, inputs, options) {
        const cb = new LangChainTracer(options);
        const cm = await CallbackManager.configure([cb]);
        const runManager = await cm?.handleChainStart({
            lc: 1,
            type: "not_implemented",
            id: ["langchain", "callbacks", "groups", group_name],
        }, inputs ?? {});
        if (!runManager) {
            throw new Error("Failed to create run group callback manager.");
        }
        return runManager;
    }
    async start(inputs) {
        if (!this.runManager) {
            this.runManager = await this.getTraceGroupCallbackManager(this.groupName, inputs, this.options);
        }
        return this.runManager.getChild();
    }
    async error(err) {
        if (this.runManager) {
            await this.runManager.handleChainError(err);
            this.runManager = undefined;
        }
    }
    async end(output) {
        if (this.runManager) {
            await this.runManager.handleChainEnd(output ?? {});
            this.runManager = undefined;
        }
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _coerceToDict(value, defaultKey) {
    return value && !Array.isArray(value) && typeof value === "object"
        ? value
        : { [defaultKey]: value };
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function traceAsGroup(groupOptions, enclosedCode, ...args) {
    const traceGroup = new TraceGroup(groupOptions.name, groupOptions);
    const callbackManager = await traceGroup.start({ ...args });
    try {
        const result = await enclosedCode(callbackManager, ...args);
        await traceGroup.end(_coerceToDict(result, "output"));
        return result;
    }
    catch (err) {
        await traceGroup.error(err);
        throw err;
    }
}


/***/ }),

/***/ 86270:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ Serializable),
  "j": () => (/* binding */ get_lc_unique_name)
});

// EXTERNAL MODULE: ./node_modules/decamelize/index.js
var decamelize = __webpack_require__(97983);
// EXTERNAL MODULE: ./node_modules/@langchain/core/node_modules/camelcase/index.js
var camelcase = __webpack_require__(25096);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/load/map_keys.js


function keyToJson(key, map) {
    return map?.[key] || decamelize(key);
}
function keyFromJson(key, map) {
    return map?.[key] || camelCase(key);
}
function mapKeys(fields, mapper, map) {
    const mapped = {};
    for (const key in fields) {
        if (Object.hasOwn(fields, key)) {
            mapped[mapper(key, map)] = fields[key];
        }
    }
    return mapped;
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/load/serializable.js

function shallowCopy(obj) {
    return Array.isArray(obj) ? [...obj] : { ...obj };
}
function replaceSecrets(root, secretsMap) {
    const result = shallowCopy(root);
    for (const [path, secretId] of Object.entries(secretsMap)) {
        const [last, ...partsReverse] = path.split(".").reverse();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let current = result;
        for (const part of partsReverse.reverse()) {
            if (current[part] === undefined) {
                break;
            }
            current[part] = shallowCopy(current[part]);
            current = current[part];
        }
        if (current[last] !== undefined) {
            current[last] = {
                lc: 1,
                type: "secret",
                id: [secretId],
            };
        }
    }
    return result;
}
/**
 * Get a unique name for the module, rather than parent class implementations.
 * Should not be subclassed, subclass lc_name above instead.
 */
function get_lc_unique_name(
// eslint-disable-next-line @typescript-eslint/no-use-before-define
serializableClass) {
    // "super" here would refer to the parent class of Serializable,
    // when we want the parent class of the module actually calling this method.
    const parentClass = Object.getPrototypeOf(serializableClass);
    const lcNameIsSubclassed = typeof serializableClass.lc_name === "function" &&
        (typeof parentClass.lc_name !== "function" ||
            serializableClass.lc_name() !== parentClass.lc_name());
    if (lcNameIsSubclassed) {
        return serializableClass.lc_name();
    }
    else {
        return serializableClass.name;
    }
}
class Serializable {
    /**
     * The name of the serializable. Override to provide an alias or
     * to preserve the serialized module name in minified environments.
     *
     * Implemented as a static method to support loading logic.
     */
    static lc_name() {
        return this.name;
    }
    /**
     * The final serialized identifier for the module.
     */
    get lc_id() {
        return [
            ...this.lc_namespace,
            get_lc_unique_name(this.constructor),
        ];
    }
    /**
     * A map of secrets, which will be omitted from serialization.
     * Keys are paths to the secret in constructor args, e.g. "foo.bar.baz".
     * Values are the secret ids, which will be used when deserializing.
     */
    get lc_secrets() {
        return undefined;
    }
    /**
     * A map of additional attributes to merge with constructor args.
     * Keys are the attribute names, e.g. "foo".
     * Values are the attribute values, which will be serialized.
     * These attributes need to be accepted by the constructor as arguments.
     */
    get lc_attributes() {
        return undefined;
    }
    /**
     * A map of aliases for constructor args.
     * Keys are the attribute names, e.g. "foo".
     * Values are the alias that will replace the key in serialization.
     * This is used to eg. make argument names match Python.
     */
    get lc_aliases() {
        return undefined;
    }
    constructor(kwargs, ..._args) {
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "lc_kwargs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lc_kwargs = kwargs || {};
    }
    toJSON() {
        if (!this.lc_serializable) {
            return this.toJSONNotImplemented();
        }
        if (
        // eslint-disable-next-line no-instanceof/no-instanceof
        this.lc_kwargs instanceof Serializable ||
            typeof this.lc_kwargs !== "object" ||
            Array.isArray(this.lc_kwargs)) {
            // We do not support serialization of classes with arg not a POJO
            // I'm aware the check above isn't as strict as it could be
            return this.toJSONNotImplemented();
        }
        const aliases = {};
        const secrets = {};
        const kwargs = Object.keys(this.lc_kwargs).reduce((acc, key) => {
            acc[key] = key in this ? this[key] : this.lc_kwargs[key];
            return acc;
        }, {});
        // get secrets, attributes and aliases from all superclasses
        for (
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let current = Object.getPrototypeOf(this); current; current = Object.getPrototypeOf(current)) {
            Object.assign(aliases, Reflect.get(current, "lc_aliases", this));
            Object.assign(secrets, Reflect.get(current, "lc_secrets", this));
            Object.assign(kwargs, Reflect.get(current, "lc_attributes", this));
        }
        // include all secrets used, even if not in kwargs,
        // will be replaced with sentinel value in replaceSecrets
        Object.keys(secrets).forEach((keyPath) => {
            // eslint-disable-next-line @typescript-eslint/no-this-alias, @typescript-eslint/no-explicit-any
            let read = this;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let write = kwargs;
            const [last, ...partsReverse] = keyPath.split(".").reverse();
            for (const key of partsReverse.reverse()) {
                if (!(key in read) || read[key] === undefined)
                    return;
                if (!(key in write) || write[key] === undefined) {
                    if (typeof read[key] === "object" && read[key] != null) {
                        write[key] = {};
                    }
                    else if (Array.isArray(read[key])) {
                        write[key] = [];
                    }
                }
                read = read[key];
                write = write[key];
            }
            if (last in read && read[last] !== undefined) {
                write[last] = write[last] || read[last];
            }
        });
        return {
            lc: 1,
            type: "constructor",
            id: this.lc_id,
            kwargs: mapKeys(Object.keys(secrets).length ? replaceSecrets(kwargs, secrets) : kwargs, keyToJson, aliases),
        };
    }
    toJSONNotImplemented() {
        return {
            lc: 1,
            type: "not_implemented",
            id: this.lc_id,
        };
    }
}


/***/ }),

/***/ 20596:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E1": () => (/* binding */ coerceMessageLikeToMessage),
/* harmony export */   "GC": () => (/* binding */ AIMessageChunk),
/* harmony export */   "J": () => (/* binding */ ChatMessage),
/* harmony export */   "QW": () => (/* binding */ isBaseMessage),
/* harmony export */   "gY": () => (/* binding */ AIMessage),
/* harmony export */   "jN": () => (/* binding */ SystemMessage),
/* harmony export */   "ku": () => (/* binding */ BaseMessage),
/* harmony export */   "xk": () => (/* binding */ HumanMessage),
/* harmony export */   "zs": () => (/* binding */ getBufferString)
/* harmony export */ });
/* unused harmony exports BaseMessageChunk, HumanMessageChunk, SystemMessageChunk, FunctionMessage, FunctionMessageChunk, ToolMessage, ToolMessageChunk, isBaseMessageChunk, ChatMessageChunk, mapStoredMessageToChatMessage, mapStoredMessagesToChatMessages, mapChatMessagesToStoredMessages */
/* harmony import */ var _load_serializable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86270);

function mergeContent(firstContent, secondContent) {
    // If first content is a string
    if (typeof firstContent === "string") {
        if (typeof secondContent === "string") {
            return firstContent + secondContent;
        }
        else {
            return [{ type: "text", text: firstContent }, ...secondContent];
        }
        // If both are arrays
    }
    else if (Array.isArray(secondContent)) {
        return [...firstContent, ...secondContent];
        // If the first content is a list and second is a string
    }
    else {
        // Otherwise, add the second content as a new element of the list
        return [...firstContent, { type: "text", text: secondContent }];
    }
}
/**
 * Base class for all types of messages in a conversation. It includes
 * properties like `content`, `name`, and `additional_kwargs`. It also
 * includes methods like `toDict()` and `_getType()`.
 */
class BaseMessage extends _load_serializable_js__WEBPACK_IMPORTED_MODULE_0__/* .Serializable */ .i {
    get lc_aliases() {
        // exclude snake case conversion to pascal case
        return { additional_kwargs: "additional_kwargs" };
    }
    /**
     * @deprecated
     * Use {@link BaseMessage.content} instead.
     */
    get text() {
        return typeof this.content === "string" ? this.content : "";
    }
    constructor(fields, 
    /** @deprecated */
    kwargs) {
        if (typeof fields === "string") {
            // eslint-disable-next-line no-param-reassign
            fields = { content: fields, additional_kwargs: kwargs };
        }
        // Make sure the default value for additional_kwargs is passed into super() for serialization
        if (!fields.additional_kwargs) {
            // eslint-disable-next-line no-param-reassign
            fields.additional_kwargs = {};
        }
        super(fields);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "messages"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        /** The content of the message. */
        Object.defineProperty(this, "content", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The name of the message sender in a multi-user chat. */
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Additional keyword arguments */
        Object.defineProperty(this, "additional_kwargs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = fields.name;
        this.content = fields.content;
        this.additional_kwargs = fields.additional_kwargs;
    }
    toDict() {
        return {
            type: this._getType(),
            data: this.toJSON()
                .kwargs,
        };
    }
    toChunk() {
        const type = this._getType();
        if (type === "human") {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            return new HumanMessageChunk({ ...this });
        }
        else if (type === "ai") {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            return new AIMessageChunk({ ...this });
        }
        else if (type === "system") {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            return new SystemMessageChunk({ ...this });
        }
        else if (type === "function") {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            return new FunctionMessageChunk({ ...this });
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
        }
        else if (ChatMessage.isInstance(this)) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            return new ChatMessageChunk({ ...this });
        }
        else {
            throw new Error("Unknown message type.");
        }
    }
}
function isOpenAIToolCallArray(value) {
    return (Array.isArray(value) &&
        value.every((v) => typeof v.index === "number"));
}
/**
 * Represents a chunk of a message, which can be concatenated with other
 * message chunks. It includes a method `_merge_kwargs_dict()` for merging
 * additional keyword arguments from another `BaseMessageChunk` into this
 * one. It also overrides the `__add__()` method to support concatenation
 * of `BaseMessageChunk` instances.
 */
class BaseMessageChunk extends BaseMessage {
    static _mergeAdditionalKwargs(left, right) {
        const merged = { ...left };
        for (const [key, value] of Object.entries(right)) {
            if (merged[key] === undefined) {
                merged[key] = value;
            }
            else if (typeof merged[key] !== typeof value) {
                throw new Error(`additional_kwargs[${key}] already exists in the message chunk, but with a different type.`);
            }
            else if (typeof merged[key] === "string") {
                merged[key] = merged[key] + value;
            }
            else if (!Array.isArray(merged[key]) &&
                typeof merged[key] === "object") {
                merged[key] = this._mergeAdditionalKwargs(merged[key], value);
            }
            else if (key === "tool_calls" &&
                isOpenAIToolCallArray(merged[key]) &&
                isOpenAIToolCallArray(value)) {
                for (const toolCall of value) {
                    if (merged[key]?.[toolCall.index] !== undefined) {
                        merged[key] = merged[key]?.map((value, i) => {
                            if (i !== toolCall.index) {
                                return value;
                            }
                            return {
                                ...value,
                                ...toolCall,
                                function: {
                                    name: toolCall.function.name ?? value.function.name,
                                    arguments: (value.function.arguments ?? "") +
                                        (toolCall.function.arguments ?? ""),
                                },
                            };
                        });
                    }
                    else {
                        merged[key][toolCall.index] = toolCall;
                    }
                }
            }
            else {
                throw new Error(`additional_kwargs[${key}] already exists in this message chunk.`);
            }
        }
        return merged;
    }
}
/**
 * Represents a human message in a conversation.
 */
class HumanMessage extends BaseMessage {
    static lc_name() {
        return "HumanMessage";
    }
    _getType() {
        return "human";
    }
}
/**
 * Represents a chunk of a human message, which can be concatenated with
 * other human message chunks.
 */
class HumanMessageChunk extends BaseMessageChunk {
    static lc_name() {
        return "HumanMessageChunk";
    }
    _getType() {
        return "human";
    }
    concat(chunk) {
        return new HumanMessageChunk({
            content: mergeContent(this.content, chunk.content),
            additional_kwargs: HumanMessageChunk._mergeAdditionalKwargs(this.additional_kwargs, chunk.additional_kwargs),
        });
    }
}
/**
 * Represents an AI message in a conversation.
 */
class AIMessage extends BaseMessage {
    static lc_name() {
        return "AIMessage";
    }
    _getType() {
        return "ai";
    }
}
/**
 * Represents a chunk of an AI message, which can be concatenated with
 * other AI message chunks.
 */
class AIMessageChunk extends BaseMessageChunk {
    static lc_name() {
        return "AIMessageChunk";
    }
    _getType() {
        return "ai";
    }
    concat(chunk) {
        return new AIMessageChunk({
            content: mergeContent(this.content, chunk.content),
            additional_kwargs: AIMessageChunk._mergeAdditionalKwargs(this.additional_kwargs, chunk.additional_kwargs),
        });
    }
}
/**
 * Represents a system message in a conversation.
 */
class SystemMessage extends BaseMessage {
    static lc_name() {
        return "SystemMessage";
    }
    _getType() {
        return "system";
    }
}
/**
 * Represents a chunk of a system message, which can be concatenated with
 * other system message chunks.
 */
class SystemMessageChunk extends BaseMessageChunk {
    static lc_name() {
        return "SystemMessageChunk";
    }
    _getType() {
        return "system";
    }
    concat(chunk) {
        return new SystemMessageChunk({
            content: mergeContent(this.content, chunk.content),
            additional_kwargs: SystemMessageChunk._mergeAdditionalKwargs(this.additional_kwargs, chunk.additional_kwargs),
        });
    }
}
/**
 * Represents a function message in a conversation.
 */
class FunctionMessage extends (/* unused pure expression or super */ null && (BaseMessage)) {
    static lc_name() {
        return "FunctionMessage";
    }
    constructor(fields, 
    /** @deprecated */
    name) {
        if (typeof fields === "string") {
            // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-non-null-assertion
            fields = { content: fields, name: name };
        }
        super(fields);
    }
    _getType() {
        return "function";
    }
}
/**
 * Represents a chunk of a function message, which can be concatenated
 * with other function message chunks.
 */
class FunctionMessageChunk extends BaseMessageChunk {
    static lc_name() {
        return "FunctionMessageChunk";
    }
    _getType() {
        return "function";
    }
    concat(chunk) {
        return new FunctionMessageChunk({
            content: mergeContent(this.content, chunk.content),
            additional_kwargs: FunctionMessageChunk._mergeAdditionalKwargs(this.additional_kwargs, chunk.additional_kwargs),
            name: this.name ?? "",
        });
    }
}
/**
 * Represents a tool message in a conversation.
 */
class ToolMessage extends (/* unused pure expression or super */ null && (BaseMessage)) {
    static lc_name() {
        return "ToolMessage";
    }
    get lc_aliases() {
        // exclude snake case conversion to pascal case
        return { tool_call_id: "tool_call_id" };
    }
    constructor(fields, tool_call_id, name) {
        if (typeof fields === "string") {
            // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-non-null-assertion
            fields = { content: fields, name, tool_call_id: tool_call_id };
        }
        super(fields);
        Object.defineProperty(this, "tool_call_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.tool_call_id = fields.tool_call_id;
    }
    _getType() {
        return "tool";
    }
    static isInstance(message) {
        return message._getType() === "tool";
    }
}
/**
 * Represents a chunk of a tool message, which can be concatenated
 * with other tool message chunks.
 */
class ToolMessageChunk extends (/* unused pure expression or super */ null && (BaseMessageChunk)) {
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "tool_call_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.tool_call_id = fields.tool_call_id;
    }
    static lc_name() {
        return "ToolMessageChunk";
    }
    _getType() {
        return "tool";
    }
    concat(chunk) {
        return new ToolMessageChunk({
            content: mergeContent(this.content, chunk.content),
            additional_kwargs: ToolMessageChunk._mergeAdditionalKwargs(this.additional_kwargs, chunk.additional_kwargs),
            tool_call_id: this.tool_call_id,
        });
    }
}
/**
 * Represents a chat message in a conversation.
 */
class ChatMessage extends BaseMessage {
    static lc_name() {
        return "ChatMessage";
    }
    static _chatMessageClass() {
        return ChatMessage;
    }
    constructor(fields, role) {
        if (typeof fields === "string") {
            // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-non-null-assertion
            fields = { content: fields, role: role };
        }
        super(fields);
        Object.defineProperty(this, "role", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.role = fields.role;
    }
    _getType() {
        return "generic";
    }
    static isInstance(message) {
        return message._getType() === "generic";
    }
}
function isBaseMessage(messageLike) {
    return typeof messageLike?._getType === "function";
}
function isBaseMessageChunk(messageLike) {
    return (isBaseMessage(messageLike) &&
        typeof messageLike.concat === "function");
}
function coerceMessageLikeToMessage(messageLike) {
    if (typeof messageLike === "string") {
        return new HumanMessage(messageLike);
    }
    else if (isBaseMessage(messageLike)) {
        return messageLike;
    }
    const [type, content] = messageLike;
    if (type === "human" || type === "user") {
        return new HumanMessage({ content });
    }
    else if (type === "ai" || type === "assistant") {
        return new AIMessage({ content });
    }
    else if (type === "system") {
        return new SystemMessage({ content });
    }
    else {
        throw new Error(`Unable to coerce message from array: only human, AI, or system message coercion is currently supported.`);
    }
}
/**
 * Represents a chunk of a chat message, which can be concatenated with
 * other chat message chunks.
 */
class ChatMessageChunk extends BaseMessageChunk {
    static lc_name() {
        return "ChatMessageChunk";
    }
    constructor(fields, role) {
        if (typeof fields === "string") {
            // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-non-null-assertion
            fields = { content: fields, role: role };
        }
        super(fields);
        Object.defineProperty(this, "role", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.role = fields.role;
    }
    _getType() {
        return "generic";
    }
    concat(chunk) {
        return new ChatMessageChunk({
            content: mergeContent(this.content, chunk.content),
            additional_kwargs: ChatMessageChunk._mergeAdditionalKwargs(this.additional_kwargs, chunk.additional_kwargs),
            role: this.role,
        });
    }
}
/**
 * This function is used by memory classes to get a string representation
 * of the chat message history, based on the message content and role.
 */
function getBufferString(messages, humanPrefix = "Human", aiPrefix = "AI") {
    const string_messages = [];
    for (const m of messages) {
        let role;
        if (m._getType() === "human") {
            role = humanPrefix;
        }
        else if (m._getType() === "ai") {
            role = aiPrefix;
        }
        else if (m._getType() === "system") {
            role = "System";
        }
        else if (m._getType() === "function") {
            role = "Function";
        }
        else if (m._getType() === "tool") {
            role = "Tool";
        }
        else if (m._getType() === "generic") {
            role = m.role;
        }
        else {
            throw new Error(`Got unsupported message type: ${m._getType()}`);
        }
        const nameStr = m.name ? `${m.name}, ` : "";
        string_messages.push(`${role}: ${nameStr}${m.content}`);
    }
    return string_messages.join("\n");
}
/**
 * Maps messages from an older format (V1) to the current `StoredMessage`
 * format. If the message is already in the `StoredMessage` format, it is
 * returned as is. Otherwise, it transforms the V1 message into a
 * `StoredMessage`. This function is important for maintaining
 * compatibility with older message formats.
 */
function mapV1MessageToStoredMessage(message) {
    // TODO: Remove this mapper when we deprecate the old message format.
    if (message.data !== undefined) {
        return message;
    }
    else {
        const v1Message = message;
        return {
            type: v1Message.type,
            data: {
                content: v1Message.text,
                role: v1Message.role,
                name: undefined,
                tool_call_id: undefined,
            },
        };
    }
}
function mapStoredMessageToChatMessage(message) {
    const storedMessage = mapV1MessageToStoredMessage(message);
    switch (storedMessage.type) {
        case "human":
            return new HumanMessage(storedMessage.data);
        case "ai":
            return new AIMessage(storedMessage.data);
        case "system":
            return new SystemMessage(storedMessage.data);
        case "function":
            if (storedMessage.data.name === undefined) {
                throw new Error("Name must be defined for function messages");
            }
            return new FunctionMessage(storedMessage.data);
        case "tool":
            if (storedMessage.data.tool_call_id === undefined) {
                throw new Error("Tool call ID must be defined for tool messages");
            }
            return new ToolMessage(storedMessage.data);
        case "chat": {
            if (storedMessage.data.role === undefined) {
                throw new Error("Role must be defined for chat messages");
            }
            return new ChatMessage(storedMessage.data);
        }
        default:
            throw new Error(`Got unexpected type: ${storedMessage.type}`);
    }
}
/**
 * Transforms an array of `StoredMessage` instances into an array of
 * `BaseMessage` instances. It uses the `mapV1MessageToStoredMessage`
 * function to ensure all messages are in the `StoredMessage` format, then
 * creates new instances of the appropriate `BaseMessage` subclass based
 * on the type of each message. This function is used to prepare stored
 * messages for use in a chat context.
 */
function mapStoredMessagesToChatMessages(messages) {
    return messages.map(mapStoredMessageToChatMessage);
}
/**
 * Transforms an array of `BaseMessage` instances into an array of
 * `StoredMessage` instances. It does this by calling the `toDict` method
 * on each `BaseMessage`, which returns a `StoredMessage`. This function
 * is used to prepare chat messages for storage.
 */
function mapChatMessagesToStoredMessages(messages) {
    return messages.map((message) => message.toDict());
}


/***/ }),

/***/ 42526:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GU": () => (/* binding */ ChatPromptValue),
/* harmony export */   "Nn": () => (/* binding */ ImagePromptValue),
/* harmony export */   "nw": () => (/* binding */ StringPromptValue)
/* harmony export */ });
/* unused harmony export BasePromptValue */
/* harmony import */ var _load_serializable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86270);
/* harmony import */ var _messages_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20596);


/**
 * Base PromptValue class. All prompt values should extend this class.
 */
class BasePromptValue extends _load_serializable_js__WEBPACK_IMPORTED_MODULE_0__/* .Serializable */ .i {
}
/**
 * Represents a prompt value as a string. It extends the BasePromptValue
 * class and overrides the toString and toChatMessages methods.
 */
class StringPromptValue extends BasePromptValue {
    static lc_name() {
        return "StringPromptValue";
    }
    constructor(value) {
        super({ value });
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "prompt_values"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.value = value;
    }
    toString() {
        return this.value;
    }
    toChatMessages() {
        return [new _messages_index_js__WEBPACK_IMPORTED_MODULE_1__/* .HumanMessage */ .xk(this.value)];
    }
}
/**
 * Class that represents a chat prompt value. It extends the
 * BasePromptValue and includes an array of BaseMessage instances.
 */
class ChatPromptValue extends BasePromptValue {
    static lc_name() {
        return "ChatPromptValue";
    }
    constructor(fields) {
        if (Array.isArray(fields)) {
            // eslint-disable-next-line no-param-reassign
            fields = { messages: fields };
        }
        super(fields);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "prompt_values"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "messages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.messages = fields.messages;
    }
    toString() {
        return (0,_messages_index_js__WEBPACK_IMPORTED_MODULE_1__/* .getBufferString */ .zs)(this.messages);
    }
    toChatMessages() {
        return this.messages;
    }
}
/**
 * Class that represents an image prompt value. It extends the
 * BasePromptValue and includes an ImageURL instance.
 */
class ImagePromptValue extends BasePromptValue {
    static lc_name() {
        return "ImagePromptValue";
    }
    constructor(fields) {
        if (!("imageUrl" in fields)) {
            // eslint-disable-next-line no-param-reassign
            fields = { imageUrl: fields };
        }
        super(fields);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "prompt_values"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "imageUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** @ignore */
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.imageUrl = fields.imageUrl;
    }
    toString() {
        return this.imageUrl.url;
    }
    toChatMessages() {
        return [
            new _messages_index_js__WEBPACK_IMPORTED_MODULE_1__/* .HumanMessage */ .xk({
                content: [
                    {
                        type: "image_url",
                        image_url: {
                            detail: this.imageUrl.detail,
                            url: this.imageUrl.url,
                        },
                    },
                ],
            }),
        ];
    }
}


/***/ }),

/***/ 22042:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "eq": () => (/* binding */ Runnable)
});

// UNUSED EXPORTS: RunnableAssign, RunnableBinding, RunnableEach, RunnableLambda, RunnableMap, RunnableParallel, RunnablePick, RunnableRetry, RunnableSequence, RunnableWithFallbacks, _coerceToDict, _coerceToRunnable

// EXTERNAL MODULE: ./node_modules/p-retry/index.js
var p_retry = __webpack_require__(42570);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/callbacks/manager.js + 13 modules
var manager = __webpack_require__(34235);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/utils/fast-json-patch/index.js + 3 modules
var fast_json_patch = __webpack_require__(98919);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/tracers/base.js
var base = __webpack_require__(74492);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/utils/stream.js
var stream = __webpack_require__(16817);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/messages/index.js
var messages = __webpack_require__(20596);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/tracers/log_stream.js




/**
 * List of jsonpatch JSONPatchOperations, which describe how to create the run state
 * from an empty dict. This is the minimal representation of the log, designed to
 * be serialized as JSON and sent over the wire to reconstruct the log on the other
 * side. Reconstruction of the state can be done with any jsonpatch-compliant library,
 * see https://jsonpatch.com for more information.
 */
class RunLogPatch {
    constructor(fields) {
        Object.defineProperty(this, "ops", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.ops = fields.ops ?? [];
    }
    concat(other) {
        const ops = this.ops.concat(other.ops);
        const states = (0,fast_json_patch/* applyPatch */.af)({}, ops);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new RunLog({
            ops,
            state: states[states.length - 1].newDocument,
        });
    }
}
class RunLog extends RunLogPatch {
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.state = fields.state;
    }
    concat(other) {
        const ops = this.ops.concat(other.ops);
        const states = (0,fast_json_patch/* applyPatch */.af)(this.state, other.ops);
        return new RunLog({ ops, state: states[states.length - 1].newDocument });
    }
    static fromRunLogPatch(patch) {
        const states = (0,fast_json_patch/* applyPatch */.af)({}, patch.ops);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new RunLog({
            ops: patch.ops,
            state: states[states.length - 1].newDocument,
        });
    }
}
/**
 * Extract standardized inputs from a run.
 *
 * Standardizes the inputs based on the type of the runnable used.
 *
 * @param run - Run object
 * @param schemaFormat - The schema format to use.
 *
 * @returns Valid inputs are only dict. By conventions, inputs always represented
 * invocation using named arguments.
 * A null means that the input is not yet known!
 */
async function _getStandardizedInputs(run, schemaFormat) {
    if (schemaFormat === "original") {
        throw new Error("Do not assign inputs with original schema drop the key for now. " +
            "When inputs are added to streamLog they should be added with " +
            "standardized schema for streaming events.");
    }
    const { inputs } = run;
    if (["retriever", "llm", "prompt"].includes(run.run_type)) {
        return inputs;
    }
    if (Object.keys(inputs).length === 1 && inputs?.input === "") {
        return undefined;
    }
    // new style chains
    // These nest an additional 'input' key inside the 'inputs' to make sure
    // the input is always a dict. We need to unpack and user the inner value.
    // We should try to fix this in Runnables and callbacks/tracers
    // Runnables should be using a null type here not a placeholder
    // dict.
    return inputs.input;
}
async function _getStandardizedOutputs(run, schemaFormat) {
    const { outputs } = run;
    if (schemaFormat === "original") {
        // Return the old schema, without standardizing anything
        return outputs;
    }
    if (["retriever", "llm", "prompt"].includes(run.run_type)) {
        return outputs;
    }
    // TODO: Remove this hacky check
    if (outputs !== undefined &&
        Object.keys(outputs).length === 1 &&
        outputs?.output !== undefined) {
        return outputs.output;
    }
    return outputs;
}
function isChatGenerationChunk(x) {
    return x !== undefined && x.message !== undefined;
}
/**
 * Class that extends the `BaseTracer` class from the
 * `langchain.callbacks.tracers.base` module. It represents a callback
 * handler that logs the execution of runs and emits `RunLog` instances to a
 * `RunLogStream`.
 */
class LogStreamCallbackHandler extends base/* BaseTracer */.Z {
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "autoClose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "includeNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "includeTypes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "includeTags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "excludeNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "excludeTypes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "excludeTags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_schemaFormat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "original"
        });
        Object.defineProperty(this, "rootId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "keyMapByRunId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "counterMapByRunName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "transformStream", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "writer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "receiveStream", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "log_stream_tracer"
        });
        this.autoClose = fields?.autoClose ?? true;
        this.includeNames = fields?.includeNames;
        this.includeTypes = fields?.includeTypes;
        this.includeTags = fields?.includeTags;
        this.excludeNames = fields?.excludeNames;
        this.excludeTypes = fields?.excludeTypes;
        this.excludeTags = fields?.excludeTags;
        this._schemaFormat = fields?._schemaFormat ?? this._schemaFormat;
        this.transformStream = new TransformStream();
        this.writer = this.transformStream.writable.getWriter();
        this.receiveStream = stream/* IterableReadableStream.fromReadableStream */.QJ.fromReadableStream(this.transformStream.readable);
    }
    [Symbol.asyncIterator]() {
        return this.receiveStream;
    }
    async persistRun(_run) {
        // This is a legacy method only called once for an entire run tree
        // and is therefore not useful here
    }
    _includeRun(run) {
        if (run.id === this.rootId) {
            return false;
        }
        const runTags = run.tags ?? [];
        let include = this.includeNames === undefined &&
            this.includeTags === undefined &&
            this.includeTypes === undefined;
        if (this.includeNames !== undefined) {
            include = include || this.includeNames.includes(run.name);
        }
        if (this.includeTypes !== undefined) {
            include = include || this.includeTypes.includes(run.run_type);
        }
        if (this.includeTags !== undefined) {
            include =
                include ||
                    runTags.find((tag) => this.includeTags?.includes(tag)) !== undefined;
        }
        if (this.excludeNames !== undefined) {
            include = include && !this.excludeNames.includes(run.name);
        }
        if (this.excludeTypes !== undefined) {
            include = include && !this.excludeTypes.includes(run.run_type);
        }
        if (this.excludeTags !== undefined) {
            include =
                include && runTags.every((tag) => !this.excludeTags?.includes(tag));
        }
        return include;
    }
    async *tapOutputIterable(runId, output) {
        // Tap an output async iterator to stream its values to the log.
        for await (const chunk of output) {
            // root run is handled in .streamLog()
            if (runId !== this.rootId) {
                // if we can't find the run silently ignore
                // eg. because this run wasn't included in the log
                const key = this.keyMapByRunId[runId];
                if (key) {
                    await this.writer.write(new RunLogPatch({
                        ops: [
                            {
                                op: "add",
                                path: `/logs/${key}/streamed_output/-`,
                                value: chunk,
                            },
                        ],
                    }));
                }
            }
            yield chunk;
        }
    }
    async onRunCreate(run) {
        if (this.rootId === undefined) {
            this.rootId = run.id;
            await this.writer.write(new RunLogPatch({
                ops: [
                    {
                        op: "replace",
                        path: "",
                        value: {
                            id: run.id,
                            name: run.name,
                            type: run.run_type,
                            streamed_output: [],
                            final_output: undefined,
                            logs: {},
                        },
                    },
                ],
            }));
        }
        if (!this._includeRun(run)) {
            return;
        }
        if (this.counterMapByRunName[run.name] === undefined) {
            this.counterMapByRunName[run.name] = 0;
        }
        this.counterMapByRunName[run.name] += 1;
        const count = this.counterMapByRunName[run.name];
        this.keyMapByRunId[run.id] =
            count === 1 ? run.name : `${run.name}:${count}`;
        const logEntry = {
            id: run.id,
            name: run.name,
            type: run.run_type,
            tags: run.tags ?? [],
            metadata: run.extra?.metadata ?? {},
            start_time: new Date(run.start_time).toISOString(),
            streamed_output: [],
            streamed_output_str: [],
            final_output: undefined,
            end_time: undefined,
        };
        if (this._schemaFormat === "streaming_events") {
            logEntry.inputs = await _getStandardizedInputs(run, this._schemaFormat);
        }
        await this.writer.write(new RunLogPatch({
            ops: [
                {
                    op: "add",
                    path: `/logs/${this.keyMapByRunId[run.id]}`,
                    value: logEntry,
                },
            ],
        }));
    }
    async onRunUpdate(run) {
        try {
            const runName = this.keyMapByRunId[run.id];
            if (runName === undefined) {
                return;
            }
            const ops = [];
            if (this._schemaFormat === "streaming_events") {
                ops.push({
                    op: "replace",
                    path: `/logs/${runName}/inputs`,
                    value: await _getStandardizedInputs(run, this._schemaFormat),
                });
            }
            ops.push({
                op: "add",
                path: `/logs/${runName}/final_output`,
                value: await _getStandardizedOutputs(run, this._schemaFormat),
            });
            if (run.end_time !== undefined) {
                ops.push({
                    op: "add",
                    path: `/logs/${runName}/end_time`,
                    value: new Date(run.end_time).toISOString(),
                });
            }
            const patch = new RunLogPatch({ ops });
            await this.writer.write(patch);
        }
        finally {
            if (run.id === this.rootId) {
                const patch = new RunLogPatch({
                    ops: [
                        {
                            op: "replace",
                            path: "/final_output",
                            value: await _getStandardizedOutputs(run, this._schemaFormat),
                        },
                    ],
                });
                await this.writer.write(patch);
                if (this.autoClose) {
                    await this.writer.close();
                }
            }
        }
    }
    async onLLMNewToken(run, token, kwargs) {
        const runName = this.keyMapByRunId[run.id];
        if (runName === undefined) {
            return;
        }
        // TODO: Remove hack
        const isChatModel = run.inputs.messages !== undefined;
        let streamedOutputValue;
        if (isChatModel) {
            if (isChatGenerationChunk(kwargs?.chunk)) {
                streamedOutputValue = kwargs?.chunk;
            }
            else {
                streamedOutputValue = new messages/* AIMessageChunk */.GC(token);
            }
        }
        else {
            streamedOutputValue = token;
        }
        const patch = new RunLogPatch({
            ops: [
                {
                    op: "add",
                    path: `/logs/${runName}/streamed_output_str/-`,
                    value: token,
                },
                {
                    op: "add",
                    path: `/logs/${runName}/streamed_output/-`,
                    value: streamedOutputValue,
                },
            ],
        });
        await this.writer.write(patch);
    }
}

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/load/serializable.js + 1 modules
var serializable = __webpack_require__(86270);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/runnables/config.js
var runnables_config = __webpack_require__(96118);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/utils/async_caller.js
var async_caller = __webpack_require__(57072);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/tracers/root_listener.js

class RootListenersTracer extends base/* BaseTracer */.Z {
    constructor({ config, onStart, onEnd, onError, }) {
        super();
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "RootListenersTracer"
        });
        /** The Run's ID. Type UUID */
        Object.defineProperty(this, "rootId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "argOnStart", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "argOnEnd", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "argOnError", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.config = config;
        this.argOnStart = onStart;
        this.argOnEnd = onEnd;
        this.argOnError = onError;
    }
    /**
     * This is a legacy method only called once for an entire run tree
     * therefore not useful here
     * @param {Run} _ Not used
     */
    persistRun(_) {
        return Promise.resolve();
    }
    async onRunCreate(run) {
        if (this.rootId) {
            return;
        }
        this.rootId = run.id;
        if (this.argOnStart) {
            if (this.argOnStart.length === 1) {
                await this.argOnStart(run);
            }
            else if (this.argOnStart.length === 2) {
                await this.argOnStart(run, this.config);
            }
        }
    }
    async onRunUpdate(run) {
        if (run.id !== this.rootId) {
            return;
        }
        if (!run.error) {
            if (this.argOnEnd) {
                if (this.argOnEnd.length === 1) {
                    await this.argOnEnd(run);
                }
                else if (this.argOnEnd.length === 2) {
                    await this.argOnEnd(run, this.config);
                }
            }
        }
        else if (this.argOnError) {
            if (this.argOnError.length === 1) {
                await this.argOnError(run);
            }
            else if (this.argOnError.length === 2) {
                await this.argOnError(run, this.config);
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/runnables/utils.js
/**
 * Utility to filter the root event in the streamEvents implementation.
 * This is simply binding the arguments to the namespace to make save on
 * a bit of typing in the streamEvents implementation.
 *
 * TODO: Refactor and remove.
 */
class _RootEventFilter {
    constructor(fields) {
        Object.defineProperty(this, "includeNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "includeTypes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "includeTags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "excludeNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "excludeTypes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "excludeTags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.includeNames = fields.includeNames;
        this.includeTypes = fields.includeTypes;
        this.includeTags = fields.includeTags;
        this.excludeNames = fields.excludeNames;
        this.excludeTypes = fields.excludeTypes;
        this.excludeTags = fields.excludeTags;
    }
    includeEvent(event, rootType) {
        let include = this.includeNames === undefined &&
            this.includeTypes === undefined &&
            this.includeTags === undefined;
        const eventTags = event.tags ?? [];
        if (this.includeNames !== undefined) {
            include = include || this.includeNames.includes(event.name);
        }
        if (this.includeTypes !== undefined) {
            include = include || this.includeTypes.includes(rootType);
        }
        if (this.includeTags !== undefined) {
            include =
                include || eventTags.some((tag) => this.includeTags?.includes(tag));
        }
        if (this.excludeNames !== undefined) {
            include = include && !this.excludeNames.includes(event.name);
        }
        if (this.excludeTypes !== undefined) {
            include = include && !this.excludeTypes.includes(rootType);
        }
        if (this.excludeTags !== undefined) {
            include =
                include && eventTags.every((tag) => !this.excludeTags?.includes(tag));
        }
        return include;
    }
}

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/singletons/index.js
var singletons = __webpack_require__(76626);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/runnables/base.js










// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _coerceToDict(value, defaultKey) {
    return value &&
        !Array.isArray(value) &&
        // eslint-disable-next-line no-instanceof/no-instanceof
        !(value instanceof Date) &&
        typeof value === "object"
        ? value
        : { [defaultKey]: value };
}
/**
 * A Runnable is a generic unit of work that can be invoked, batched, streamed, and/or
 * transformed.
 */
class Runnable extends serializable/* Serializable */.i {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "lc_runnable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    getName(suffix) {
        const name = 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.name ?? this.constructor.lc_name() ?? this.constructor.name;
        return suffix ? `${name}${suffix}` : name;
    }
    /**
     * Bind arguments to a Runnable, returning a new Runnable.
     * @param kwargs
     * @returns A new RunnableBinding that, when invoked, will apply the bound args.
     */
    bind(kwargs) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new RunnableBinding({ bound: this, kwargs, config: {} });
    }
    /**
     * Return a new Runnable that maps a list of inputs to a list of outputs,
     * by calling invoke() with each input.
     */
    map() {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new RunnableEach({ bound: this });
    }
    /**
     * Add retry logic to an existing runnable.
     * @param kwargs
     * @returns A new RunnableRetry that, when invoked, will retry according to the parameters.
     */
    withRetry(fields) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new RunnableRetry({
            bound: this,
            kwargs: {},
            config: {},
            maxAttemptNumber: fields?.stopAfterAttempt,
            ...fields,
        });
    }
    /**
     * Bind config to a Runnable, returning a new Runnable.
     * @param config New configuration parameters to attach to the new runnable.
     * @returns A new RunnableBinding with a config matching what's passed.
     */
    withConfig(config) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new RunnableBinding({
            bound: this,
            config,
            kwargs: {},
        });
    }
    /**
     * Create a new runnable from the current one that will try invoking
     * other passed fallback runnables if the initial invocation fails.
     * @param fields.fallbacks Other runnables to call if the runnable errors.
     * @returns A new RunnableWithFallbacks.
     */
    withFallbacks(fields) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new RunnableWithFallbacks({
            runnable: this,
            fallbacks: fields.fallbacks,
        });
    }
    _getOptionsList(options, length = 0) {
        if (Array.isArray(options)) {
            if (options.length !== length) {
                throw new Error(`Passed "options" must be an array with the same length as the inputs, but got ${options.length} options for ${length} inputs`);
            }
            return options.map(runnables_config/* ensureConfig */.LE);
        }
        return Array.from({ length }, () => (0,runnables_config/* ensureConfig */.LE)(options));
    }
    async batch(inputs, options, batchOptions) {
        const configList = this._getOptionsList(options ?? {}, inputs.length);
        const maxConcurrency = configList[0]?.maxConcurrency ?? batchOptions?.maxConcurrency;
        const caller = new async_caller/* AsyncCaller */.L({
            maxConcurrency,
            onFailedAttempt: (e) => {
                throw e;
            },
        });
        const batchCalls = inputs.map((input, i) => caller.call(async () => {
            try {
                const result = await this.invoke(input, configList[i]);
                return result;
            }
            catch (e) {
                if (batchOptions?.returnExceptions) {
                    return e;
                }
                throw e;
            }
        }));
        return Promise.all(batchCalls);
    }
    /**
     * Default streaming implementation.
     * Subclasses should override this method if they support streaming output.
     * @param input
     * @param options
     */
    async *_streamIterator(input, options) {
        yield this.invoke(input, options);
    }
    /**
     * Stream output in chunks.
     * @param input
     * @param options
     * @returns A readable stream that is also an iterable.
     */
    async stream(input, options) {
        // Buffer the first streamed chunk to allow for initial errors
        // to surface immediately.
        const wrappedGenerator = new stream/* AsyncGeneratorWithSetup */.qq(this._streamIterator(input, (0,runnables_config/* ensureConfig */.LE)(options)));
        await wrappedGenerator.setup;
        return stream/* IterableReadableStream.fromAsyncGenerator */.QJ.fromAsyncGenerator(wrappedGenerator);
    }
    _separateRunnableConfigFromCallOptions(options = {}) {
        const runnableConfig = (0,runnables_config/* ensureConfig */.LE)({
            callbacks: options.callbacks,
            tags: options.tags,
            metadata: options.metadata,
            runName: options.runName,
            configurable: options.configurable,
            recursionLimit: options.recursionLimit,
            maxConcurrency: options.maxConcurrency,
        });
        const callOptions = { ...options };
        delete callOptions.callbacks;
        delete callOptions.tags;
        delete callOptions.metadata;
        delete callOptions.runName;
        delete callOptions.configurable;
        delete callOptions.recursionLimit;
        delete callOptions.maxConcurrency;
        return [runnableConfig, callOptions];
    }
    async _callWithConfig(func, input, options) {
        const config = (0,runnables_config/* ensureConfig */.LE)(options);
        const callbackManager_ = await (0,runnables_config/* getCallbackManagerForConfig */.Le)(config);
        const runManager = await callbackManager_?.handleChainStart(this.toJSON(), _coerceToDict(input, "input"), undefined, config?.runType, undefined, undefined, config?.runName ?? this.getName());
        let output;
        try {
            output = await func.call(this, input, config, runManager);
        }
        catch (e) {
            await runManager?.handleChainError(e);
            throw e;
        }
        await runManager?.handleChainEnd(_coerceToDict(output, "output"));
        return output;
    }
    /**
     * Internal method that handles batching and configuration for a runnable
     * It takes a function, input values, and optional configuration, and
     * returns a promise that resolves to the output values.
     * @param func The function to be executed for each input value.
     * @param input The input values to be processed.
     * @param config Optional configuration for the function execution.
     * @returns A promise that resolves to the output values.
     */
    async _batchWithConfig(func, inputs, options, batchOptions) {
        const optionsList = this._getOptionsList(options ?? {}, inputs.length);
        const callbackManagers = await Promise.all(optionsList.map(runnables_config/* getCallbackManagerForConfig */.Le));
        const runManagers = await Promise.all(callbackManagers.map((callbackManager, i) => callbackManager?.handleChainStart(this.toJSON(), _coerceToDict(inputs[i], "input"), undefined, optionsList[i].runType, undefined, undefined, optionsList[i].runName ?? this.getName())));
        let outputs;
        try {
            outputs = await func.call(this, inputs, optionsList, runManagers, batchOptions);
        }
        catch (e) {
            await Promise.all(runManagers.map((runManager) => runManager?.handleChainError(e)));
            throw e;
        }
        await Promise.all(runManagers.map((runManager) => runManager?.handleChainEnd(_coerceToDict(outputs, "output"))));
        return outputs;
    }
    /**
     * Helper method to transform an Iterator of Input values into an Iterator of
     * Output values, with callbacks.
     * Use this to implement `stream()` or `transform()` in Runnable subclasses.
     */
    async *_transformStreamWithConfig(inputGenerator, transformer, options) {
        let finalInput;
        let finalInputSupported = true;
        let finalOutput;
        let finalOutputSupported = true;
        const config = (0,runnables_config/* ensureConfig */.LE)(options);
        const callbackManager_ = await (0,runnables_config/* getCallbackManagerForConfig */.Le)(config);
        async function* wrapInputForTracing() {
            for await (const chunk of inputGenerator) {
                if (finalInputSupported) {
                    if (finalInput === undefined) {
                        finalInput = chunk;
                    }
                    else {
                        try {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            finalInput = (0,stream/* concat */.zo)(finalInput, chunk);
                        }
                        catch {
                            finalInput = undefined;
                            finalInputSupported = false;
                        }
                    }
                }
                yield chunk;
            }
        }
        let runManager;
        try {
            const pipe = await (0,stream/* pipeGeneratorWithSetup */.E7)(transformer.bind(this), wrapInputForTracing(), async () => callbackManager_?.handleChainStart(this.toJSON(), { input: "" }, undefined, config?.runType, undefined, undefined, config?.runName ?? this.getName()), config);
            runManager = pipe.setup;
            const isLogStreamHandler = (handler) => handler.name === "log_stream_tracer";
            const streamLogHandler = runManager?.handlers.find(isLogStreamHandler);
            let iterator = pipe.output;
            if (streamLogHandler !== undefined && runManager !== undefined) {
                iterator = await streamLogHandler.tapOutputIterable(runManager.runId, pipe.output);
            }
            for await (const chunk of iterator) {
                yield chunk;
                if (finalOutputSupported) {
                    if (finalOutput === undefined) {
                        finalOutput = chunk;
                    }
                    else {
                        try {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            finalOutput = (0,stream/* concat */.zo)(finalOutput, chunk);
                        }
                        catch {
                            finalOutput = undefined;
                            finalOutputSupported = false;
                        }
                    }
                }
            }
        }
        catch (e) {
            await runManager?.handleChainError(e, undefined, undefined, undefined, {
                inputs: _coerceToDict(finalInput, "input"),
            });
            throw e;
        }
        await runManager?.handleChainEnd(finalOutput ?? {}, undefined, undefined, undefined, { inputs: _coerceToDict(finalInput, "input") });
    }
    /**
     * Create a new runnable sequence that runs each individual runnable in series,
     * piping the output of one runnable into another runnable or runnable-like.
     * @param coerceable A runnable, function, or object whose values are functions or runnables.
     * @returns A new runnable sequence.
     */
    pipe(coerceable) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new RunnableSequence({
            first: this,
            last: _coerceToRunnable(coerceable),
        });
    }
    /**
     * Pick keys from the dict output of this runnable. Returns a new runnable.
     */
    pick(keys) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return this.pipe(new RunnablePick(keys));
    }
    /**
     * Assigns new fields to the dict output of this runnable. Returns a new runnable.
     */
    assign(mapping) {
        return this.pipe(
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        new RunnableAssign(
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        new RunnableMap({ steps: mapping })));
    }
    /**
     * Default implementation of transform, which buffers input and then calls stream.
     * Subclasses should override this method if they can start producing output while
     * input is still being generated.
     * @param generator
     * @param options
     */
    async *transform(generator, options) {
        let finalChunk;
        for await (const chunk of generator) {
            if (finalChunk === undefined) {
                finalChunk = chunk;
            }
            else {
                // Make a best effort to gather, for any type that supports concat.
                // This method should throw an error if gathering fails.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                finalChunk = (0,stream/* concat */.zo)(finalChunk, chunk);
            }
        }
        yield* this._streamIterator(finalChunk, (0,runnables_config/* ensureConfig */.LE)(options));
    }
    /**
     * Stream all output from a runnable, as reported to the callback system.
     * This includes all inner runs of LLMs, Retrievers, Tools, etc.
     * Output is streamed as Log objects, which include a list of
     * jsonpatch ops that describe how the state of the run has changed in each
     * step, and the final state of the run.
     * The jsonpatch ops can be applied in order to construct state.
     * @param input
     * @param options
     * @param streamOptions
     */
    async *streamLog(input, options, streamOptions) {
        const logStreamCallbackHandler = new LogStreamCallbackHandler({
            ...streamOptions,
            autoClose: false,
            _schemaFormat: "original",
        });
        const config = (0,runnables_config/* ensureConfig */.LE)(options);
        yield* this._streamLog(input, logStreamCallbackHandler, config);
    }
    async *_streamLog(input, logStreamCallbackHandler, config) {
        const { callbacks } = config;
        if (callbacks === undefined) {
            // eslint-disable-next-line no-param-reassign
            config.callbacks = [logStreamCallbackHandler];
        }
        else if (Array.isArray(callbacks)) {
            // eslint-disable-next-line no-param-reassign
            config.callbacks = callbacks.concat([logStreamCallbackHandler]);
        }
        else {
            const copiedCallbacks = callbacks.copy();
            copiedCallbacks.inheritableHandlers.push(logStreamCallbackHandler);
            // eslint-disable-next-line no-param-reassign
            config.callbacks = copiedCallbacks;
        }
        const runnableStreamPromise = this.stream(input, config);
        async function consumeRunnableStream() {
            try {
                const runnableStream = await runnableStreamPromise;
                for await (const chunk of runnableStream) {
                    const patch = new RunLogPatch({
                        ops: [
                            {
                                op: "add",
                                path: "/streamed_output/-",
                                value: chunk,
                            },
                        ],
                    });
                    await logStreamCallbackHandler.writer.write(patch);
                }
            }
            finally {
                await logStreamCallbackHandler.writer.close();
            }
        }
        const runnableStreamConsumePromise = consumeRunnableStream();
        try {
            for await (const log of logStreamCallbackHandler) {
                yield log;
            }
        }
        finally {
            await runnableStreamConsumePromise;
        }
    }
    /**
     * Generate a stream of events emitted by the internal steps of the runnable.
     *
     * Use to create an iterator over StreamEvents that provide real-time information
     * about the progress of the runnable, including StreamEvents from intermediate
     * results.
     *
     * A StreamEvent is a dictionary with the following schema:
     *
     * - `event`: string - Event names are of the format: on_[runnable_type]_(start|stream|end).
     * - `name`: string - The name of the runnable that generated the event.
     * - `run_id`: string - Randomly generated ID associated with the given execution of
     *   the runnable that emitted the event. A child runnable that gets invoked as part of the execution of a
     *   parent runnable is assigned its own unique ID.
     * - `tags`: string[] - The tags of the runnable that generated the event.
     * - `metadata`: Record<string, any> - The metadata of the runnable that generated the event.
     * - `data`: Record<string, any>
     *
     * Below is a table that illustrates some events that might be emitted by various
     * chains. Metadata fields have been omitted from the table for brevity.
     * Chain definitions have been included after the table.
     *
     * | event                | name             | chunk                              | input                                         | output                                          |
     * |----------------------|------------------|------------------------------------|-----------------------------------------------|-------------------------------------------------|
     * | on_llm_start         | [model name]     |                                    | {'input': 'hello'}                            |                                                 |
     * | on_llm_stream        | [model name]     | 'Hello' OR AIMessageChunk("hello") |                                               |                                                 |
     * | on_llm_end           | [model name]     |                                    | 'Hello human!'                                |
     * | on_chain_start       | format_docs      |                                    |                                               |                                                 |
     * | on_chain_stream      | format_docs      | "hello world!, goodbye world!"     |                                               |                                                 |
     * | on_chain_end         | format_docs      |                                    | [Document(...)]                               | "hello world!, goodbye world!"                  |
     * | on_tool_start        | some_tool        |                                    | {"x": 1, "y": "2"}                            |                                                 |
     * | on_tool_stream       | some_tool        |   {"x": 1, "y": "2"}               |                                               |                                                 |
     * | on_tool_end          | some_tool        |                                    |                                               | {"x": 1, "y": "2"}                              |
     * | on_retriever_start   | [retriever name] |                                    | {"query": "hello"}                            |                                                 |
     * | on_retriever_chunk   | [retriever name] |  {documents: [...]}                |                                               |                                                 |
     * | on_retriever_end     | [retriever name] |                                    | {"query": "hello"}                            | {documents: [...]}                              |
     * | on_prompt_start      | [template_name]  |                                    | {"question": "hello"}                         |                                                 |
     * | on_prompt_end        | [template_name]  |                                    | {"question": "hello"}                         | ChatPromptValue(messages: [SystemMessage, ...]) |
     */
    async *streamEvents(input, options, streamOptions) {
        if (options.version !== "v1") {
            throw new Error(`Only version "v1" of the events schema is currently supported.`);
        }
        let runLog;
        let hasEncounteredStartEvent = false;
        const config = (0,runnables_config/* ensureConfig */.LE)(options);
        const rootTags = config.tags ?? [];
        const rootMetadata = config.metadata ?? {};
        const rootName = config.runName ?? this.getName();
        const logStreamCallbackHandler = new LogStreamCallbackHandler({
            ...streamOptions,
            autoClose: false,
            _schemaFormat: "streaming_events",
        });
        const rootEventFilter = new _RootEventFilter({
            ...streamOptions,
        });
        const logStream = this._streamLog(input, logStreamCallbackHandler, config);
        for await (const log of logStream) {
            if (!runLog) {
                runLog = RunLog.fromRunLogPatch(log);
            }
            else {
                runLog = runLog.concat(log);
            }
            if (runLog.state === undefined) {
                throw new Error(`Internal error: "streamEvents" state is missing. Please open a bug report.`);
            }
            // Yield the start event for the root runnable if it hasn't been seen.
            // The root run is never filtered out
            if (!hasEncounteredStartEvent) {
                hasEncounteredStartEvent = true;
                const state = { ...runLog.state };
                const event = {
                    run_id: state.id,
                    event: `on_${state.type}_start`,
                    name: rootName,
                    tags: rootTags,
                    metadata: rootMetadata,
                    data: {
                        input,
                    },
                };
                if (rootEventFilter.includeEvent(event, state.type)) {
                    yield event;
                }
            }
            const paths = log.ops
                .filter((op) => op.path.startsWith("/logs/"))
                .map((op) => op.path.split("/")[2]);
            const dedupedPaths = [...new Set(paths)];
            for (const path of dedupedPaths) {
                let eventType;
                let data = {};
                const logEntry = runLog.state.logs[path];
                if (logEntry.end_time === undefined) {
                    if (logEntry.streamed_output.length > 0) {
                        eventType = "stream";
                    }
                    else {
                        eventType = "start";
                    }
                }
                else {
                    eventType = "end";
                }
                if (eventType === "start") {
                    // Include the inputs with the start event if they are available.
                    // Usually they will NOT be available for components that operate
                    // on streams, since those components stream the input and
                    // don't know its final value until the end of the stream.
                    if (logEntry.inputs !== undefined) {
                        data.input = logEntry.inputs;
                    }
                }
                else if (eventType === "end") {
                    if (logEntry.inputs !== undefined) {
                        data.input = logEntry.inputs;
                    }
                    data.output = logEntry.final_output;
                }
                else if (eventType === "stream") {
                    const chunkCount = logEntry.streamed_output.length;
                    if (chunkCount !== 1) {
                        throw new Error(`Expected exactly one chunk of streamed output, got ${chunkCount} instead. Encountered in: "${logEntry.name}"`);
                    }
                    data = { chunk: logEntry.streamed_output[0] };
                    // Clean up the stream, we don't need it anymore.
                    // And this avoids duplicates as well!
                    logEntry.streamed_output = [];
                }
                yield {
                    event: `on_${logEntry.type}_${eventType}`,
                    name: logEntry.name,
                    run_id: logEntry.id,
                    tags: logEntry.tags,
                    metadata: logEntry.metadata,
                    data,
                };
            }
            // Finally, we take care of the streaming output from the root chain
            // if there is any.
            const { state } = runLog;
            if (state.streamed_output.length > 0) {
                const chunkCount = state.streamed_output.length;
                if (chunkCount !== 1) {
                    throw new Error(`Expected exactly one chunk of streamed output, got ${chunkCount} instead. Encountered in: "${state.name}"`);
                }
                const data = { chunk: state.streamed_output[0] };
                // Clean up the stream, we don't need it anymore.
                state.streamed_output = [];
                const event = {
                    event: `on_${state.type}_stream`,
                    run_id: state.id,
                    tags: rootTags,
                    metadata: rootMetadata,
                    name: rootName,
                    data,
                };
                if (rootEventFilter.includeEvent(event, state.type)) {
                    yield event;
                }
            }
        }
        const state = runLog?.state;
        if (state !== undefined) {
            // Finally, yield the end event for the root runnable.
            const event = {
                event: `on_${state.type}_end`,
                name: rootName,
                run_id: state.id,
                tags: rootTags,
                metadata: rootMetadata,
                data: {
                    output: state.final_output,
                },
            };
            if (rootEventFilter.includeEvent(event, state.type))
                yield event;
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isRunnable(thing) {
        return thing ? thing.lc_runnable : false;
    }
    /**
     * Bind lifecycle listeners to a Runnable, returning a new Runnable.
     * The Run object contains information about the run, including its id,
     * type, input, output, error, startTime, endTime, and any tags or metadata
     * added to the run.
     *
     * @param {Object} params - The object containing the callback functions.
     * @param {(run: Run) => void} params.onStart - Called before the runnable starts running, with the Run object.
     * @param {(run: Run) => void} params.onEnd - Called after the runnable finishes running, with the Run object.
     * @param {(run: Run) => void} params.onError - Called if the runnable throws an error, with the Run object.
     */
    withListeners({ onStart, onEnd, onError, }) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new RunnableBinding({
            bound: this,
            config: {},
            configFactories: [
                (config) => ({
                    callbacks: [
                        new RootListenersTracer({
                            config,
                            onStart,
                            onEnd,
                            onError,
                        }),
                    ],
                }),
            ],
        });
    }
}
/**
 * A runnable that delegates calls to another runnable with a set of kwargs.
 */
class RunnableBinding extends Runnable {
    static lc_name() {
        return "RunnableBinding";
    }
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "runnables"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "bound", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "kwargs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "configFactories", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bound = fields.bound;
        this.kwargs = fields.kwargs;
        this.config = fields.config;
        this.configFactories = fields.configFactories;
    }
    getName(suffix) {
        return this.bound.getName(suffix);
    }
    async _mergeConfig(...options) {
        const config = (0,runnables_config/* mergeConfigs */.t8)(this.config, ...options);
        return (0,runnables_config/* mergeConfigs */.t8)(config, ...(this.configFactories
            ? await Promise.all(this.configFactories.map(async (configFactory) => await configFactory(config)))
            : []));
    }
    bind(kwargs) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new this.constructor({
            bound: this.bound,
            kwargs: { ...this.kwargs, ...kwargs },
            config: this.config,
        });
    }
    withConfig(config) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new this.constructor({
            bound: this.bound,
            kwargs: this.kwargs,
            config: { ...this.config, ...config },
        });
    }
    withRetry(fields) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new this.constructor({
            bound: this.bound.withRetry(fields),
            kwargs: this.kwargs,
            config: this.config,
        });
    }
    async invoke(input, options) {
        return this.bound.invoke(input, await this._mergeConfig(options, this.kwargs));
    }
    async batch(inputs, options, batchOptions) {
        const mergedOptions = Array.isArray(options)
            ? await Promise.all(options.map(async (individualOption) => this._mergeConfig(individualOption, this.kwargs)))
            : await this._mergeConfig(options, this.kwargs);
        return this.bound.batch(inputs, mergedOptions, batchOptions);
    }
    async *_streamIterator(input, options) {
        yield* this.bound._streamIterator(input, await this._mergeConfig(options, this.kwargs));
    }
    async stream(input, options) {
        return this.bound.stream(input, await this._mergeConfig(options, this.kwargs));
    }
    async *transform(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    generator, options) {
        yield* this.bound.transform(generator, await this._mergeConfig(options, this.kwargs));
    }
    async *streamEvents(input, options, streamOptions) {
        yield* this.bound.streamEvents(input, {
            ...(await this._mergeConfig(options, this.kwargs)),
            version: options.version,
        }, streamOptions);
    }
    static isRunnableBinding(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    thing
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) {
        return thing.bound && Runnable.isRunnable(thing.bound);
    }
    /**
     * Bind lifecycle listeners to a Runnable, returning a new Runnable.
     * The Run object contains information about the run, including its id,
     * type, input, output, error, startTime, endTime, and any tags or metadata
     * added to the run.
     *
     * @param {Object} params - The object containing the callback functions.
     * @param {(run: Run) => void} params.onStart - Called before the runnable starts running, with the Run object.
     * @param {(run: Run) => void} params.onEnd - Called after the runnable finishes running, with the Run object.
     * @param {(run: Run) => void} params.onError - Called if the runnable throws an error, with the Run object.
     */
    withListeners({ onStart, onEnd, onError, }) {
        return new RunnableBinding({
            bound: this.bound,
            kwargs: this.kwargs,
            config: this.config,
            configFactories: [
                (config) => ({
                    callbacks: [
                        new RootListenersTracer({
                            config,
                            onStart,
                            onEnd,
                            onError,
                        }),
                    ],
                }),
            ],
        });
    }
}
/**
 * A runnable that delegates calls to another runnable
 * with each element of the input sequence.
 */
class RunnableEach extends Runnable {
    static lc_name() {
        return "RunnableEach";
    }
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "runnables"]
        });
        Object.defineProperty(this, "bound", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bound = fields.bound;
    }
    /**
     * Binds the runnable with the specified arguments.
     * @param kwargs The arguments to bind the runnable with.
     * @returns A new instance of the `RunnableEach` class that is bound with the specified arguments.
     */
    bind(kwargs) {
        return new RunnableEach({
            bound: this.bound.bind(kwargs),
        });
    }
    /**
     * Invokes the runnable with the specified input and configuration.
     * @param input The input to invoke the runnable with.
     * @param config The configuration to invoke the runnable with.
     * @returns A promise that resolves to the output of the runnable.
     */
    async invoke(inputs, config) {
        return this._callWithConfig(this._invoke, inputs, config);
    }
    /**
     * A helper method that is used to invoke the runnable with the specified input and configuration.
     * @param input The input to invoke the runnable with.
     * @param config The configuration to invoke the runnable with.
     * @returns A promise that resolves to the output of the runnable.
     */
    async _invoke(inputs, config, runManager) {
        return this.bound.batch(inputs, (0,runnables_config/* patchConfig */.q)(config, { callbacks: runManager?.getChild() }));
    }
    /**
     * Bind lifecycle listeners to a Runnable, returning a new Runnable.
     * The Run object contains information about the run, including its id,
     * type, input, output, error, startTime, endTime, and any tags or metadata
     * added to the run.
     *
     * @param {Object} params - The object containing the callback functions.
     * @param {(run: Run) => void} params.onStart - Called before the runnable starts running, with the Run object.
     * @param {(run: Run) => void} params.onEnd - Called after the runnable finishes running, with the Run object.
     * @param {(run: Run) => void} params.onError - Called if the runnable throws an error, with the Run object.
     */
    withListeners({ onStart, onEnd, onError, }) {
        return new RunnableEach({
            bound: this.bound.withListeners({ onStart, onEnd, onError }),
        });
    }
}
/**
 * Base class for runnables that can be retried a
 * specified number of times.
 */
class RunnableRetry extends RunnableBinding {
    static lc_name() {
        return "RunnableRetry";
    }
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "runnables"]
        });
        Object.defineProperty(this, "maxAttemptNumber", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 3
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "onFailedAttempt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => { }
        });
        this.maxAttemptNumber = fields.maxAttemptNumber ?? this.maxAttemptNumber;
        this.onFailedAttempt = fields.onFailedAttempt ?? this.onFailedAttempt;
    }
    _patchConfigForRetry(attempt, config, runManager) {
        const tag = attempt > 1 ? `retry:attempt:${attempt}` : undefined;
        return (0,runnables_config/* patchConfig */.q)(config, { callbacks: runManager?.getChild(tag) });
    }
    async _invoke(input, config, runManager) {
        return p_retry((attemptNumber) => super.invoke(input, this._patchConfigForRetry(attemptNumber, config, runManager)), {
            onFailedAttempt: this.onFailedAttempt,
            retries: Math.max(this.maxAttemptNumber - 1, 0),
            randomize: true,
        });
    }
    /**
     * Method that invokes the runnable with the specified input, run manager,
     * and config. It handles the retry logic by catching any errors and
     * recursively invoking itself with the updated config for the next retry
     * attempt.
     * @param input The input for the runnable.
     * @param runManager The run manager for the runnable.
     * @param config The config for the runnable.
     * @returns A promise that resolves to the output of the runnable.
     */
    async invoke(input, config) {
        return this._callWithConfig(this._invoke, input, config);
    }
    async _batch(inputs, configs, runManagers, batchOptions) {
        const resultsMap = {};
        try {
            await p_retry(async (attemptNumber) => {
                const remainingIndexes = inputs
                    .map((_, i) => i)
                    .filter((i) => resultsMap[i.toString()] === undefined ||
                    // eslint-disable-next-line no-instanceof/no-instanceof
                    resultsMap[i.toString()] instanceof Error);
                const remainingInputs = remainingIndexes.map((i) => inputs[i]);
                const patchedConfigs = remainingIndexes.map((i) => this._patchConfigForRetry(attemptNumber, configs?.[i], runManagers?.[i]));
                const results = await super.batch(remainingInputs, patchedConfigs, {
                    ...batchOptions,
                    returnExceptions: true,
                });
                let firstException;
                for (let i = 0; i < results.length; i += 1) {
                    const result = results[i];
                    const resultMapIndex = remainingIndexes[i];
                    // eslint-disable-next-line no-instanceof/no-instanceof
                    if (result instanceof Error) {
                        if (firstException === undefined) {
                            firstException = result;
                        }
                    }
                    resultsMap[resultMapIndex.toString()] = result;
                }
                if (firstException) {
                    throw firstException;
                }
                return results;
            }, {
                onFailedAttempt: this.onFailedAttempt,
                retries: Math.max(this.maxAttemptNumber - 1, 0),
                randomize: true,
            });
        }
        catch (e) {
            if (batchOptions?.returnExceptions !== true) {
                throw e;
            }
        }
        return Object.keys(resultsMap)
            .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
            .map((key) => resultsMap[parseInt(key, 10)]);
    }
    async batch(inputs, options, batchOptions) {
        return this._batchWithConfig(this._batch.bind(this), inputs, options, batchOptions);
    }
}
/**
 * A sequence of runnables, where the output of each is the input of the next.
 * @example
 * ```typescript
 * const promptTemplate = PromptTemplate.fromTemplate(
 *   "Tell me a joke about {topic}",
 * );
 * const chain = RunnableSequence.from([promptTemplate, new ChatOpenAI({})]);
 * const result = await chain.invoke({ topic: "bears" });
 * ```
 */
class RunnableSequence extends Runnable {
    static lc_name() {
        return "RunnableSequence";
    }
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "first", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "middle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "last", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "runnables"]
        });
        this.first = fields.first;
        this.middle = fields.middle ?? this.middle;
        this.last = fields.last;
        this.name = fields.name;
    }
    get steps() {
        return [this.first, ...this.middle, this.last];
    }
    async invoke(input, options) {
        const config = (0,runnables_config/* ensureConfig */.LE)(options);
        const callbackManager_ = await (0,runnables_config/* getCallbackManagerForConfig */.Le)(config);
        const runManager = await callbackManager_?.handleChainStart(this.toJSON(), _coerceToDict(input, "input"), undefined, undefined, undefined, undefined, config?.runName);
        let nextStepInput = input;
        let finalOutput;
        try {
            const initialSteps = [this.first, ...this.middle];
            for (let i = 0; i < initialSteps.length; i += 1) {
                const step = initialSteps[i];
                nextStepInput = await step.invoke(nextStepInput, (0,runnables_config/* patchConfig */.q)(config, {
                    callbacks: runManager?.getChild(`seq:step:${i + 1}`),
                }));
            }
            // TypeScript can't detect that the last output of the sequence returns RunOutput, so call it out of the loop here
            finalOutput = await this.last.invoke(nextStepInput, (0,runnables_config/* patchConfig */.q)(config, {
                callbacks: runManager?.getChild(`seq:step:${this.steps.length}`),
            }));
        }
        catch (e) {
            await runManager?.handleChainError(e);
            throw e;
        }
        await runManager?.handleChainEnd(_coerceToDict(finalOutput, "output"));
        return finalOutput;
    }
    async batch(inputs, options, batchOptions) {
        const configList = this._getOptionsList(options ?? {}, inputs.length);
        const callbackManagers = await Promise.all(configList.map(runnables_config/* getCallbackManagerForConfig */.Le));
        const runManagers = await Promise.all(callbackManagers.map((callbackManager, i) => callbackManager?.handleChainStart(this.toJSON(), _coerceToDict(inputs[i], "input"), undefined, undefined, undefined, undefined, configList[i].runName)));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let nextStepInputs = inputs;
        try {
            for (let i = 0; i < this.steps.length; i += 1) {
                const step = this.steps[i];
                nextStepInputs = await step.batch(nextStepInputs, runManagers.map((runManager, j) => {
                    const childRunManager = runManager?.getChild(`seq:step:${i + 1}`);
                    return (0,runnables_config/* patchConfig */.q)(configList[j], { callbacks: childRunManager });
                }), batchOptions);
            }
        }
        catch (e) {
            await Promise.all(runManagers.map((runManager) => runManager?.handleChainError(e)));
            throw e;
        }
        await Promise.all(runManagers.map((runManager) => runManager?.handleChainEnd(_coerceToDict(nextStepInputs, "output"))));
        return nextStepInputs;
    }
    async *_streamIterator(input, options) {
        const callbackManager_ = await (0,runnables_config/* getCallbackManagerForConfig */.Le)(options);
        const runManager = await callbackManager_?.handleChainStart(this.toJSON(), _coerceToDict(input, "input"), undefined, undefined, undefined, undefined, options?.runName);
        const steps = [this.first, ...this.middle, this.last];
        let concatSupported = true;
        let finalOutput;
        async function* inputGenerator() {
            yield input;
        }
        try {
            let finalGenerator = steps[0].transform(inputGenerator(), (0,runnables_config/* patchConfig */.q)(options, {
                callbacks: runManager?.getChild(`seq:step:1`),
            }));
            for (let i = 1; i < steps.length; i += 1) {
                const step = steps[i];
                finalGenerator = await step.transform(finalGenerator, (0,runnables_config/* patchConfig */.q)(options, {
                    callbacks: runManager?.getChild(`seq:step:${i + 1}`),
                }));
            }
            for await (const chunk of finalGenerator) {
                yield chunk;
                if (concatSupported) {
                    if (finalOutput === undefined) {
                        finalOutput = chunk;
                    }
                    else {
                        try {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            finalOutput = (0,stream/* concat */.zo)(finalOutput, chunk);
                        }
                        catch (e) {
                            finalOutput = undefined;
                            concatSupported = false;
                        }
                    }
                }
            }
        }
        catch (e) {
            await runManager?.handleChainError(e);
            throw e;
        }
        await runManager?.handleChainEnd(_coerceToDict(finalOutput, "output"));
    }
    pipe(coerceable) {
        if (RunnableSequence.isRunnableSequence(coerceable)) {
            return new RunnableSequence({
                first: this.first,
                middle: this.middle.concat([
                    this.last,
                    coerceable.first,
                    ...coerceable.middle,
                ]),
                last: coerceable.last,
                name: this.name ?? coerceable.name,
            });
        }
        else {
            return new RunnableSequence({
                first: this.first,
                middle: [...this.middle, this.last],
                last: _coerceToRunnable(coerceable),
                name: this.name,
            });
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isRunnableSequence(thing) {
        return Array.isArray(thing.middle) && Runnable.isRunnable(thing);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static from([first, ...runnables], name) {
        return new RunnableSequence({
            first: _coerceToRunnable(first),
            middle: runnables.slice(0, -1).map(_coerceToRunnable),
            last: _coerceToRunnable(runnables[runnables.length - 1]),
            name,
        });
    }
}
/**
 * A runnable that runs a mapping of runnables in parallel,
 * and returns a mapping of their outputs.
 * @example
 * ```typescript
 * const mapChain = RunnableMap.from({
 *   joke: PromptTemplate.fromTemplate("Tell me a joke about {topic}").pipe(
 *     new ChatAnthropic({}),
 *   ),
 *   poem: PromptTemplate.fromTemplate("write a 2-line poem about {topic}").pipe(
 *     new ChatAnthropic({}),
 *   ),
 * });
 * const result = await mapChain.invoke({ topic: "bear" });
 * ```
 */
class RunnableMap extends Runnable {
    static lc_name() {
        return "RunnableMap";
    }
    getStepsKeys() {
        return Object.keys(this.steps);
    }
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "runnables"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "steps", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.steps = {};
        for (const [key, value] of Object.entries(fields.steps)) {
            this.steps[key] = _coerceToRunnable(value);
        }
    }
    static from(steps) {
        return new RunnableMap({ steps });
    }
    async invoke(input, options) {
        const config = (0,runnables_config/* ensureConfig */.LE)(options);
        const callbackManager_ = await (0,runnables_config/* getCallbackManagerForConfig */.Le)(config);
        const runManager = await callbackManager_?.handleChainStart(this.toJSON(), {
            input,
        }, undefined, undefined, undefined, undefined, config?.runName);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const output = {};
        try {
            await Promise.all(Object.entries(this.steps).map(async ([key, runnable]) => {
                output[key] = await runnable.invoke(input, (0,runnables_config/* patchConfig */.q)(config, {
                    callbacks: runManager?.getChild(`map:key:${key}`),
                }));
            }));
        }
        catch (e) {
            await runManager?.handleChainError(e);
            throw e;
        }
        await runManager?.handleChainEnd(output);
        return output;
    }
    async *_transform(generator, runManager, options) {
        // shallow copy steps to ignore changes while iterating
        const steps = { ...this.steps };
        // each step gets a copy of the input iterator
        const inputCopies = (0,stream/* atee */.y2)(generator, Object.keys(steps).length);
        // start the first iteration of each output iterator
        const tasks = new Map(Object.entries(steps).map(([key, runnable], i) => {
            const gen = runnable.transform(inputCopies[i], (0,runnables_config/* patchConfig */.q)(options, {
                callbacks: runManager?.getChild(`map:key:${key}`),
            }));
            return [key, gen.next().then((result) => ({ key, gen, result }))];
        }));
        // yield chunks as they become available,
        // starting new iterations as needed,
        // until all iterators are done
        while (tasks.size) {
            const { key, result, gen } = await Promise.race(tasks.values());
            tasks.delete(key);
            if (!result.done) {
                yield { [key]: result.value };
                tasks.set(key, gen.next().then((result) => ({ key, gen, result })));
            }
        }
    }
    transform(generator, options) {
        return this._transformStreamWithConfig(generator, this._transform.bind(this), options);
    }
    async stream(input, options) {
        async function* generator() {
            yield input;
        }
        const wrappedGenerator = new stream/* AsyncGeneratorWithSetup */.qq(this.transform(generator(), options));
        await wrappedGenerator.setup;
        return stream/* IterableReadableStream.fromAsyncGenerator */.QJ.fromAsyncGenerator(wrappedGenerator);
    }
}
/**
 * A runnable that runs a callable.
 */
class RunnableLambda extends Runnable {
    static lc_name() {
        return "RunnableLambda";
    }
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "runnables"]
        });
        Object.defineProperty(this, "func", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.func = fields.func;
    }
    static from(func) {
        return new RunnableLambda({
            func,
        });
    }
    async _invoke(input, config, runManager) {
        return new Promise((resolve, reject) => {
            const childConfig = (0,runnables_config/* patchConfig */.q)(config, {
                callbacks: runManager?.getChild(),
                recursionLimit: (config?.recursionLimit ?? runnables_config/* DEFAULT_RECURSION_LIMIT */.ov) - 1,
            });
            void singletons/* AsyncLocalStorageProviderSingleton.getInstance */.A.getInstance().run(childConfig, async () => {
                try {
                    let output = await this.func(input, {
                        ...childConfig,
                        config: childConfig,
                    });
                    if (output && Runnable.isRunnable(output)) {
                        if (config?.recursionLimit === 0) {
                            throw new Error("Recursion limit reached.");
                        }
                        output = await output.invoke(input, {
                            ...childConfig,
                            recursionLimit: (childConfig.recursionLimit ?? runnables_config/* DEFAULT_RECURSION_LIMIT */.ov) - 1,
                        });
                    }
                    resolve(output);
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
    async invoke(input, options) {
        return this._callWithConfig(this._invoke, input, options);
    }
    async *_transform(generator, runManager, config) {
        let finalChunk;
        for await (const chunk of generator) {
            if (finalChunk === undefined) {
                finalChunk = chunk;
            }
            else {
                // Make a best effort to gather, for any type that supports concat.
                try {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    finalChunk = (0,stream/* concat */.zo)(finalChunk, chunk);
                }
                catch (e) {
                    finalChunk = chunk;
                }
            }
        }
        const output = await new Promise((resolve, reject) => {
            void singletons/* AsyncLocalStorageProviderSingleton.getInstance */.A.getInstance().run(config, async () => {
                try {
                    const res = await this.func(finalChunk, {
                        ...config,
                        config,
                    });
                    resolve(res);
                }
                catch (e) {
                    reject(e);
                }
            });
        });
        if (output && Runnable.isRunnable(output)) {
            if (config?.recursionLimit === 0) {
                throw new Error("Recursion limit reached.");
            }
            const stream = await output.stream(finalChunk, (0,runnables_config/* patchConfig */.q)(config, {
                callbacks: runManager?.getChild(),
                recursionLimit: (config?.recursionLimit ?? runnables_config/* DEFAULT_RECURSION_LIMIT */.ov) - 1,
            }));
            for await (const chunk of stream) {
                yield chunk;
            }
        }
        else {
            yield output;
        }
    }
    transform(generator, options) {
        return this._transformStreamWithConfig(generator, this._transform.bind(this), options);
    }
    async stream(input, options) {
        async function* generator() {
            yield input;
        }
        const wrappedGenerator = new stream/* AsyncGeneratorWithSetup */.qq(this.transform(generator(), options));
        await wrappedGenerator.setup;
        return stream/* IterableReadableStream.fromAsyncGenerator */.QJ.fromAsyncGenerator(wrappedGenerator);
    }
}
class RunnableParallel extends (/* unused pure expression or super */ null && (RunnableMap)) {
}
/**
 * A Runnable that can fallback to other Runnables if it fails.
 */
class RunnableWithFallbacks extends Runnable {
    static lc_name() {
        return "RunnableWithFallbacks";
    }
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "runnables"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "runnable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fallbacks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.runnable = fields.runnable;
        this.fallbacks = fields.fallbacks;
    }
    *runnables() {
        yield this.runnable;
        for (const fallback of this.fallbacks) {
            yield fallback;
        }
    }
    async invoke(input, options) {
        const callbackManager_ = await manager/* CallbackManager.configure */.Ye.configure(options?.callbacks, undefined, options?.tags, undefined, options?.metadata);
        const runManager = await callbackManager_?.handleChainStart(this.toJSON(), _coerceToDict(input, "input"), undefined, undefined, undefined, undefined, options?.runName);
        let firstError;
        for (const runnable of this.runnables()) {
            try {
                const output = await runnable.invoke(input, (0,runnables_config/* patchConfig */.q)(options, { callbacks: runManager?.getChild() }));
                await runManager?.handleChainEnd(_coerceToDict(output, "output"));
                return output;
            }
            catch (e) {
                if (firstError === undefined) {
                    firstError = e;
                }
            }
        }
        if (firstError === undefined) {
            throw new Error("No error stored at end of fallback.");
        }
        await runManager?.handleChainError(firstError);
        throw firstError;
    }
    async batch(inputs, options, batchOptions) {
        if (batchOptions?.returnExceptions) {
            throw new Error("Not implemented.");
        }
        const configList = this._getOptionsList(options ?? {}, inputs.length);
        const callbackManagers = await Promise.all(configList.map((config) => manager/* CallbackManager.configure */.Ye.configure(config?.callbacks, undefined, config?.tags, undefined, config?.metadata)));
        const runManagers = await Promise.all(callbackManagers.map((callbackManager, i) => callbackManager?.handleChainStart(this.toJSON(), _coerceToDict(inputs[i], "input"), undefined, undefined, undefined, undefined, configList[i].runName)));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let firstError;
        for (const runnable of this.runnables()) {
            try {
                const outputs = await runnable.batch(inputs, runManagers.map((runManager, j) => (0,runnables_config/* patchConfig */.q)(configList[j], {
                    callbacks: runManager?.getChild(),
                })), batchOptions);
                await Promise.all(runManagers.map((runManager, i) => runManager?.handleChainEnd(_coerceToDict(outputs[i], "output"))));
                return outputs;
            }
            catch (e) {
                if (firstError === undefined) {
                    firstError = e;
                }
            }
        }
        if (!firstError) {
            throw new Error("No error stored at end of fallbacks.");
        }
        await Promise.all(runManagers.map((runManager) => runManager?.handleChainError(firstError)));
        throw firstError;
    }
}
// TODO: Figure out why the compiler needs help eliminating Error as a RunOutput type
function _coerceToRunnable(coerceable) {
    if (typeof coerceable === "function") {
        return new RunnableLambda({ func: coerceable });
    }
    else if (Runnable.isRunnable(coerceable)) {
        return coerceable;
    }
    else if (!Array.isArray(coerceable) && typeof coerceable === "object") {
        const runnables = {};
        for (const [key, value] of Object.entries(coerceable)) {
            runnables[key] = _coerceToRunnable(value);
        }
        return new RunnableMap({
            steps: runnables,
        });
    }
    else {
        throw new Error(`Expected a Runnable, function or object.\nInstead got an unsupported type.`);
    }
}
/**
 * A runnable that assigns key-value pairs to inputs of type `Record<string, unknown>`.
 */
class RunnableAssign extends Runnable {
    static lc_name() {
        return "RunnableAssign";
    }
    constructor(fields) {
        // eslint-disable-next-line no-instanceof/no-instanceof
        if (fields instanceof RunnableMap) {
            // eslint-disable-next-line no-param-reassign
            fields = { mapper: fields };
        }
        super(fields);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "runnables"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "mapper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.mapper = fields.mapper;
    }
    async invoke(input, options) {
        const mapperResult = await this.mapper.invoke(input, options);
        return {
            ...input,
            ...mapperResult,
        };
    }
    async *_transform(generator, runManager, options) {
        // collect mapper keys
        const mapperKeys = this.mapper.getStepsKeys();
        // create two input gens, one for the mapper, one for the input
        const [forPassthrough, forMapper] = (0,stream/* atee */.y2)(generator);
        // create mapper output gen
        const mapperOutput = this.mapper.transform(forMapper, (0,runnables_config/* patchConfig */.q)(options, { callbacks: runManager?.getChild() }));
        // start the mapper
        const firstMapperChunkPromise = mapperOutput.next();
        // yield the passthrough
        for await (const chunk of forPassthrough) {
            if (typeof chunk !== "object" || Array.isArray(chunk)) {
                throw new Error(`RunnableAssign can only be used with objects as input, got ${typeof chunk}`);
            }
            const filtered = Object.fromEntries(Object.entries(chunk).filter(([key]) => !mapperKeys.includes(key)));
            if (Object.keys(filtered).length > 0) {
                yield filtered;
            }
        }
        // yield the mapper output
        yield (await firstMapperChunkPromise).value;
        for await (const chunk of mapperOutput) {
            yield chunk;
        }
    }
    transform(generator, options) {
        return this._transformStreamWithConfig(generator, this._transform.bind(this), options);
    }
    async stream(input, options) {
        async function* generator() {
            yield input;
        }
        const wrappedGenerator = new stream/* AsyncGeneratorWithSetup */.qq(this.transform(generator(), options));
        await wrappedGenerator.setup;
        return stream/* IterableReadableStream.fromAsyncGenerator */.QJ.fromAsyncGenerator(wrappedGenerator);
    }
}
/**
 * A runnable that assigns key-value pairs to inputs of type `Record<string, unknown>`.
 */
class RunnablePick extends Runnable {
    static lc_name() {
        return "RunnablePick";
    }
    constructor(fields) {
        if (typeof fields === "string" || Array.isArray(fields)) {
            // eslint-disable-next-line no-param-reassign
            fields = { keys: fields };
        }
        super(fields);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "runnables"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "keys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.keys = fields.keys;
    }
    async _pick(input) {
        if (typeof this.keys === "string") {
            return input[this.keys];
        }
        else {
            const picked = this.keys
                .map((key) => [key, input[key]])
                .filter((v) => v[1] !== undefined);
            return picked.length === 0 ? undefined : Object.fromEntries(picked);
        }
    }
    async invoke(input, options) {
        return this._callWithConfig(this._pick.bind(this), input, options);
    }
    async *_transform(generator) {
        for await (const chunk of generator) {
            const picked = await this._pick(chunk);
            if (picked !== undefined) {
                yield picked;
            }
        }
    }
    transform(generator, options) {
        return this._transformStreamWithConfig(generator, this._transform.bind(this), options);
    }
    async stream(input, options) {
        async function* generator() {
            yield input;
        }
        const wrappedGenerator = new stream/* AsyncGeneratorWithSetup */.qq(this.transform(generator(), options));
        await wrappedGenerator.setup;
        return stream/* IterableReadableStream.fromAsyncGenerator */.QJ.fromAsyncGenerator(wrappedGenerator);
    }
}


/***/ }),

/***/ 96118:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LE": () => (/* binding */ ensureConfig),
/* harmony export */   "Le": () => (/* binding */ getCallbackManagerForConfig),
/* harmony export */   "ov": () => (/* binding */ DEFAULT_RECURSION_LIMIT),
/* harmony export */   "q": () => (/* binding */ patchConfig),
/* harmony export */   "t8": () => (/* binding */ mergeConfigs)
/* harmony export */ });
/* harmony import */ var _callbacks_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34235);
/* harmony import */ var _singletons_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76626);


const DEFAULT_RECURSION_LIMIT = 25;
async function getCallbackManagerForConfig(config) {
    return _callbacks_manager_js__WEBPACK_IMPORTED_MODULE_0__/* .CallbackManager.configure */ .Ye.configure(config?.callbacks, undefined, config?.tags, undefined, config?.metadata);
}
function mergeConfigs(...configs) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const copy = ensureConfig();
    for (const options of configs.filter((c) => !!c)) {
        for (const key of Object.keys(options)) {
            if (key === "metadata") {
                copy[key] = { ...copy[key], ...options[key] };
            }
            else if (key === "tags") {
                copy[key] = [...new Set(copy[key].concat(options[key] ?? []))];
            }
            else if (key === "configurable") {
                copy[key] = { ...copy[key], ...options[key] };
            }
            else if (key === "callbacks") {
                const baseCallbacks = copy.callbacks;
                const providedCallbacks = options.callbacks;
                // callbacks can be either undefined, Array<handler> or manager
                // so merging two callbacks values has 6 cases
                if (Array.isArray(providedCallbacks)) {
                    if (!baseCallbacks) {
                        copy.callbacks = providedCallbacks;
                    }
                    else if (Array.isArray(baseCallbacks)) {
                        copy.callbacks = baseCallbacks.concat(providedCallbacks);
                    }
                    else {
                        // baseCallbacks is a manager
                        const manager = baseCallbacks.copy();
                        for (const callback of providedCallbacks) {
                            manager.addHandler((0,_callbacks_manager_js__WEBPACK_IMPORTED_MODULE_0__/* .ensureHandler */ .xz)(callback), true);
                        }
                        copy.callbacks = manager;
                    }
                }
                else if (providedCallbacks) {
                    // providedCallbacks is a manager
                    if (!baseCallbacks) {
                        copy.callbacks = providedCallbacks;
                    }
                    else if (Array.isArray(baseCallbacks)) {
                        const manager = providedCallbacks.copy();
                        for (const callback of baseCallbacks) {
                            manager.addHandler((0,_callbacks_manager_js__WEBPACK_IMPORTED_MODULE_0__/* .ensureHandler */ .xz)(callback), true);
                        }
                        copy.callbacks = manager;
                    }
                    else {
                        // baseCallbacks is also a manager
                        copy.callbacks = new _callbacks_manager_js__WEBPACK_IMPORTED_MODULE_0__/* .CallbackManager */ .Ye(providedCallbacks._parentRunId, {
                            handlers: baseCallbacks.handlers.concat(providedCallbacks.handlers),
                            inheritableHandlers: baseCallbacks.inheritableHandlers.concat(providedCallbacks.inheritableHandlers),
                            tags: Array.from(new Set(baseCallbacks.tags.concat(providedCallbacks.tags))),
                            inheritableTags: Array.from(new Set(baseCallbacks.inheritableTags.concat(providedCallbacks.inheritableTags))),
                            metadata: {
                                ...baseCallbacks.metadata,
                                ...providedCallbacks.metadata,
                            },
                        });
                    }
                }
            }
            else {
                const typedKey = key;
                copy[typedKey] = options[typedKey] ?? copy[typedKey];
            }
        }
    }
    return copy;
}
const PRIMITIVES = new Set(["string", "number", "boolean"]);
/**
 * Ensure that a passed config is an object with all required keys present.
 */
function ensureConfig(config) {
    const loadedConfig = config ?? _singletons_index_js__WEBPACK_IMPORTED_MODULE_1__/* .AsyncLocalStorageProviderSingleton.getInstance */ .A.getInstance().getStore();
    let empty = {
        tags: [],
        metadata: {},
        callbacks: undefined,
        recursionLimit: 25,
    };
    if (loadedConfig) {
        empty = { ...empty, ...loadedConfig };
    }
    if (loadedConfig?.configurable) {
        for (const key of Object.keys(loadedConfig.configurable)) {
            if (PRIMITIVES.has(typeof loadedConfig.configurable[key]) &&
                !empty.metadata?.[key]) {
                if (!empty.metadata) {
                    empty.metadata = {};
                }
                empty.metadata[key] = loadedConfig.configurable[key];
            }
        }
    }
    return empty;
}
/**
 * Helper function that patches runnable configs with updated properties.
 */
function patchConfig(config = {}, { callbacks, maxConcurrency, recursionLimit, runName, configurable, } = {}) {
    const newConfig = ensureConfig(config);
    if (callbacks !== undefined) {
        /**
         * If we're replacing callbacks we need to unset runName
         * since that should apply only to the same run as the original callbacks
         */
        delete newConfig.runName;
        newConfig.callbacks = callbacks;
    }
    if (recursionLimit !== undefined) {
        newConfig.recursionLimit = recursionLimit;
    }
    if (maxConcurrency !== undefined) {
        newConfig.maxConcurrency = maxConcurrency;
    }
    if (runName !== undefined) {
        newConfig.runName = runName;
    }
    if (configurable !== undefined) {
        newConfig.configurable = { ...newConfig.configurable, ...configurable };
    }
    return newConfig;
}


/***/ }),

/***/ 76626:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ AsyncLocalStorageProviderSingleton)
/* harmony export */ });
/* unused harmony export MockAsyncLocalStorage */
/* eslint-disable @typescript-eslint/no-explicit-any */
class MockAsyncLocalStorage {
    getStore() {
        return undefined;
    }
    run(_store, callback) {
        callback();
    }
}
class AsyncLocalStorageProvider {
    constructor() {
        Object.defineProperty(this, "asyncLocalStorage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new MockAsyncLocalStorage()
        });
        Object.defineProperty(this, "hasBeenInitialized", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
    getInstance() {
        return this.asyncLocalStorage;
    }
    initializeGlobalInstance(instance) {
        if (!this.hasBeenInitialized) {
            this.hasBeenInitialized = true;
            this.asyncLocalStorage = instance;
        }
    }
}
const AsyncLocalStorageProviderSingleton = new AsyncLocalStorageProvider();



/***/ }),

/***/ 74492:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BaseTracer)
/* harmony export */ });
/* harmony import */ var _callbacks_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31395);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _coerceToDict(value, defaultKey) {
    return value && !Array.isArray(value) && typeof value === "object"
        ? value
        : { [defaultKey]: value };
}
function stripNonAlphanumeric(input) {
    return input.replace(/[-:.]/g, "");
}
function convertToDottedOrderFormat(epoch, runId) {
    return (stripNonAlphanumeric(`${new Date(epoch).toISOString().slice(0, -1)}000Z`) +
        runId);
}
class BaseTracer extends _callbacks_base_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseCallbackHandler */ .E {
    constructor(_fields) {
        super(...arguments);
        Object.defineProperty(this, "runMap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
    }
    copy() {
        return this;
    }
    stringifyError(error) {
        // eslint-disable-next-line no-instanceof/no-instanceof
        if (error instanceof Error) {
            return error.message + (error?.stack ? `\n\n${error.stack}` : "");
        }
        if (typeof error === "string") {
            return error;
        }
        return `${error}`;
    }
    _addChildRun(parentRun, childRun) {
        parentRun.child_runs.push(childRun);
    }
    async _startTrace(run) {
        const currentDottedOrder = convertToDottedOrderFormat(run.start_time, run.id);
        const storedRun = { ...run };
        if (storedRun.parent_run_id !== undefined) {
            const parentRun = this.runMap.get(storedRun.parent_run_id);
            if (parentRun) {
                this._addChildRun(parentRun, storedRun);
                parentRun.child_execution_order = Math.max(parentRun.child_execution_order, storedRun.child_execution_order);
                storedRun.trace_id = parentRun.trace_id;
                if (parentRun.dotted_order !== undefined) {
                    storedRun.dotted_order = [
                        parentRun.dotted_order,
                        currentDottedOrder,
                    ].join(".");
                }
                else {
                    // This can happen naturally for callbacks added within a run
                    // console.debug(`Parent run with UUID ${storedRun.parent_run_id} has no dotted order.`);
                }
            }
            else {
                // This can happen naturally for callbacks added within a run
                // console.debug(
                //   `Parent run with UUID ${storedRun.parent_run_id} not found.`
                // );
            }
        }
        else {
            storedRun.trace_id = storedRun.id;
            storedRun.dotted_order = currentDottedOrder;
        }
        this.runMap.set(storedRun.id, storedRun);
        await this.onRunCreate?.(storedRun);
    }
    async _endTrace(run) {
        const parentRun = run.parent_run_id !== undefined && this.runMap.get(run.parent_run_id);
        if (parentRun) {
            parentRun.child_execution_order = Math.max(parentRun.child_execution_order, run.child_execution_order);
        }
        else {
            await this.persistRun(run);
        }
        this.runMap.delete(run.id);
        await this.onRunUpdate?.(run);
    }
    _getExecutionOrder(parentRunId) {
        const parentRun = parentRunId !== undefined && this.runMap.get(parentRunId);
        // If a run has no parent then execution order is 1
        if (!parentRun) {
            return 1;
        }
        return parentRun.child_execution_order + 1;
    }
    async handleLLMStart(llm, prompts, runId, parentRunId, extraParams, tags, metadata, name) {
        const execution_order = this._getExecutionOrder(parentRunId);
        const start_time = Date.now();
        const finalExtraParams = metadata
            ? { ...extraParams, metadata }
            : extraParams;
        const run = {
            id: runId,
            name: name ?? llm.id[llm.id.length - 1],
            parent_run_id: parentRunId,
            start_time,
            serialized: llm,
            events: [
                {
                    name: "start",
                    time: new Date(start_time).toISOString(),
                },
            ],
            inputs: { prompts },
            execution_order,
            child_runs: [],
            child_execution_order: execution_order,
            run_type: "llm",
            extra: finalExtraParams ?? {},
            tags: tags || [],
        };
        await this._startTrace(run);
        await this.onLLMStart?.(run);
        return run;
    }
    async handleChatModelStart(llm, messages, runId, parentRunId, extraParams, tags, metadata, name) {
        const execution_order = this._getExecutionOrder(parentRunId);
        const start_time = Date.now();
        const finalExtraParams = metadata
            ? { ...extraParams, metadata }
            : extraParams;
        const run = {
            id: runId,
            name: name ?? llm.id[llm.id.length - 1],
            parent_run_id: parentRunId,
            start_time,
            serialized: llm,
            events: [
                {
                    name: "start",
                    time: new Date(start_time).toISOString(),
                },
            ],
            inputs: { messages },
            execution_order,
            child_runs: [],
            child_execution_order: execution_order,
            run_type: "llm",
            extra: finalExtraParams ?? {},
            tags: tags || [],
        };
        await this._startTrace(run);
        await this.onLLMStart?.(run);
        return run;
    }
    async handleLLMEnd(output, runId) {
        const run = this.runMap.get(runId);
        if (!run || run?.run_type !== "llm") {
            throw new Error("No LLM run to end.");
        }
        run.end_time = Date.now();
        run.outputs = output;
        run.events.push({
            name: "end",
            time: new Date(run.end_time).toISOString(),
        });
        await this.onLLMEnd?.(run);
        await this._endTrace(run);
        return run;
    }
    async handleLLMError(error, runId) {
        const run = this.runMap.get(runId);
        if (!run || run?.run_type !== "llm") {
            throw new Error("No LLM run to end.");
        }
        run.end_time = Date.now();
        run.error = this.stringifyError(error);
        run.events.push({
            name: "error",
            time: new Date(run.end_time).toISOString(),
        });
        await this.onLLMError?.(run);
        await this._endTrace(run);
        return run;
    }
    async handleChainStart(chain, inputs, runId, parentRunId, tags, metadata, runType, name) {
        const execution_order = this._getExecutionOrder(parentRunId);
        const start_time = Date.now();
        const run = {
            id: runId,
            name: name ?? chain.id[chain.id.length - 1],
            parent_run_id: parentRunId,
            start_time,
            serialized: chain,
            events: [
                {
                    name: "start",
                    time: new Date(start_time).toISOString(),
                },
            ],
            inputs,
            execution_order,
            child_execution_order: execution_order,
            run_type: runType ?? "chain",
            child_runs: [],
            extra: metadata ? { metadata } : {},
            tags: tags || [],
        };
        await this._startTrace(run);
        await this.onChainStart?.(run);
        return run;
    }
    async handleChainEnd(outputs, runId, _parentRunId, _tags, kwargs) {
        const run = this.runMap.get(runId);
        if (!run) {
            throw new Error("No chain run to end.");
        }
        run.end_time = Date.now();
        run.outputs = _coerceToDict(outputs, "output");
        run.events.push({
            name: "end",
            time: new Date(run.end_time).toISOString(),
        });
        if (kwargs?.inputs !== undefined) {
            run.inputs = _coerceToDict(kwargs.inputs, "input");
        }
        await this.onChainEnd?.(run);
        await this._endTrace(run);
        return run;
    }
    async handleChainError(error, runId, _parentRunId, _tags, kwargs) {
        const run = this.runMap.get(runId);
        if (!run) {
            throw new Error("No chain run to end.");
        }
        run.end_time = Date.now();
        run.error = this.stringifyError(error);
        run.events.push({
            name: "error",
            time: new Date(run.end_time).toISOString(),
        });
        if (kwargs?.inputs !== undefined) {
            run.inputs = _coerceToDict(kwargs.inputs, "input");
        }
        await this.onChainError?.(run);
        await this._endTrace(run);
        return run;
    }
    async handleToolStart(tool, input, runId, parentRunId, tags, metadata, name) {
        const execution_order = this._getExecutionOrder(parentRunId);
        const start_time = Date.now();
        const run = {
            id: runId,
            name: name ?? tool.id[tool.id.length - 1],
            parent_run_id: parentRunId,
            start_time,
            serialized: tool,
            events: [
                {
                    name: "start",
                    time: new Date(start_time).toISOString(),
                },
            ],
            inputs: { input },
            execution_order,
            child_execution_order: execution_order,
            run_type: "tool",
            child_runs: [],
            extra: metadata ? { metadata } : {},
            tags: tags || [],
        };
        await this._startTrace(run);
        await this.onToolStart?.(run);
        return run;
    }
    async handleToolEnd(output, runId) {
        const run = this.runMap.get(runId);
        if (!run || run?.run_type !== "tool") {
            throw new Error("No tool run to end");
        }
        run.end_time = Date.now();
        run.outputs = { output };
        run.events.push({
            name: "end",
            time: new Date(run.end_time).toISOString(),
        });
        await this.onToolEnd?.(run);
        await this._endTrace(run);
        return run;
    }
    async handleToolError(error, runId) {
        const run = this.runMap.get(runId);
        if (!run || run?.run_type !== "tool") {
            throw new Error("No tool run to end");
        }
        run.end_time = Date.now();
        run.error = this.stringifyError(error);
        run.events.push({
            name: "error",
            time: new Date(run.end_time).toISOString(),
        });
        await this.onToolError?.(run);
        await this._endTrace(run);
        return run;
    }
    async handleAgentAction(action, runId) {
        const run = this.runMap.get(runId);
        if (!run || run?.run_type !== "chain") {
            return;
        }
        const agentRun = run;
        agentRun.actions = agentRun.actions || [];
        agentRun.actions.push(action);
        agentRun.events.push({
            name: "agent_action",
            time: new Date().toISOString(),
            kwargs: { action },
        });
        await this.onAgentAction?.(run);
    }
    async handleAgentEnd(action, runId) {
        const run = this.runMap.get(runId);
        if (!run || run?.run_type !== "chain") {
            return;
        }
        run.events.push({
            name: "agent_end",
            time: new Date().toISOString(),
            kwargs: { action },
        });
        await this.onAgentEnd?.(run);
    }
    async handleRetrieverStart(retriever, query, runId, parentRunId, tags, metadata, name) {
        const execution_order = this._getExecutionOrder(parentRunId);
        const start_time = Date.now();
        const run = {
            id: runId,
            name: name ?? retriever.id[retriever.id.length - 1],
            parent_run_id: parentRunId,
            start_time,
            serialized: retriever,
            events: [
                {
                    name: "start",
                    time: new Date(start_time).toISOString(),
                },
            ],
            inputs: { query },
            execution_order,
            child_execution_order: execution_order,
            run_type: "retriever",
            child_runs: [],
            extra: metadata ? { metadata } : {},
            tags: tags || [],
        };
        await this._startTrace(run);
        await this.onRetrieverStart?.(run);
        return run;
    }
    async handleRetrieverEnd(documents, runId) {
        const run = this.runMap.get(runId);
        if (!run || run?.run_type !== "retriever") {
            throw new Error("No retriever run to end");
        }
        run.end_time = Date.now();
        run.outputs = { documents };
        run.events.push({
            name: "end",
            time: new Date(run.end_time).toISOString(),
        });
        await this.onRetrieverEnd?.(run);
        await this._endTrace(run);
        return run;
    }
    async handleRetrieverError(error, runId) {
        const run = this.runMap.get(runId);
        if (!run || run?.run_type !== "retriever") {
            throw new Error("No retriever run to end");
        }
        run.end_time = Date.now();
        run.error = this.stringifyError(error);
        run.events.push({
            name: "error",
            time: new Date(run.end_time).toISOString(),
        });
        await this.onRetrieverError?.(run);
        await this._endTrace(run);
        return run;
    }
    async handleText(text, runId) {
        const run = this.runMap.get(runId);
        if (!run || run?.run_type !== "chain") {
            return;
        }
        run.events.push({
            name: "text",
            time: new Date().toISOString(),
            kwargs: { text },
        });
        await this.onText?.(run);
    }
    async handleLLMNewToken(token, idx, runId, _parentRunId, _tags, fields) {
        const run = this.runMap.get(runId);
        if (!run || run?.run_type !== "llm") {
            throw new Error(`Invalid "runId" provided to "handleLLMNewToken" callback.`);
        }
        run.events.push({
            name: "new_token",
            time: new Date().toISOString(),
            kwargs: { token, idx, chunk: fields?.chunk },
        });
        await this.onLLMNewToken?.(run, token, { chunk: fields?.chunk });
        return run;
    }
}


/***/ }),

/***/ 57072:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ AsyncCaller)
/* harmony export */ });
/* harmony import */ var p_retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42570);
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94850);


const STATUS_NO_RETRY = [
    400,
    401,
    402,
    403,
    404,
    405,
    406,
    407,
    408,
    409, // Conflict
];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultFailedAttemptHandler = (error) => {
    if (error.message.startsWith("Cancel") ||
        error.message.startsWith("TimeoutError") ||
        error.name === "TimeoutError" ||
        error.message.startsWith("AbortError") ||
        error.name === "AbortError") {
        throw error;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (error?.code === "ECONNABORTED") {
        throw error;
    }
    const status = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error?.response?.status ?? error?.status;
    if (status && STATUS_NO_RETRY.includes(+status)) {
        throw error;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (error?.error?.code === "insufficient_quota") {
        const err = new Error(error?.message);
        err.name = "InsufficientQuotaError";
        throw err;
    }
};
/**
 * A class that can be used to make async calls with concurrency and retry logic.
 *
 * This is useful for making calls to any kind of "expensive" external resource,
 * be it because it's rate-limited, subject to network issues, etc.
 *
 * Concurrent calls are limited by the `maxConcurrency` parameter, which defaults
 * to `Infinity`. This means that by default, all calls will be made in parallel.
 *
 * Retries are limited by the `maxRetries` parameter, which defaults to 6. This
 * means that by default, each call will be retried up to 6 times, with an
 * exponential backoff between each attempt.
 */
class AsyncCaller {
    constructor(params) {
        Object.defineProperty(this, "maxConcurrency", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "maxRetries", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "onFailedAttempt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "queue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maxConcurrency = params.maxConcurrency ?? Infinity;
        this.maxRetries = params.maxRetries ?? 6;
        this.onFailedAttempt =
            params.onFailedAttempt ?? defaultFailedAttemptHandler;
        const PQueue =  true ? p_queue__WEBPACK_IMPORTED_MODULE_1__["default"] : p_queue__WEBPACK_IMPORTED_MODULE_1__;
        this.queue = new PQueue({ concurrency: this.maxConcurrency });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    call(callable, ...args) {
        return this.queue.add(() => p_retry__WEBPACK_IMPORTED_MODULE_0__(() => callable(...args).catch((error) => {
            // eslint-disable-next-line no-instanceof/no-instanceof
            if (error instanceof Error) {
                throw error;
            }
            else {
                throw new Error(error);
            }
        }), {
            onFailedAttempt: this.onFailedAttempt,
            retries: this.maxRetries,
            randomize: true,
            // If needed we can change some of the defaults here,
            // but they're quite sensible.
        }), { throwOnTimeout: true });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callWithOptions(options, callable, ...args) {
        // Note this doesn't cancel the underlying request,
        // when available prefer to use the signal option of the underlying call
        if (options.signal) {
            return Promise.race([
                this.call(callable, ...args),
                new Promise((_, reject) => {
                    options.signal?.addEventListener("abort", () => {
                        reject(new Error("AbortError"));
                    });
                }),
            ]);
        }
        return this.call(callable, ...args);
    }
    fetch(...args) {
        return this.call(() => fetch(...args).then((res) => (res.ok ? res : Promise.reject(res))));
    }
}


/***/ }),

/***/ 98919:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "af": () => (/* reexport */ core_applyPatch)
});

// UNUSED EXPORTS: JsonPatchError, _areEquals, applyOperation, applyReducer, compare, deepClone, default, escapePathComponent, generate, getValueByPointer, observe, unescapePathComponent, unobserve, validate, validator

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/utils/fast-json-patch/src/core.js
var core_namespaceObject = {};
__webpack_require__.r(core_namespaceObject);
__webpack_require__.d(core_namespaceObject, {
  "JsonPatchError": () => (JsonPatchError),
  "_areEquals": () => (_areEquals),
  "applyOperation": () => (applyOperation),
  "applyPatch": () => (core_applyPatch),
  "applyReducer": () => (applyReducer),
  "deepClone": () => (deepClone),
  "getValueByPointer": () => (getValueByPointer),
  "validate": () => (validate),
  "validator": () => (validator)
});

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/fast-json-patch/src/helpers.js
// @ts-nocheck
// Inlined because of ESM import issues
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
const _hasOwnProperty = Object.prototype.hasOwnProperty;
function helpers_hasOwnProperty(obj, key) {
    return _hasOwnProperty.call(obj, key);
}
function helpers_objectKeys(obj) {
    if (Array.isArray(obj)) {
        const keys = new Array(obj.length);
        for (let k = 0; k < keys.length; k++) {
            keys[k] = "" + k;
        }
        return keys;
    }
    if (Object.keys) {
        return Object.keys(obj);
    }
    let keys = [];
    for (let i in obj) {
        if (helpers_hasOwnProperty(obj, i)) {
            keys.push(i);
        }
    }
    return keys;
}
/**
 * Deeply clone the object.
 * https://jsperf.com/deep-copy-vs-json-stringify-json-parse/25 (recursiveDeepCopy)
 * @param  {any} obj value to clone
 * @return {any} cloned obj
 */
function helpers_deepClone(obj) {
    switch (typeof obj) {
        case "object":
            return JSON.parse(JSON.stringify(obj)); //Faster than ES5 clone - http://jsperf.com/deep-cloning-of-objects/5
        case "undefined":
            return null; //this is how JSON.stringify behaves for array items
        default:
            return obj; //no need to clone primitives
    }
}
//3x faster than cached /^\d+$/.test(str)
function isInteger(str) {
    let i = 0;
    const len = str.length;
    let charCode;
    while (i < len) {
        charCode = str.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            i++;
            continue;
        }
        return false;
    }
    return true;
}
/**
 * Escapes a json pointer path
 * @param path The raw pointer
 * @return the Escaped path
 */
function helpers_escapePathComponent(path) {
    if (path.indexOf("/") === -1 && path.indexOf("~") === -1)
        return path;
    return path.replace(/~/g, "~0").replace(/\//g, "~1");
}
/**
 * Unescapes a json pointer path
 * @param path The escaped pointer
 * @return The unescaped path
 */
function unescapePathComponent(path) {
    return path.replace(/~1/g, "/").replace(/~0/g, "~");
}
function _getPathRecursive(root, obj) {
    let found;
    for (let key in root) {
        if (helpers_hasOwnProperty(root, key)) {
            if (root[key] === obj) {
                return helpers_escapePathComponent(key) + "/";
            }
            else if (typeof root[key] === "object") {
                found = _getPathRecursive(root[key], obj);
                if (found != "") {
                    return helpers_escapePathComponent(key) + "/" + found;
                }
            }
        }
    }
    return "";
}
function getPath(root, obj) {
    if (root === obj) {
        return "/";
    }
    const path = _getPathRecursive(root, obj);
    if (path === "") {
        throw new Error("Object not found in root");
    }
    return `/${path}`;
}
/**
 * Recursively checks whether an object has any undefined values inside.
 */
function hasUndefined(obj) {
    if (obj === undefined) {
        return true;
    }
    if (obj) {
        if (Array.isArray(obj)) {
            for (let i = 0, len = obj.length; i < len; i++) {
                if (hasUndefined(obj[i])) {
                    return true;
                }
            }
        }
        else if (typeof obj === "object") {
            const objKeys = helpers_objectKeys(obj);
            const objKeysLength = objKeys.length;
            for (var i = 0; i < objKeysLength; i++) {
                if (hasUndefined(obj[objKeys[i]])) {
                    return true;
                }
            }
        }
    }
    return false;
}
function patchErrorMessageFormatter(message, args) {
    const messageParts = [message];
    for (const key in args) {
        const value = typeof args[key] === "object"
            ? JSON.stringify(args[key], null, 2)
            : args[key]; // pretty print
        if (typeof value !== "undefined") {
            messageParts.push(`${key}: ${value}`);
        }
    }
    return messageParts.join("\n");
}
class PatchError extends Error {
    constructor(message, name, index, operation, tree) {
        super(patchErrorMessageFormatter(message, { name, index, operation, tree }));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
        Object.defineProperty(this, "index", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: index
        });
        Object.defineProperty(this, "operation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: operation
        });
        Object.defineProperty(this, "tree", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: tree
        });
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain, see https://stackoverflow.com/a/48342359
        this.message = patchErrorMessageFormatter(message, {
            name,
            index,
            operation,
            tree,
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/fast-json-patch/src/core.js
// @ts-nocheck

const JsonPatchError = PatchError;
const deepClone = helpers_deepClone;
/* We use a Javascript hash to store each
 function. Each hash entry (property) uses
 the operation identifiers specified in rfc6902.
 In this way, we can map each patch operation
 to its dedicated function in efficient way.
 */
/* The operations applicable to an object */
const objOps = {
    add: function (obj, key, document) {
        obj[key] = this.value;
        return { newDocument: document };
    },
    remove: function (obj, key, document) {
        var removed = obj[key];
        delete obj[key];
        return { newDocument: document, removed };
    },
    replace: function (obj, key, document) {
        var removed = obj[key];
        obj[key] = this.value;
        return { newDocument: document, removed };
    },
    move: function (obj, key, document) {
        /* in case move target overwrites an existing value,
        return the removed value, this can be taxing performance-wise,
        and is potentially unneeded */
        let removed = getValueByPointer(document, this.path);
        if (removed) {
            removed = helpers_deepClone(removed);
        }
        const originalValue = applyOperation(document, {
            op: "remove",
            path: this.from,
        }).removed;
        applyOperation(document, {
            op: "add",
            path: this.path,
            value: originalValue,
        });
        return { newDocument: document, removed };
    },
    copy: function (obj, key, document) {
        const valueToCopy = getValueByPointer(document, this.from);
        // enforce copy by value so further operations don't affect source (see issue #177)
        applyOperation(document, {
            op: "add",
            path: this.path,
            value: helpers_deepClone(valueToCopy),
        });
        return { newDocument: document };
    },
    test: function (obj, key, document) {
        return { newDocument: document, test: _areEquals(obj[key], this.value) };
    },
    _get: function (obj, key, document) {
        this.value = obj[key];
        return { newDocument: document };
    },
};
/* The operations applicable to an array. Many are the same as for the object */
var arrOps = {
    add: function (arr, i, document) {
        if (isInteger(i)) {
            arr.splice(i, 0, this.value);
        }
        else {
            // array props
            arr[i] = this.value;
        }
        // this may be needed when using '-' in an array
        return { newDocument: document, index: i };
    },
    remove: function (arr, i, document) {
        var removedList = arr.splice(i, 1);
        return { newDocument: document, removed: removedList[0] };
    },
    replace: function (arr, i, document) {
        var removed = arr[i];
        arr[i] = this.value;
        return { newDocument: document, removed };
    },
    move: objOps.move,
    copy: objOps.copy,
    test: objOps.test,
    _get: objOps._get,
};
/**
 * Retrieves a value from a JSON document by a JSON pointer.
 * Returns the value.
 *
 * @param document The document to get the value from
 * @param pointer an escaped JSON pointer
 * @return The retrieved value
 */
function getValueByPointer(document, pointer) {
    if (pointer == "") {
        return document;
    }
    var getOriginalDestination = { op: "_get", path: pointer };
    applyOperation(document, getOriginalDestination);
    return getOriginalDestination.value;
}
/**
 * Apply a single JSON Patch Operation on a JSON document.
 * Returns the {newDocument, result} of the operation.
 * It modifies the `document` and `operation` objects - it gets the values by reference.
 * If you would like to avoid touching your values, clone them:
 * `jsonpatch.applyOperation(document, jsonpatch._deepClone(operation))`.
 *
 * @param document The document to patch
 * @param operation The operation to apply
 * @param validateOperation `false` is without validation, `true` to use default jsonpatch's validation, or you can pass a `validateOperation` callback to be used for validation.
 * @param mutateDocument Whether to mutate the original document or clone it before applying
 * @param banPrototypeModifications Whether to ban modifications to `__proto__`, defaults to `true`.
 * @return `{newDocument, result}` after the operation
 */
function applyOperation(document, operation, validateOperation = false, mutateDocument = true, banPrototypeModifications = true, index = 0) {
    if (validateOperation) {
        if (typeof validateOperation == "function") {
            validateOperation(operation, 0, document, operation.path);
        }
        else {
            validator(operation, 0);
        }
    }
    /* ROOT OPERATIONS */
    if (operation.path === "") {
        let returnValue = { newDocument: document };
        if (operation.op === "add") {
            returnValue.newDocument = operation.value;
            return returnValue;
        }
        else if (operation.op === "replace") {
            returnValue.newDocument = operation.value;
            returnValue.removed = document; //document we removed
            return returnValue;
        }
        else if (operation.op === "move" || operation.op === "copy") {
            // it's a move or copy to root
            returnValue.newDocument = getValueByPointer(document, operation.from); // get the value by json-pointer in `from` field
            if (operation.op === "move") {
                // report removed item
                returnValue.removed = document;
            }
            return returnValue;
        }
        else if (operation.op === "test") {
            returnValue.test = _areEquals(document, operation.value);
            if (returnValue.test === false) {
                throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document);
            }
            returnValue.newDocument = document;
            return returnValue;
        }
        else if (operation.op === "remove") {
            // a remove on root
            returnValue.removed = document;
            returnValue.newDocument = null;
            return returnValue;
        }
        else if (operation.op === "_get") {
            operation.value = document;
            return returnValue;
        }
        else {
            /* bad operation */
            if (validateOperation) {
                throw new JsonPatchError("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", index, operation, document);
            }
            else {
                return returnValue;
            }
        }
    } /* END ROOT OPERATIONS */
    else {
        if (!mutateDocument) {
            document = helpers_deepClone(document);
        }
        const path = operation.path || "";
        const keys = path.split("/");
        let obj = document;
        let t = 1; //skip empty element - http://jsperf.com/to-shift-or-not-to-shift
        let len = keys.length;
        let existingPathFragment = undefined;
        let key;
        let validateFunction;
        if (typeof validateOperation == "function") {
            validateFunction = validateOperation;
        }
        else {
            validateFunction = validator;
        }
        while (true) {
            key = keys[t];
            if (key && key.indexOf("~") != -1) {
                key = unescapePathComponent(key);
            }
            if (banPrototypeModifications &&
                (key == "__proto__" ||
                    (key == "prototype" && t > 0 && keys[t - 1] == "constructor"))) {
                throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
            }
            if (validateOperation) {
                if (existingPathFragment === undefined) {
                    if (obj[key] === undefined) {
                        existingPathFragment = keys.slice(0, t).join("/");
                    }
                    else if (t == len - 1) {
                        existingPathFragment = operation.path;
                    }
                    if (existingPathFragment !== undefined) {
                        validateFunction(operation, 0, document, existingPathFragment);
                    }
                }
            }
            t++;
            if (Array.isArray(obj)) {
                if (key === "-") {
                    key = obj.length;
                }
                else {
                    if (validateOperation && !isInteger(key)) {
                        throw new JsonPatchError("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", index, operation, document);
                    } // only parse key when it's an integer for `arr.prop` to work
                    else if (isInteger(key)) {
                        key = ~~key;
                    }
                }
                if (t >= len) {
                    if (validateOperation && operation.op === "add" && key > obj.length) {
                        throw new JsonPatchError("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", index, operation, document);
                    }
                    const returnValue = arrOps[operation.op].call(operation, obj, key, document); // Apply patch
                    if (returnValue.test === false) {
                        throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document);
                    }
                    return returnValue;
                }
            }
            else {
                if (t >= len) {
                    const returnValue = objOps[operation.op].call(operation, obj, key, document); // Apply patch
                    if (returnValue.test === false) {
                        throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document);
                    }
                    return returnValue;
                }
            }
            obj = obj[key];
            // If we have more keys in the path, but the next value isn't a non-null object,
            // throw an OPERATION_PATH_UNRESOLVABLE error instead of iterating again.
            if (validateOperation && t < len && (!obj || typeof obj !== "object")) {
                throw new JsonPatchError("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", index, operation, document);
            }
        }
    }
}
/**
 * Apply a full JSON Patch array on a JSON document.
 * Returns the {newDocument, result} of the patch.
 * It modifies the `document` object and `patch` - it gets the values by reference.
 * If you would like to avoid touching your values, clone them:
 * `jsonpatch.applyPatch(document, jsonpatch._deepClone(patch))`.
 *
 * @param document The document to patch
 * @param patch The patch to apply
 * @param validateOperation `false` is without validation, `true` to use default jsonpatch's validation, or you can pass a `validateOperation` callback to be used for validation.
 * @param mutateDocument Whether to mutate the original document or clone it before applying
 * @param banPrototypeModifications Whether to ban modifications to `__proto__`, defaults to `true`.
 * @return An array of `{newDocument, result}` after the patch
 */
function core_applyPatch(document, patch, validateOperation, mutateDocument = true, banPrototypeModifications = true) {
    if (validateOperation) {
        if (!Array.isArray(patch)) {
            throw new JsonPatchError("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
        }
    }
    if (!mutateDocument) {
        document = helpers_deepClone(document);
    }
    const results = new Array(patch.length);
    for (let i = 0, length = patch.length; i < length; i++) {
        // we don't need to pass mutateDocument argument because if it was true, we already deep cloned the object, we'll just pass `true`
        results[i] = applyOperation(document, patch[i], validateOperation, true, banPrototypeModifications, i);
        document = results[i].newDocument; // in case root was replaced
    }
    results.newDocument = document;
    return results;
}
/**
 * Apply a single JSON Patch Operation on a JSON document.
 * Returns the updated document.
 * Suitable as a reducer.
 *
 * @param document The document to patch
 * @param operation The operation to apply
 * @return The updated document
 */
function applyReducer(document, operation, index) {
    const operationResult = applyOperation(document, operation);
    if (operationResult.test === false) {
        // failed test
        throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document);
    }
    return operationResult.newDocument;
}
/**
 * Validates a single operation. Called from `jsonpatch.validate`. Throws `JsonPatchError` in case of an error.
 * @param {object} operation - operation object (patch)
 * @param {number} index - index of operation in the sequence
 * @param {object} [document] - object where the operation is supposed to be applied
 * @param {string} [existingPathFragment] - comes along with `document`
 */
function validator(operation, index, document, existingPathFragment) {
    if (typeof operation !== "object" ||
        operation === null ||
        Array.isArray(operation)) {
        throw new JsonPatchError("Operation is not an object", "OPERATION_NOT_AN_OBJECT", index, operation, document);
    }
    else if (!objOps[operation.op]) {
        throw new JsonPatchError("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", index, operation, document);
    }
    else if (typeof operation.path !== "string") {
        throw new JsonPatchError("Operation `path` property is not a string", "OPERATION_PATH_INVALID", index, operation, document);
    }
    else if (operation.path.indexOf("/") !== 0 && operation.path.length > 0) {
        // paths that aren't empty string should start with "/"
        throw new JsonPatchError('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", index, operation, document);
    }
    else if ((operation.op === "move" || operation.op === "copy") &&
        typeof operation.from !== "string") {
        throw new JsonPatchError("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", index, operation, document);
    }
    else if ((operation.op === "add" ||
        operation.op === "replace" ||
        operation.op === "test") &&
        operation.value === undefined) {
        throw new JsonPatchError("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", index, operation, document);
    }
    else if ((operation.op === "add" ||
        operation.op === "replace" ||
        operation.op === "test") &&
        hasUndefined(operation.value)) {
        throw new JsonPatchError("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", index, operation, document);
    }
    else if (document) {
        if (operation.op == "add") {
            var pathLen = operation.path.split("/").length;
            var existingPathLen = existingPathFragment.split("/").length;
            if (pathLen !== existingPathLen + 1 && pathLen !== existingPathLen) {
                throw new JsonPatchError("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", index, operation, document);
            }
        }
        else if (operation.op === "replace" ||
            operation.op === "remove" ||
            operation.op === "_get") {
            if (operation.path !== existingPathFragment) {
                throw new JsonPatchError("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", index, operation, document);
            }
        }
        else if (operation.op === "move" || operation.op === "copy") {
            var existingValue = {
                op: "_get",
                path: operation.from,
                value: undefined,
            };
            var error = validate([existingValue], document);
            if (error && error.name === "OPERATION_PATH_UNRESOLVABLE") {
                throw new JsonPatchError("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", index, operation, document);
            }
        }
    }
}
/**
 * Validates a sequence of operations. If `document` parameter is provided, the sequence is additionally validated against the object document.
 * If error is encountered, returns a JsonPatchError object
 * @param sequence
 * @param document
 * @returns {JsonPatchError|undefined}
 */
function validate(sequence, document, externalValidator) {
    try {
        if (!Array.isArray(sequence)) {
            throw new JsonPatchError("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
        }
        if (document) {
            //clone document and sequence so that we can safely try applying operations
            core_applyPatch(helpers_deepClone(document), helpers_deepClone(sequence), externalValidator || true);
        }
        else {
            externalValidator = externalValidator || validator;
            for (var i = 0; i < sequence.length; i++) {
                externalValidator(sequence[i], i, document, undefined);
            }
        }
    }
    catch (e) {
        if (e instanceof JsonPatchError) {
            return e;
        }
        else {
            throw e;
        }
    }
}
// based on https://github.com/epoberezkin/fast-deep-equal
// MIT License
// Copyright (c) 2017 Evgeny Poberezkin
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
function _areEquals(a, b) {
    if (a === b)
        return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
        var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
        if (arrA && arrB) {
            length = a.length;
            if (length != b.length)
                return false;
            for (i = length; i-- !== 0;)
                if (!_areEquals(a[i], b[i]))
                    return false;
            return true;
        }
        if (arrA != arrB)
            return false;
        var keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
            return false;
        for (i = length; i-- !== 0;)
            if (!b.hasOwnProperty(keys[i]))
                return false;
        for (i = length; i-- !== 0;) {
            key = keys[i];
            if (!_areEquals(a[key], b[key]))
                return false;
        }
        return true;
    }
    return a !== a && b !== b;
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/fast-json-patch/src/duplex.js
// @ts-nocheck
// Inlined because of ESM import issues
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2013-2021 Joachim Wester
 * MIT license
 */


var beforeDict = new WeakMap();
class Mirror {
    constructor(obj) {
        Object.defineProperty(this, "obj", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "observers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.obj = obj;
    }
}
class ObserverInfo {
    constructor(callback, observer) {
        Object.defineProperty(this, "callback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "observer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.callback = callback;
        this.observer = observer;
    }
}
function getMirror(obj) {
    return beforeDict.get(obj);
}
function getObserverFromMirror(mirror, callback) {
    return mirror.observers.get(callback);
}
function removeObserverFromMirror(mirror, observer) {
    mirror.observers.delete(observer.callback);
}
/**
 * Detach an observer from an object
 */
function unobserve(root, observer) {
    observer.unobserve();
}
/**
 * Observes changes made to an object, which can then be retrieved using generate
 */
function observe(obj, callback) {
    var patches = [];
    var observer;
    var mirror = getMirror(obj);
    if (!mirror) {
        mirror = new Mirror(obj);
        beforeDict.set(obj, mirror);
    }
    else {
        const observerInfo = getObserverFromMirror(mirror, callback);
        observer = observerInfo && observerInfo.observer;
    }
    if (observer) {
        return observer;
    }
    observer = {};
    mirror.value = _deepClone(obj);
    if (callback) {
        observer.callback = callback;
        observer.next = null;
        var dirtyCheck = () => {
            generate(observer);
        };
        var fastCheck = () => {
            clearTimeout(observer.next);
            observer.next = setTimeout(dirtyCheck);
        };
        if (typeof window !== "undefined") {
            //not Node
            window.addEventListener("mouseup", fastCheck);
            window.addEventListener("keyup", fastCheck);
            window.addEventListener("mousedown", fastCheck);
            window.addEventListener("keydown", fastCheck);
            window.addEventListener("change", fastCheck);
        }
    }
    observer.patches = patches;
    observer.object = obj;
    observer.unobserve = () => {
        generate(observer);
        clearTimeout(observer.next);
        removeObserverFromMirror(mirror, observer);
        if (typeof window !== "undefined") {
            window.removeEventListener("mouseup", fastCheck);
            window.removeEventListener("keyup", fastCheck);
            window.removeEventListener("mousedown", fastCheck);
            window.removeEventListener("keydown", fastCheck);
            window.removeEventListener("change", fastCheck);
        }
    };
    mirror.observers.set(callback, new ObserverInfo(callback, observer));
    return observer;
}
/**
 * Generate an array of patches from an observer
 */
function generate(observer, invertible = false) {
    var mirror = beforeDict.get(observer.object);
    _generate(mirror.value, observer.object, observer.patches, "", invertible);
    if (observer.patches.length) {
        applyPatch(mirror.value, observer.patches);
    }
    var temp = observer.patches;
    if (temp.length > 0) {
        observer.patches = [];
        if (observer.callback) {
            observer.callback(temp);
        }
    }
    return temp;
}
// Dirty check if obj is different from mirror, generate patches and update mirror
function _generate(mirror, obj, patches, path, invertible) {
    if (obj === mirror) {
        return;
    }
    if (typeof obj.toJSON === "function") {
        obj = obj.toJSON();
    }
    var newKeys = _objectKeys(obj);
    var oldKeys = _objectKeys(mirror);
    var changed = false;
    var deleted = false;
    //if ever "move" operation is implemented here, make sure this test runs OK: "should not generate the same patch twice (move)"
    for (var t = oldKeys.length - 1; t >= 0; t--) {
        var key = oldKeys[t];
        var oldVal = mirror[key];
        if (hasOwnProperty(obj, key) &&
            !(obj[key] === undefined &&
                oldVal !== undefined &&
                Array.isArray(obj) === false)) {
            var newVal = obj[key];
            if (typeof oldVal == "object" &&
                oldVal != null &&
                typeof newVal == "object" &&
                newVal != null &&
                Array.isArray(oldVal) === Array.isArray(newVal)) {
                _generate(oldVal, newVal, patches, path + "/" + escapePathComponent(key), invertible);
            }
            else {
                if (oldVal !== newVal) {
                    changed = true;
                    if (invertible) {
                        patches.push({
                            op: "test",
                            path: path + "/" + escapePathComponent(key),
                            value: _deepClone(oldVal),
                        });
                    }
                    patches.push({
                        op: "replace",
                        path: path + "/" + escapePathComponent(key),
                        value: _deepClone(newVal),
                    });
                }
            }
        }
        else if (Array.isArray(mirror) === Array.isArray(obj)) {
            if (invertible) {
                patches.push({
                    op: "test",
                    path: path + "/" + escapePathComponent(key),
                    value: _deepClone(oldVal),
                });
            }
            patches.push({
                op: "remove",
                path: path + "/" + escapePathComponent(key),
            });
            deleted = true; // property has been deleted
        }
        else {
            if (invertible) {
                patches.push({ op: "test", path, value: mirror });
            }
            patches.push({ op: "replace", path, value: obj });
            changed = true;
        }
    }
    if (!deleted && newKeys.length == oldKeys.length) {
        return;
    }
    for (var t = 0; t < newKeys.length; t++) {
        var key = newKeys[t];
        if (!hasOwnProperty(mirror, key) && obj[key] !== undefined) {
            patches.push({
                op: "add",
                path: path + "/" + escapePathComponent(key),
                value: _deepClone(obj[key]),
            });
        }
    }
}
/**
 * Create an array of patches from the differences in two objects
 */
function compare(tree1, tree2, invertible = false) {
    var patches = [];
    _generate(tree1, tree2, patches, "", invertible);
    return patches;
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/fast-json-patch/index.js



/**
 * Default export for backwards compat
 */


/* harmony default export */ const fast_json_patch = ({
    ...core_namespaceObject,
    // ...duplex,
    JsonPatchError: PatchError,
    deepClone: helpers_deepClone,
    escapePathComponent: helpers_escapePathComponent,
    unescapePathComponent: unescapePathComponent,
});


/***/ }),

/***/ 16817:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E7": () => (/* binding */ pipeGeneratorWithSetup),
/* harmony export */   "QJ": () => (/* binding */ IterableReadableStream),
/* harmony export */   "qq": () => (/* binding */ AsyncGeneratorWithSetup),
/* harmony export */   "y2": () => (/* binding */ atee),
/* harmony export */   "zo": () => (/* binding */ concat)
/* harmony export */ });
/*
 * Support async iterator syntax for ReadableStreams in all environments.
 * Source: https://github.com/MattiasBuelens/web-streams-polyfill/pull/122#issuecomment-1627354490
 */
class IterableReadableStream extends ReadableStream {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "reader", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    ensureReader() {
        if (!this.reader) {
            this.reader = this.getReader();
        }
    }
    async next() {
        this.ensureReader();
        try {
            const result = await this.reader.read();
            if (result.done) {
                this.reader.releaseLock(); // release lock when stream becomes closed
                return {
                    done: true,
                    value: undefined,
                };
            }
            else {
                return {
                    done: false,
                    value: result.value,
                };
            }
        }
        catch (e) {
            this.reader.releaseLock(); // release lock when stream becomes errored
            throw e;
        }
    }
    async return() {
        this.ensureReader();
        // If wrapped in a Node stream, cancel is already called.
        if (this.locked) {
            const cancelPromise = this.reader.cancel(); // cancel first, but don't await yet
            this.reader.releaseLock(); // release lock first
            await cancelPromise; // now await it
        }
        return { done: true, value: undefined };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async throw(e) {
        this.ensureReader();
        if (this.locked) {
            const cancelPromise = this.reader.cancel(); // cancel first, but don't await yet
            this.reader.releaseLock(); // release lock first
            await cancelPromise; // now await it
        }
        throw e;
    }
    [Symbol.asyncIterator]() {
        return this;
    }
    static fromReadableStream(stream) {
        // From https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams#reading_the_stream
        const reader = stream.getReader();
        return new IterableReadableStream({
            start(controller) {
                return pump();
                function pump() {
                    return reader.read().then(({ done, value }) => {
                        // When no more data needs to be consumed, close the stream
                        if (done) {
                            controller.close();
                            return;
                        }
                        // Enqueue the next data chunk into our target stream
                        controller.enqueue(value);
                        return pump();
                    });
                }
            },
            cancel() {
                reader.releaseLock();
            },
        });
    }
    static fromAsyncGenerator(generator) {
        return new IterableReadableStream({
            async pull(controller) {
                const { value, done } = await generator.next();
                // When no more data needs to be consumed, close the stream
                if (done) {
                    controller.close();
                }
                // Fix: `else if (value)` will hang the streaming when nullish value (e.g. empty string) is pulled
                controller.enqueue(value);
            },
            async cancel(reason) {
                await generator.return(reason);
            },
        });
    }
}
function atee(iter, length = 2) {
    const buffers = Array.from({ length }, () => []);
    return buffers.map(async function* makeIter(buffer) {
        while (true) {
            if (buffer.length === 0) {
                const result = await iter.next();
                for (const buffer of buffers) {
                    buffer.push(result);
                }
            }
            else if (buffer[0].done) {
                return;
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                yield buffer.shift().value;
            }
        }
    });
}
function concat(first, second) {
    if (Array.isArray(first) && Array.isArray(second)) {
        return first.concat(second);
    }
    else if (typeof first === "string" && typeof second === "string") {
        return (first + second);
    }
    else if (typeof first === "number" && typeof second === "number") {
        return (first + second);
    }
    else if (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "concat" in first &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typeof first.concat === "function") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return first.concat(second);
    }
    else if (typeof first === "object" && typeof second === "object") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const chunk = { ...first };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        for (const [key, value] of Object.entries(second)) {
            if (key in chunk && !Array.isArray(chunk[key])) {
                chunk[key] = concat(chunk[key], value);
            }
            else {
                chunk[key] = value;
            }
        }
        return chunk;
    }
    else {
        throw new Error(`Cannot concat ${typeof first} and ${typeof second}`);
    }
}
class AsyncGeneratorWithSetup {
    constructor(generator, startSetup) {
        Object.defineProperty(this, "generator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "setup", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "firstResult", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "firstResultUsed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        this.generator = generator;
        // setup is a promise that resolves only after the first iterator value
        // is available. this is useful when setup of several piped generators
        // needs to happen in logical order, ie. in the order in which input to
        // to each generator is available.
        this.setup = new Promise((resolve, reject) => {
            this.firstResult = generator.next();
            if (startSetup) {
                this.firstResult.then(startSetup).then(resolve, reject);
            }
            else {
                this.firstResult.then((_result) => resolve(undefined), reject);
            }
        });
    }
    async next(...args) {
        if (!this.firstResultUsed) {
            this.firstResultUsed = true;
            return this.firstResult;
        }
        return this.generator.next(...args);
    }
    async return(value) {
        return this.generator.return(value);
    }
    async throw(e) {
        return this.generator.throw(e);
    }
    [Symbol.asyncIterator]() {
        return this;
    }
}
async function pipeGeneratorWithSetup(to, generator, startSetup, ...args) {
    const gen = new AsyncGeneratorWithSetup(generator, startSetup);
    const setup = await gen.setup;
    return { output: to(gen, setup, ...args), setup };
}


/***/ }),

/***/ 7561:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gu": () => (/* binding */ validate),
/* harmony export */   "v4": () => (/* binding */ v4)
/* harmony export */ });
/* unused harmony exports v1, v3, v5, NIL, version, stringify, parse */
/* harmony import */ var _dist_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14206);

const v1 = _dist_index_js__WEBPACK_IMPORTED_MODULE_0__.v1;
const v3 = _dist_index_js__WEBPACK_IMPORTED_MODULE_0__.v3;
const v4 = _dist_index_js__WEBPACK_IMPORTED_MODULE_0__.v4;
const v5 = _dist_index_js__WEBPACK_IMPORTED_MODULE_0__.v5;
const NIL = _dist_index_js__WEBPACK_IMPORTED_MODULE_0__.NIL;
const version = _dist_index_js__WEBPACK_IMPORTED_MODULE_0__.version;
const validate = _dist_index_js__WEBPACK_IMPORTED_MODULE_0__.validate;
const stringify = _dist_index_js__WEBPACK_IMPORTED_MODULE_0__.stringify;
const parse = _dist_index_js__WEBPACK_IMPORTED_MODULE_0__.parse;


/***/ })

};
;