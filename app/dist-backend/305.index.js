"use strict";
exports.id = 305;
exports.ids = [305];
exports.modules = {

/***/ 5269:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BD": () => (/* reexport */ BaseLangChain),
  "qV": () => (/* reexport */ BaseLanguageModel)
});

// UNUSED EXPORTS: calculateMaxTokens, getEmbeddingContextSize, getModelContextSize, getModelNameForTiktoken

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/js-sha1/hash.js
// @ts-nocheck
// Inlined to deal with portability issues with importing crypto module
/*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/*jslint bitwise: true */

var root = typeof window === "object" ? window : {};
var HEX_CHARS = "0123456789abcdef".split("");
var EXTRA = [-2147483648, 8388608, 32768, 128];
var SHIFT = [24, 16, 8, 0];
var OUTPUT_TYPES = (/* unused pure expression or super */ null && (["hex", "array", "digest", "arrayBuffer"]));
var blocks = [];
function Sha1(sharedMemory) {
    if (sharedMemory) {
        blocks[0] =
            blocks[16] =
                blocks[1] =
                    blocks[2] =
                        blocks[3] =
                            blocks[4] =
                                blocks[5] =
                                    blocks[6] =
                                        blocks[7] =
                                            blocks[8] =
                                                blocks[9] =
                                                    blocks[10] =
                                                        blocks[11] =
                                                            blocks[12] =
                                                                blocks[13] =
                                                                    blocks[14] =
                                                                        blocks[15] =
                                                                            0;
        this.blocks = blocks;
    }
    else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    this.h0 = 0x67452301;
    this.h1 = 0xefcdab89;
    this.h2 = 0x98badcfe;
    this.h3 = 0x10325476;
    this.h4 = 0xc3d2e1f0;
    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
}
Sha1.prototype.update = function (message) {
    if (this.finalized) {
        return;
    }
    var notString = typeof message !== "string";
    if (notString && message.constructor === root.ArrayBuffer) {
        message = new Uint8Array(message);
    }
    var code, index = 0, i, length = message.length || 0, blocks = this.blocks;
    while (index < length) {
        if (this.hashed) {
            this.hashed = false;
            blocks[0] = this.block;
            blocks[16] =
                blocks[1] =
                    blocks[2] =
                        blocks[3] =
                            blocks[4] =
                                blocks[5] =
                                    blocks[6] =
                                        blocks[7] =
                                            blocks[8] =
                                                blocks[9] =
                                                    blocks[10] =
                                                        blocks[11] =
                                                            blocks[12] =
                                                                blocks[13] =
                                                                    blocks[14] =
                                                                        blocks[15] =
                                                                            0;
        }
        if (notString) {
            for (i = this.start; index < length && i < 64; ++index) {
                blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
            }
        }
        else {
            for (i = this.start; index < length && i < 64; ++index) {
                code = message.charCodeAt(index);
                if (code < 0x80) {
                    blocks[i >> 2] |= code << SHIFT[i++ & 3];
                }
                else if (code < 0x800) {
                    blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                }
                else if (code < 0xd800 || code >= 0xe000) {
                    blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                }
                else {
                    code =
                        0x10000 +
                            (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
                    blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                }
            }
        }
        this.lastByteIndex = i;
        this.bytes += i - this.start;
        if (i >= 64) {
            this.block = blocks[16];
            this.start = i - 64;
            this.hash();
            this.hashed = true;
        }
        else {
            this.start = i;
        }
    }
    if (this.bytes > 4294967295) {
        this.hBytes += (this.bytes / 4294967296) << 0;
        this.bytes = this.bytes % 4294967296;
    }
    return this;
};
Sha1.prototype.finalize = function () {
    if (this.finalized) {
        return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
        if (!this.hashed) {
            this.hash();
        }
        blocks[0] = this.block;
        blocks[16] =
            blocks[1] =
                blocks[2] =
                    blocks[3] =
                        blocks[4] =
                            blocks[5] =
                                blocks[6] =
                                    blocks[7] =
                                        blocks[8] =
                                            blocks[9] =
                                                blocks[10] =
                                                    blocks[11] =
                                                        blocks[12] =
                                                            blocks[13] =
                                                                blocks[14] =
                                                                    blocks[15] =
                                                                        0;
    }
    blocks[14] = (this.hBytes << 3) | (this.bytes >>> 29);
    blocks[15] = this.bytes << 3;
    this.hash();
};
Sha1.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4;
    var f, j, t, blocks = this.blocks;
    for (j = 16; j < 80; ++j) {
        t = blocks[j - 3] ^ blocks[j - 8] ^ blocks[j - 14] ^ blocks[j - 16];
        blocks[j] = (t << 1) | (t >>> 31);
    }
    for (j = 0; j < 20; j += 5) {
        f = (b & c) | (~b & d);
        t = (a << 5) | (a >>> 27);
        e = (t + f + e + 1518500249 + blocks[j]) << 0;
        b = (b << 30) | (b >>> 2);
        f = (a & b) | (~a & c);
        t = (e << 5) | (e >>> 27);
        d = (t + f + d + 1518500249 + blocks[j + 1]) << 0;
        a = (a << 30) | (a >>> 2);
        f = (e & a) | (~e & b);
        t = (d << 5) | (d >>> 27);
        c = (t + f + c + 1518500249 + blocks[j + 2]) << 0;
        e = (e << 30) | (e >>> 2);
        f = (d & e) | (~d & a);
        t = (c << 5) | (c >>> 27);
        b = (t + f + b + 1518500249 + blocks[j + 3]) << 0;
        d = (d << 30) | (d >>> 2);
        f = (c & d) | (~c & e);
        t = (b << 5) | (b >>> 27);
        a = (t + f + a + 1518500249 + blocks[j + 4]) << 0;
        c = (c << 30) | (c >>> 2);
    }
    for (; j < 40; j += 5) {
        f = b ^ c ^ d;
        t = (a << 5) | (a >>> 27);
        e = (t + f + e + 1859775393 + blocks[j]) << 0;
        b = (b << 30) | (b >>> 2);
        f = a ^ b ^ c;
        t = (e << 5) | (e >>> 27);
        d = (t + f + d + 1859775393 + blocks[j + 1]) << 0;
        a = (a << 30) | (a >>> 2);
        f = e ^ a ^ b;
        t = (d << 5) | (d >>> 27);
        c = (t + f + c + 1859775393 + blocks[j + 2]) << 0;
        e = (e << 30) | (e >>> 2);
        f = d ^ e ^ a;
        t = (c << 5) | (c >>> 27);
        b = (t + f + b + 1859775393 + blocks[j + 3]) << 0;
        d = (d << 30) | (d >>> 2);
        f = c ^ d ^ e;
        t = (b << 5) | (b >>> 27);
        a = (t + f + a + 1859775393 + blocks[j + 4]) << 0;
        c = (c << 30) | (c >>> 2);
    }
    for (; j < 60; j += 5) {
        f = (b & c) | (b & d) | (c & d);
        t = (a << 5) | (a >>> 27);
        e = (t + f + e - 1894007588 + blocks[j]) << 0;
        b = (b << 30) | (b >>> 2);
        f = (a & b) | (a & c) | (b & c);
        t = (e << 5) | (e >>> 27);
        d = (t + f + d - 1894007588 + blocks[j + 1]) << 0;
        a = (a << 30) | (a >>> 2);
        f = (e & a) | (e & b) | (a & b);
        t = (d << 5) | (d >>> 27);
        c = (t + f + c - 1894007588 + blocks[j + 2]) << 0;
        e = (e << 30) | (e >>> 2);
        f = (d & e) | (d & a) | (e & a);
        t = (c << 5) | (c >>> 27);
        b = (t + f + b - 1894007588 + blocks[j + 3]) << 0;
        d = (d << 30) | (d >>> 2);
        f = (c & d) | (c & e) | (d & e);
        t = (b << 5) | (b >>> 27);
        a = (t + f + a - 1894007588 + blocks[j + 4]) << 0;
        c = (c << 30) | (c >>> 2);
    }
    for (; j < 80; j += 5) {
        f = b ^ c ^ d;
        t = (a << 5) | (a >>> 27);
        e = (t + f + e - 899497514 + blocks[j]) << 0;
        b = (b << 30) | (b >>> 2);
        f = a ^ b ^ c;
        t = (e << 5) | (e >>> 27);
        d = (t + f + d - 899497514 + blocks[j + 1]) << 0;
        a = (a << 30) | (a >>> 2);
        f = e ^ a ^ b;
        t = (d << 5) | (d >>> 27);
        c = (t + f + c - 899497514 + blocks[j + 2]) << 0;
        e = (e << 30) | (e >>> 2);
        f = d ^ e ^ a;
        t = (c << 5) | (c >>> 27);
        b = (t + f + b - 899497514 + blocks[j + 3]) << 0;
        d = (d << 30) | (d >>> 2);
        f = c ^ d ^ e;
        t = (b << 5) | (b >>> 27);
        a = (t + f + a - 899497514 + blocks[j + 4]) << 0;
        c = (c << 30) | (c >>> 2);
    }
    this.h0 = (this.h0 + a) << 0;
    this.h1 = (this.h1 + b) << 0;
    this.h2 = (this.h2 + c) << 0;
    this.h3 = (this.h3 + d) << 0;
    this.h4 = (this.h4 + e) << 0;
};
Sha1.prototype.hex = function () {
    this.finalize();
    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;
    return (HEX_CHARS[(h0 >> 28) & 0x0f] +
        HEX_CHARS[(h0 >> 24) & 0x0f] +
        HEX_CHARS[(h0 >> 20) & 0x0f] +
        HEX_CHARS[(h0 >> 16) & 0x0f] +
        HEX_CHARS[(h0 >> 12) & 0x0f] +
        HEX_CHARS[(h0 >> 8) & 0x0f] +
        HEX_CHARS[(h0 >> 4) & 0x0f] +
        HEX_CHARS[h0 & 0x0f] +
        HEX_CHARS[(h1 >> 28) & 0x0f] +
        HEX_CHARS[(h1 >> 24) & 0x0f] +
        HEX_CHARS[(h1 >> 20) & 0x0f] +
        HEX_CHARS[(h1 >> 16) & 0x0f] +
        HEX_CHARS[(h1 >> 12) & 0x0f] +
        HEX_CHARS[(h1 >> 8) & 0x0f] +
        HEX_CHARS[(h1 >> 4) & 0x0f] +
        HEX_CHARS[h1 & 0x0f] +
        HEX_CHARS[(h2 >> 28) & 0x0f] +
        HEX_CHARS[(h2 >> 24) & 0x0f] +
        HEX_CHARS[(h2 >> 20) & 0x0f] +
        HEX_CHARS[(h2 >> 16) & 0x0f] +
        HEX_CHARS[(h2 >> 12) & 0x0f] +
        HEX_CHARS[(h2 >> 8) & 0x0f] +
        HEX_CHARS[(h2 >> 4) & 0x0f] +
        HEX_CHARS[h2 & 0x0f] +
        HEX_CHARS[(h3 >> 28) & 0x0f] +
        HEX_CHARS[(h3 >> 24) & 0x0f] +
        HEX_CHARS[(h3 >> 20) & 0x0f] +
        HEX_CHARS[(h3 >> 16) & 0x0f] +
        HEX_CHARS[(h3 >> 12) & 0x0f] +
        HEX_CHARS[(h3 >> 8) & 0x0f] +
        HEX_CHARS[(h3 >> 4) & 0x0f] +
        HEX_CHARS[h3 & 0x0f] +
        HEX_CHARS[(h4 >> 28) & 0x0f] +
        HEX_CHARS[(h4 >> 24) & 0x0f] +
        HEX_CHARS[(h4 >> 20) & 0x0f] +
        HEX_CHARS[(h4 >> 16) & 0x0f] +
        HEX_CHARS[(h4 >> 12) & 0x0f] +
        HEX_CHARS[(h4 >> 8) & 0x0f] +
        HEX_CHARS[(h4 >> 4) & 0x0f] +
        HEX_CHARS[h4 & 0x0f]);
};
Sha1.prototype.toString = Sha1.prototype.hex;
Sha1.prototype.digest = function () {
    this.finalize();
    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;
    return [
        (h0 >> 24) & 0xff,
        (h0 >> 16) & 0xff,
        (h0 >> 8) & 0xff,
        h0 & 0xff,
        (h1 >> 24) & 0xff,
        (h1 >> 16) & 0xff,
        (h1 >> 8) & 0xff,
        h1 & 0xff,
        (h2 >> 24) & 0xff,
        (h2 >> 16) & 0xff,
        (h2 >> 8) & 0xff,
        h2 & 0xff,
        (h3 >> 24) & 0xff,
        (h3 >> 16) & 0xff,
        (h3 >> 8) & 0xff,
        h3 & 0xff,
        (h4 >> 24) & 0xff,
        (h4 >> 16) & 0xff,
        (h4 >> 8) & 0xff,
        h4 & 0xff,
    ];
};
Sha1.prototype.array = Sha1.prototype.digest;
Sha1.prototype.arrayBuffer = function () {
    this.finalize();
    var buffer = new ArrayBuffer(20);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    return buffer;
};
const insecureHash = (message) => {
    return new Sha1(true).update(message)["hex"]();
};

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/hash.js


// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/messages/index.js
var messages = __webpack_require__(20596);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/caches.js


/**
 * This cache key should be consistent across all versions of langchain.
 * It is currently NOT consistent across versions of langchain.
 *
 * A huge benefit of having a remote cache (like redis) is that you can
 * access the cache from different processes/machines. The allows you to
 * seperate concerns and scale horizontally.
 *
 * TODO: Make cache key consistent across versions of langchain.
 */
const getCacheKey = (...strings) => insecureHash(strings.join("_"));
function deserializeStoredGeneration(storedGeneration) {
    if (storedGeneration.message !== undefined) {
        return {
            text: storedGeneration.text,
            message: mapStoredMessageToChatMessage(storedGeneration.message),
        };
    }
    else {
        return { text: storedGeneration.text };
    }
}
function serializeGeneration(generation) {
    const serializedValue = {
        text: generation.text,
    };
    if (generation.message !== undefined) {
        serializedValue.message = generation.message.toDict();
    }
    return serializedValue;
}
/**
 * Base class for all caches. All caches should extend this class.
 */
class BaseCache {
}
const GLOBAL_MAP = new Map();
/**
 * A cache for storing LLM generations that stores data in memory.
 */
class InMemoryCache extends BaseCache {
    constructor(map) {
        super();
        Object.defineProperty(this, "cache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cache = map ?? new Map();
    }
    /**
     * Retrieves data from the cache using a prompt and an LLM key. If the
     * data is not found, it returns null.
     * @param prompt The prompt used to find the data.
     * @param llmKey The LLM key used to find the data.
     * @returns The data corresponding to the prompt and LLM key, or null if not found.
     */
    lookup(prompt, llmKey) {
        return Promise.resolve(this.cache.get(getCacheKey(prompt, llmKey)) ?? null);
    }
    /**
     * Updates the cache with new data using a prompt and an LLM key.
     * @param prompt The prompt used to store the data.
     * @param llmKey The LLM key used to store the data.
     * @param value The data to be stored.
     */
    async update(prompt, llmKey, value) {
        this.cache.set(getCacheKey(prompt, llmKey), value);
    }
    /**
     * Returns a global instance of InMemoryCache using a predefined global
     * map as the initial cache.
     * @returns A global instance of InMemoryCache.
     */
    static global() {
        return new InMemoryCache(GLOBAL_MAP);
    }
}

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/prompt_values.js
var prompt_values = __webpack_require__(42526);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/utils/async_caller.js
var async_caller = __webpack_require__(57072);
// EXTERNAL MODULE: ./node_modules/base64-js/index.js
var base64_js = __webpack_require__(9229);
;// CONCATENATED MODULE: ./node_modules/js-tiktoken/dist/chunk-DRAV7SPV.js


var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/utils.ts
function never(_) {
}
function bytePairMerge(piece, ranks) {
  let parts = Array.from(
    { length: piece.length },
    (_, i) => ({ start: i, end: i + 1 })
  );
  while (parts.length > 1) {
    let minRank = null;
    for (let i = 0; i < parts.length - 1; i++) {
      const slice = piece.slice(parts[i].start, parts[i + 1].end);
      const rank = ranks.get(slice.join(","));
      if (rank == null)
        continue;
      if (minRank == null || rank < minRank[0]) {
        minRank = [rank, i];
      }
    }
    if (minRank != null) {
      const i = minRank[1];
      parts[i] = { start: parts[i].start, end: parts[i + 1].end };
      parts.splice(i + 1, 1);
    } else {
      break;
    }
  }
  return parts;
}
function bytePairEncode(piece, ranks) {
  if (piece.length === 1)
    return [ranks.get(piece.join(","))];
  return bytePairMerge(piece, ranks).map((p) => ranks.get(piece.slice(p.start, p.end).join(","))).filter((x) => x != null);
}
function escapeRegex(str) {
  return str.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
}
var _Tiktoken = class {
  /** @internal */
  specialTokens;
  /** @internal */
  inverseSpecialTokens;
  /** @internal */
  patStr;
  /** @internal */
  textEncoder = new TextEncoder();
  /** @internal */
  textDecoder = new TextDecoder("utf-8");
  /** @internal */
  rankMap = /* @__PURE__ */ new Map();
  /** @internal */
  textMap = /* @__PURE__ */ new Map();
  constructor(ranks, extendedSpecialTokens) {
    this.patStr = ranks.pat_str;
    const uncompressed = ranks.bpe_ranks.split("\n").filter(Boolean).reduce((memo, x) => {
      const [_, offsetStr, ...tokens] = x.split(" ");
      const offset = Number.parseInt(offsetStr, 10);
      tokens.forEach((token, i) => memo[token] = offset + i);
      return memo;
    }, {});
    for (const [token, rank] of Object.entries(uncompressed)) {
      const bytes = base64_js.toByteArray(token);
      this.rankMap.set(bytes.join(","), rank);
      this.textMap.set(rank, bytes);
    }
    this.specialTokens = { ...ranks.special_tokens, ...extendedSpecialTokens };
    this.inverseSpecialTokens = Object.entries(this.specialTokens).reduce((memo, [text, rank]) => {
      memo[rank] = this.textEncoder.encode(text);
      return memo;
    }, {});
  }
  encode(text, allowedSpecial = [], disallowedSpecial = "all") {
    const regexes = new RegExp(this.patStr, "ug");
    const specialRegex = _Tiktoken.specialTokenRegex(
      Object.keys(this.specialTokens)
    );
    const ret = [];
    const allowedSpecialSet = new Set(
      allowedSpecial === "all" ? Object.keys(this.specialTokens) : allowedSpecial
    );
    const disallowedSpecialSet = new Set(
      disallowedSpecial === "all" ? Object.keys(this.specialTokens).filter(
        (x) => !allowedSpecialSet.has(x)
      ) : disallowedSpecial
    );
    if (disallowedSpecialSet.size > 0) {
      const disallowedSpecialRegex = _Tiktoken.specialTokenRegex([
        ...disallowedSpecialSet
      ]);
      const specialMatch = text.match(disallowedSpecialRegex);
      if (specialMatch != null) {
        throw new Error(
          `The text contains a special token that is not allowed: ${specialMatch[0]}`
        );
      }
    }
    let start = 0;
    while (true) {
      let nextSpecial = null;
      let startFind = start;
      while (true) {
        specialRegex.lastIndex = startFind;
        nextSpecial = specialRegex.exec(text);
        if (nextSpecial == null || allowedSpecialSet.has(nextSpecial[0]))
          break;
        startFind = nextSpecial.index + 1;
      }
      const end = nextSpecial?.index ?? text.length;
      for (const match of text.substring(start, end).matchAll(regexes)) {
        const piece = this.textEncoder.encode(match[0]);
        const token2 = this.rankMap.get(piece.join(","));
        if (token2 != null) {
          ret.push(token2);
          continue;
        }
        ret.push(...bytePairEncode(piece, this.rankMap));
      }
      if (nextSpecial == null)
        break;
      let token = this.specialTokens[nextSpecial[0]];
      ret.push(token);
      start = nextSpecial.index + nextSpecial[0].length;
    }
    return ret;
  }
  decode(tokens) {
    const res = [];
    let length = 0;
    for (let i2 = 0; i2 < tokens.length; ++i2) {
      const token = tokens[i2];
      const bytes = this.textMap.get(token) ?? this.inverseSpecialTokens[token];
      if (bytes != null) {
        res.push(bytes);
        length += bytes.length;
      }
    }
    const mergedArray = new Uint8Array(length);
    let i = 0;
    for (const bytes of res) {
      mergedArray.set(bytes, i);
      i += bytes.length;
    }
    return this.textDecoder.decode(mergedArray);
  }
};
var Tiktoken = _Tiktoken;
__publicField(Tiktoken, "specialTokenRegex", (tokens) => {
  return new RegExp(tokens.map((i) => escapeRegex(i)).join("|"), "g");
});
function getEncodingNameForModel(model) {
  switch (model) {
    case "gpt2": {
      return "gpt2";
    }
    case "code-cushman-001":
    case "code-cushman-002":
    case "code-davinci-001":
    case "code-davinci-002":
    case "cushman-codex":
    case "davinci-codex":
    case "davinci-002":
    case "text-davinci-002":
    case "text-davinci-003": {
      return "p50k_base";
    }
    case "code-davinci-edit-001":
    case "text-davinci-edit-001": {
      return "p50k_edit";
    }
    case "ada":
    case "babbage":
    case "babbage-002":
    case "code-search-ada-code-001":
    case "code-search-babbage-code-001":
    case "curie":
    case "davinci":
    case "text-ada-001":
    case "text-babbage-001":
    case "text-curie-001":
    case "text-davinci-001":
    case "text-search-ada-doc-001":
    case "text-search-babbage-doc-001":
    case "text-search-curie-doc-001":
    case "text-search-davinci-doc-001":
    case "text-similarity-ada-001":
    case "text-similarity-babbage-001":
    case "text-similarity-curie-001":
    case "text-similarity-davinci-001": {
      return "r50k_base";
    }
    case "gpt-3.5-turbo-16k-0613":
    case "gpt-3.5-turbo-16k":
    case "gpt-3.5-turbo-0613":
    case "gpt-3.5-turbo-0301":
    case "gpt-3.5-turbo":
    case "gpt-4-32k-0613":
    case "gpt-4-32k-0314":
    case "gpt-4-32k":
    case "gpt-4-0613":
    case "gpt-4-0314":
    case "gpt-4":
    case "gpt-3.5-turbo-1106":
    case "gpt-35-turbo":
    case "gpt-4-1106-preview":
    case "gpt-4-vision-preview":
    case "text-embedding-ada-002": {
      return "cl100k_base";
    }
    default:
      throw new Error("Unknown model");
  }
}



;// CONCATENATED MODULE: ./node_modules/js-tiktoken/dist/lite.js


;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/tiktoken.js


const cache = {};
const caller = /* #__PURE__ */ new async_caller/* AsyncCaller */.L({});
async function getEncoding(encoding) {
    if (!(encoding in cache)) {
        cache[encoding] = caller
            .fetch(`https://tiktoken.pages.dev/js/${encoding}.json`)
            .then((res) => res.json())
            .then((data) => new Tiktoken(data))
            .catch((e) => {
            delete cache[encoding];
            throw e;
        });
    }
    return await cache[encoding];
}
async function tiktoken_encodingForModel(model) {
    return getEncoding(getEncodingNameForModel(model));
}

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/runnables/base.js + 3 modules
var base = __webpack_require__(22042);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/language_models/base.js






// https://www.npmjs.com/package/js-tiktoken
const getModelNameForTiktoken = (modelName) => {
    if (modelName.startsWith("gpt-3.5-turbo-16k")) {
        return "gpt-3.5-turbo-16k";
    }
    if (modelName.startsWith("gpt-3.5-turbo-")) {
        return "gpt-3.5-turbo";
    }
    if (modelName.startsWith("gpt-4-32k")) {
        return "gpt-4-32k";
    }
    if (modelName.startsWith("gpt-4-")) {
        return "gpt-4";
    }
    return modelName;
};
const getEmbeddingContextSize = (modelName) => {
    switch (modelName) {
        case "text-embedding-ada-002":
            return 8191;
        default:
            return 2046;
    }
};
const getModelContextSize = (modelName) => {
    switch (getModelNameForTiktoken(modelName)) {
        case "gpt-3.5-turbo-16k":
            return 16384;
        case "gpt-3.5-turbo":
            return 4096;
        case "gpt-4-32k":
            return 32768;
        case "gpt-4":
            return 8192;
        case "text-davinci-003":
            return 4097;
        case "text-curie-001":
            return 2048;
        case "text-babbage-001":
            return 2048;
        case "text-ada-001":
            return 2048;
        case "code-davinci-002":
            return 8000;
        case "code-cushman-001":
            return 2048;
        default:
            return 4097;
    }
};
const calculateMaxTokens = async ({ prompt, modelName, }) => {
    let numTokens;
    try {
        numTokens = (await encodingForModel(getModelNameForTiktoken(modelName))).encode(prompt).length;
    }
    catch (error) {
        console.warn("Failed to calculate number of tokens, falling back to approximate count");
        // fallback to approximate calculation if tiktoken is not available
        // each token is ~4 characters: https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them#
        numTokens = Math.ceil(prompt.length / 4);
    }
    const maxTokens = getModelContextSize(modelName);
    return maxTokens - numTokens;
};
const getVerbosity = () => false;
/**
 * Base class for language models, chains, tools.
 */
class BaseLangChain extends base/* Runnable */.eq {
    get lc_attributes() {
        return {
            callbacks: undefined,
            verbose: undefined,
        };
    }
    constructor(params) {
        super(params);
        /**
         * Whether to print out response text.
         */
        Object.defineProperty(this, "verbose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "callbacks", {
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
        Object.defineProperty(this, "metadata", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.verbose = params.verbose ?? getVerbosity();
        this.callbacks = params.callbacks;
        this.tags = params.tags ?? [];
        this.metadata = params.metadata ?? {};
    }
}
/**
 * Base class for language models.
 */
class BaseLanguageModel extends BaseLangChain {
    /**
     * Keys that the language model accepts as call options.
     */
    get callKeys() {
        return ["stop", "timeout", "signal", "tags", "metadata", "callbacks"];
    }
    constructor({ callbacks, callbackManager, ...params }) {
        super({
            callbacks: callbacks ?? callbackManager,
            ...params,
        });
        /**
         * The async caller should be used by subclasses to make any async calls,
         * which will thus benefit from the concurrency and retry logic.
         */
        Object.defineProperty(this, "caller", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_encoding", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (typeof params.cache === "object") {
            this.cache = params.cache;
        }
        else if (params.cache) {
            this.cache = InMemoryCache.global();
        }
        else {
            this.cache = undefined;
        }
        this.caller = new async_caller/* AsyncCaller */.L(params ?? {});
    }
    async getNumTokens(content) {
        // TODO: Figure out correct value.
        if (typeof content !== "string") {
            return 0;
        }
        // fallback to approximate calculation if tiktoken is not available
        let numTokens = Math.ceil(content.length / 4);
        if (!this._encoding) {
            try {
                this._encoding = await tiktoken_encodingForModel("modelName" in this
                    ? getModelNameForTiktoken(this.modelName)
                    : "gpt2");
            }
            catch (error) {
                console.warn("Failed to calculate number of tokens, falling back to approximate count", error);
            }
        }
        if (this._encoding) {
            try {
                numTokens = this._encoding.encode(content).length;
            }
            catch (error) {
                console.warn("Failed to calculate number of tokens, falling back to approximate count", error);
            }
        }
        return numTokens;
    }
    static _convertInputToPromptValue(input) {
        if (typeof input === "string") {
            return new prompt_values/* StringPromptValue */.nw(input);
        }
        else if (Array.isArray(input)) {
            return new prompt_values/* ChatPromptValue */.GU(input.map(messages/* coerceMessageLikeToMessage */.E1));
        }
        else {
            return input;
        }
    }
    /**
     * Get the identifying parameters of the LLM.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _identifyingParams() {
        return {};
    }
    /**
     * Create a unique cache key for a specific call to a specific language model.
     * @param callOptions Call options for the model
     * @returns A unique cache key.
     */
    _getSerializedCacheKeyParametersForCall(callOptions) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const params = {
            ...this._identifyingParams(),
            ...callOptions,
            _type: this._llmType(),
            _model: this._modelType(),
        };
        const filteredEntries = Object.entries(params).filter(([_, value]) => value !== undefined);
        const serializedEntries = filteredEntries
            .map(([key, value]) => `${key}:${JSON.stringify(value)}`)
            .sort()
            .join(",");
        return serializedEntries;
    }
    /**
     * @deprecated
     * Return a json-like object representing this LLM.
     */
    serialize() {
        return {
            ...this._identifyingParams(),
            _type: this._llmType(),
            _model: this._modelType(),
        };
    }
    /**
     * @deprecated
     * Load an LLM from a json-like object describing it.
     */
    static async deserialize(_data) {
        throw new Error("Use .toJSON() instead");
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/language_models/base.js


/***/ }),

/***/ 76305:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* binding */ BaseChain)
});

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/outputs.js
const RUN_KEY = "__run";
/**
 * Chunk of a single generation. Used for streaming.
 */
