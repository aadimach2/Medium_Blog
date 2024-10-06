
import { Blog } from "../hooks";
import { AppBar } from "./AppBar";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <AppBar />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4">{blog.title}</h1>
          <p className="text-gray-400 mb-8">
            Post on {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <div className="mb-12">
            <p className="text-xl">{blog.content}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Author</h2>
            <div className="flex items-start">
              <div className="w-16 h-16 bg-blue-500 rounded-full mr-4 flex items-center justify-center text-2xl font-bold">
                {blog.author.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="text-xl font-bold">{blog.author.name || "Anonymous"}</h3>
                <p className="text-gray-400 mt-2">
                  Random catch phrase about the author's ability to grab the user's attention
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};