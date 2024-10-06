import { Link } from "react-router-dom"
interface BlogCardProps{
  id:string,
  authorName:string,
  title:string,
  date:string,
  content:string,
  time:string,
  category:string
}
//content short.....
const truncateContent=(content:string)=>{
  const words=content.split(' ');
  if(words.length>12){
    return words.slice(0,12).join(' ')+'...';
  }
  return content

}

const authorInitial=(authorName:string)=>authorName.charAt(0).toUpperCase()

export const BlogCard = ({
  id,
 authorName,
  title,
  date,
  content,
  category
}:BlogCardProps)=>{

  //Name Initial letter


    return (
      <Link to={`/blog/${id}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 cursor-pointer">
        {/* Header */}
      
  
        {/* Navigation */}
        <nav className="flex space-x-4 py-3 border-b border-gray-200 ">
          
        </nav>
  
        {/* Blog posts */}
        <div className="mt-6 space-y-6">
          {/* Blog post item */}
          <div className="flex space-x-4">
            <div className="flex-grow">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold">{authorInitial(authorName)}</div>
                <span className="text-sm text-gray-600">{authorName} ·{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-gray-600 mb-2">{truncateContent(content)}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>5 min read</span>
                <span className="mx-2">·</span>
                <span>{category}</span>
              </div>
            </div>
            <div className="w-24 h-24 bg-gray-200"></div>
          </div>
  
          {/* You would typically map over an array of blog posts here */}
        </div>
      </div>
      </Link>
    );
  }