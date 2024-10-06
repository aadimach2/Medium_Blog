import {z} from "zod";

export const signupInput=z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
  })




export const signinInput=z.object({
    email:z.string().email(),
    password:z.string().min(6)
})


export const blogInput=z.object({
    title:z.string(),
    content:z.string(),
    category:z.string(),

})



export const updateBlog=z.object({
    title:z.string(),
    content:z.string(),
    id:z.string(),
    category:z.string(),
})



export type signupInput=z.infer<typeof signupInput>
export type signinInput=z.infer<typeof signinInput>
export type blogInput=z.infer<typeof blogInput>
export type updateBlog=z.infer<typeof updateBlog>




































































