class GenerationChunk {
    constructor(fields) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "generationInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.text = fields.text;
        this.generationInfo = fields.generationInfo;
    }
    concat(chunk) {
        return new GenerationChunk({
            text: this.text + chunk.text,
            generationInfo: {
                ...this.generationInfo,
                ...chunk.generationInfo,
            },
        });
    }
}
class ChatGenerationChunk extends (/* unused pure expression or super */ null && (GenerationChunk)) {
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.message = fields.message;
    }
    concat(chunk) {
        return new ChatGenerationChunk({
            text: this.text + chunk.text,
            generationInfo: {
                ...this.generationInfo,
                ...chunk.generationInfo,
            },
            message: this.message.concat(chunk.message),
        });
    }
}

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/callbacks/manager.js + 13 modules
var manager = __webpack_require__(34235);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/callbacks/manager.js

// EXTERNAL MODULE: ./node_modules/@langchain/core/language_models/base.js + 7 modules
var base = __webpack_require__(5269);
;// CONCATENATED MODULE: ./node_modules/langchain/dist/chains/base.js



/**
 * Base interface that all chains must implement.
 */
class BaseChain extends base/* BaseLangChain */.BD {
    get lc_namespace() {
        return ["langchain", "chains", this._chainType()];
    }
    constructor(fields, 
    /** @deprecated */
    verbose, 
    /** @deprecated */
    callbacks) {
        if (arguments.length === 1 &&
            typeof fields === "object" &&
            !("saveContext" in fields)) {
            // fields is not a BaseMemory
            const { memory, callbackManager, ...rest } = fields;
            super({ ...rest, callbacks: callbackManager ?? rest.callbacks });
            this.memory = memory;
        }
        else {
            // fields is a BaseMemory
            super({ verbose, callbacks });
            this.memory = fields;
        }
    }
    /** @ignore */
    _selectMemoryInputs(values) {
        const valuesForMemory = { ...values };
        if ("signal" in valuesForMemory) {
            delete valuesForMemory.signal;
        }
        if ("timeout" in valuesForMemory) {
            delete valuesForMemory.timeout;
        }
        return valuesForMemory;
    }
    /**
     * Invoke the chain with the provided input and returns the output.
     * @param input Input values for the chain run.
     * @param config Optional configuration for the Runnable.
     * @returns Promise that resolves with the output of the chain run.
     */
    async invoke(input, config) {
        const fullValues = await this._formatValues(input);
        const callbackManager_ = await manager/* CallbackManager.configure */.Ye.configure(config?.callbacks, this.callbacks, config?.tags, this.tags, config?.metadata, this.metadata, { verbose: this.verbose });
        const runManager = await callbackManager_?.handleChainStart(this.toJSON(), fullValues, undefined, undefined, undefined, undefined, config?.runName);
        let outputValues;
        try {
            outputValues = await (fullValues.signal
                ? Promise.race([
                    this._call(fullValues, runManager),
                    new Promise((_, reject) => {
                        fullValues.signal?.addEventListener("abort", () => {
                            reject(new Error("AbortError"));
                        });
                    }),
                ])
                : this._call(fullValues, runManager));
        }
        catch (e) {
            await runManager?.handleChainError(e);
            throw e;
        }
        if (!(this.memory == null)) {
            await this.memory.saveContext(this._selectMemoryInputs(input), outputValues);
        }
        await runManager?.handleChainEnd(outputValues);
        // add the runManager's currentRunId to the outputValues
        Object.defineProperty(outputValues, RUN_KEY, {
            value: runManager ? { runId: runManager?.runId } : undefined,
            configurable: true,
        });
        return outputValues;
    }
    _validateOutputs(outputs) {
        const missingKeys = this.outputKeys.filter((k) => !(k in outputs));
        if (missingKeys.length) {
            throw new Error(`Missing output keys: ${missingKeys.join(", ")} from chain ${this._chainType()}`);
        }
    }
    async prepOutputs(inputs, outputs, returnOnlyOutputs = false) {
        this._validateOutputs(outputs);
        if (this.memory) {
            await this.memory.saveContext(inputs, outputs);
        }
        if (returnOnlyOutputs) {
            return outputs;
        }
        return { ...inputs, ...outputs };
    }
    /**
     * Return a json-like object representing this chain.
     */
    serialize() {
        throw new Error("Method not implemented.");
    }
    /** @deprecated Use .invoke() instead. Will be removed in 0.2.0. */
    async run(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    input, config) {
        const inputKeys = this.inputKeys.filter((k) => !this.memory?.memoryKeys.includes(k) ?? true);
        const isKeylessInput = inputKeys.length <= 1;
        if (!isKeylessInput) {
            throw new Error(`Chain ${this._chainType()} expects multiple inputs, cannot use 'run' `);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const values = inputKeys.length ? { [inputKeys[0]]: input } : {};
        const returnValues = await this.call(values, config);
        const keys = Object.keys(returnValues);
        if (keys.length === 1) {
            return returnValues[keys[0]];
        }
        throw new Error("return values have multiple keys, `run` only supported when one key currently");
    }
    async _formatValues(values) {
        const fullValues = { ...values };
        if (fullValues.timeout && !fullValues.signal) {
            fullValues.signal = AbortSignal.timeout(fullValues.timeout);
            delete fullValues.timeout;
        }
        if (!(this.memory == null)) {
            const newValues = await this.memory.loadMemoryVariables(this._selectMemoryInputs(values));
            for (const [key, value] of Object.entries(newValues)) {
                fullValues[key] = value;
            }
        }
        return fullValues;
    }
    /**
     * @deprecated Use .invoke() instead. Will be removed in 0.2.0.
     *
     * Run the core logic of this chain and add to output if desired.
     *
     * Wraps _call and handles memory.
     */
    async call(values, config, 
    /** @deprecated */
    tags) {
        const parsedConfig = { tags, ...(0,manager/* parseCallbackConfigArg */.QH)(config) };
        return this.invoke(values, parsedConfig);
    }
    /**
     * @deprecated Use .batch() instead. Will be removed in 0.2.0.
     *
     * Call the chain on all inputs in the list
     */
    async apply(inputs, config) {
        return Promise.all(inputs.map(async (i, idx) => this.call(i, config?.[idx])));
    }
    /**
     * Load a chain from a json-like object describing it.
     */
    static async deserialize(data, values = {}) {
        switch (data._type) {
            case "llm_chain": {
                const { LLMChain } = await Promise.all(/* import() */[__webpack_require__.e(407), __webpack_require__.e(730)]).then(__webpack_require__.bind(__webpack_require__, 66730));
                return LLMChain.deserialize(data);
            }
            case "sequential_chain": {
                const { SequentialChain } = await __webpack_require__.e(/* import() */ 663).then(__webpack_require__.bind(__webpack_require__, 47776));
                return SequentialChain.deserialize(data);
            }
            case "simple_sequential_chain": {
                const { SimpleSequentialChain } = await __webpack_require__.e(/* import() */ 663).then(__webpack_require__.bind(__webpack_require__, 47776));
                return SimpleSequentialChain.deserialize(data);
            }
            case "stuff_documents_chain": {
                const { StuffDocumentsChain } = await Promise.all(/* import() */[__webpack_require__.e(407), __webpack_require__.e(730), __webpack_require__.e(54)]).then(__webpack_require__.bind(__webpack_require__, 64628));
                return StuffDocumentsChain.deserialize(data);
            }
            case "map_reduce_documents_chain": {
                const { MapReduceDocumentsChain } = await Promise.all(/* import() */[__webpack_require__.e(407), __webpack_require__.e(730), __webpack_require__.e(54)]).then(__webpack_require__.bind(__webpack_require__, 64628));
                return MapReduceDocumentsChain.deserialize(data);
            }
            case "refine_documents_chain": {
                const { RefineDocumentsChain } = await Promise.all(/* import() */[__webpack_require__.e(407), __webpack_require__.e(730), __webpack_require__.e(54)]).then(__webpack_require__.bind(__webpack_require__, 64628));
                return RefineDocumentsChain.deserialize(data);
            }
            case "vector_db_qa": {
                const { VectorDBQAChain } = await Promise.all(/* import() */[__webpack_require__.e(407), __webpack_require__.e(730), __webpack_require__.e(644)]).then(__webpack_require__.bind(__webpack_require__, 52644));
                return VectorDBQAChain.deserialize(data, values);
            }
            case "api_chain": {
                const { APIChain } = await Promise.all(/* import() */[__webpack_require__.e(407), __webpack_require__.e(730), __webpack_require__.e(89)]).then(__webpack_require__.bind(__webpack_require__, 34856));
                return APIChain.deserialize(data);
            }
            default:
                throw new Error(`Invalid prompt type in config: ${data._type}`);
        }
    }
}


/***/ })

};
;