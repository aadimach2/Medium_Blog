import { z } from "zod";
export declare const signupInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export declare const signinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const blogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    category: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    category: string;
}, {
    title: string;
    content: string;
    category: string;
}>;
export declare const updateBlog: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodString;
    category: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    category: string;
    id: string;
}, {
    title: string;
    content: string;
    category: string;
    id: string;
}>;
export type signupInput = z.infer<typeof signupInput>;
export type signinInput = z.infer<typeof signinInput>;
export type blogInput = z.infer<typeof blogInput>;
export type updateBlog = z.infer<typeof updateBlog>;
