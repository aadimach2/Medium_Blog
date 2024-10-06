import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode,sign,verify} from 'hono/jwt'
import { blogInput,updateBlog, } from '@ashxcx/dom'

export const blogRouter=new Hono()


const app=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
      userId:string;
    }
}>()

blogRouter.use('/*', async (c, next) => {
  const header = c.req.header("Authorization") || "";
  const token = header.split(" ")[1];
  try{
    const response=await verify(token,c.env.JWT_SECRET);
    console.log("RESPONSE:",response);
    if(response){
      c.set("userId",response.id);
      await next();
    }
    else{
      c.status(403)
      return c.json({error:"unauthorized"})
    }
  }catch(e){
    c.status(403);
    return c.json({message:"you are not logged in"})
    
  }
   
    })

    blogRouter.post('/', async (c) => {
      console.log("Blog post route handler started");
      
      let body;
      try {
        body = await c.req.json();
        console.log("Received body:",(body));
      } catch (error) {
        console.log("Error parsing request body:", error);
        c.status(400);
      }
    const {success}=blogInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({message:"Invalid inputsss"})
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
    try{
     
      const authorId = c.get("userId");
if (!authorId) {
  console.log(" found in context:",authorId);
}
    
      const blog= await prisma.post.create({
        data:{
          title:body.title,
          content:body.content,
          authorId,
          category:body.category,
          
        }

      })
      return c.json({id:blog.id})
    }catch(e){
      console.error(e);
      c.status(500)
      return c.json({error:"failed to create blogpost"})
    } 
  
  })



  blogRouter.put('/',async (c)=>{
    const body=await c.req.json()
    console.log("Recieved body:",(body));
  
   const {success}=updateBlog.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message:"invalid inputs"
      })

    }
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
try{
    const blog=await prisma.post.update({
      where:{
        id:Number(body.id)
      },
      data:{
        title:body.title,
        content:body.content,
        category:body.category
        
      }

    })
  
    return c.json({
      id:blog.id
    })
  
  }catch(e){
    console.log(e)
  }


  })


  blogRouter.get('/bulk',async (c)=>{

    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
      const blogs=await prisma.post.findMany({
        include:{
          author:{
            select:{
              name:true
            }
          }
        }
      })

    return c.json({blogs})
  }
  catch(e){
      console.log(e)}
  })


  blogRouter.get('/:id',async (c)=>{
    const id=parseInt(c.req.param('id'));
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
      const posts=await prisma.post.findFirst({
        where:{
          id:id
        },
        select:{
          title:true,
          content:true,
          date:true,
          author:{
            select:{
              name:true
            }
          }
        }
  
      })
      return c.json({
        posts
      });
    }catch(e){
        c.status(411);
        return c.json({
          message:"error while fetching blog post"
        })
    }
  })


