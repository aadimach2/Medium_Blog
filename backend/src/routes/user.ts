import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode,sign,verify} from 'hono/jwt'
import { signupInput,signinInput } from '@ashxcx/dom'

export const userRouter=new Hono()


const ap=new Hono<{
    Bindings:{
      DATABASE_URL:string,
      JWT_SECRET:string
    }
  }>()


  
userRouter.post('/signup',async (c)=>{

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  try{
    const body=await c.req.json();
    const {success}=signupInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message:"Inputs not correct"
      })
    }
    const user=await prisma.user.create({
      data:{
        email:body.email,
        password:body.password,
        name:body.name,
      }
    })
    const token=await sign({id:user.id},c.env.JWT_SECRET)
  
  return c.json({message:"user created successfully",token})
   }
   catch(e){
    console.log(e);
    c.status(411);
    return c.text('Invalid')
  }
  
  
  })
  
 
  userRouter.post('/signin',async (c)=>{
    const body=await c.req.json()
    const {success} =signinInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message:"invalid input"
      })
    }
    const prisma =new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

 
    
    
  try{
    const user=await prisma.user.findUnique({
      where:{
        email:body.email,
        password:body.password,
      }
    })
    if(!user){
      c.status(403);
      return c.json({message:"invalid credential"});
    }
    const jwt=await sign({
      id:user.id
    },c.env.JWT_SECRET);
    return c.json({token:jwt})
  }
  catch(error){
  console.log(error);
  c.status(411);
  return c.text('Invalid');
  }
 
  })