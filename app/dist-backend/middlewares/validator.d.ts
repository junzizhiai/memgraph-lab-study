import { ZodRawShape, z } from 'zod';
import { ClassType } from 'class-transformer-validator';
import { Handler } from 'express';
export declare const validateParams: <T extends ZodRawShape>(schema: ClassType<object> | z.ZodObject<T, z.UnknownKeysParam, z.ZodTypeAny, { [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, any>[k]; }, { [k_1 in keyof z.baseObjectInputType<T>]: z.baseObjectInputType<T>[k_1]; }>) => Handler;
export declare const validateQuery: <T extends ZodRawShape>(schema: ClassType<object> | z.ZodObject<T, z.UnknownKeysParam, z.ZodTypeAny, { [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, any>[k]; }, { [k_1 in keyof z.baseObjectInputType<T>]: z.baseObjectInputType<T>[k_1]; }>) => Handler;
export interface ValidateBodyOptions {
    isSkipped: boolean;
    canBeEmpty: boolean;
}
export declare const validateBody: <T extends ZodRawShape>(schema: ClassType<object> | z.ZodObject<T, z.UnknownKeysParam, z.ZodTypeAny, { [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<T>, any>[k]; }, { [k_1 in keyof z.baseObjectInputType<T>]: z.baseObjectInputType<T>[k_1]; }>, options?: Partial<ValidateBodyOptions> | undefined) => Handler;
