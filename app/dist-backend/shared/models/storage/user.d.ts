import { z } from 'zod';
export declare const UserSchema: z.ZodObject<{
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
export declare type IUser = z.infer<typeof UserSchema>;
