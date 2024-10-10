import { useParams } from "react-router-dom"
import { Spinner } from "../components/Spinner";
import { FullBlog } from "../components/FullBlog";
import { useBlogId } from "../hooks";


export default function Blog() {

    const  {id}=useParams();
    const {loading,blog}=useBlogId({ id:id as string });

if(loading){
   return <div>
    <div className="h-screen flex flex-col justify-center">
                
    <div className="flex justify-center">
        <Spinner />
    </div>
</div>
</div>
}
if (!blog) {
    return <div>Blog post not found</div>;
  }



  return (
    <>
    <FullBlog blog={blog}/>
    
    </>
  )
}
