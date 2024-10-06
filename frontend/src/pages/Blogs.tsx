
import { AppBar } from '../components/AppBar';
import { BlogCard } from '../components/BlogCard';
import SecondHeader from '../components/SecondHeader';
import { useBlogs } from '../hooks';
import { Skeleton } from '../components/Skeleton';
const Blogs = () => {

  const {loading,blogs}=useBlogs();

  if(loading){
    return <div>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
    </div>
  }


  return (
    <>
 
    <AppBar/>
    <SecondHeader/>
    {blogs.map((i)=><BlogCard
        key={i.id}
        id={i.id}
        authorName={i.author.name}
        title={i.title}
        content={i.content}
        date={i.date}
        time={"10:40PM"}
        category={i.category}
    />  )}   
    </>
  )
}

export default Blogs