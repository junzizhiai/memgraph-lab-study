import { ValidationError } from 'class-validator';
import { z } from 'zod';
export declare const extractZodErrors: (error: z.ZodError) => string;
export declare const extractClassValidationErrors: (errors: ValidationError[]) => string;
