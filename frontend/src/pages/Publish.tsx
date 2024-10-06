import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import { AppBar } from "../components/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config";


export default function Publish () {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category,setCategory]=useState('')
  const navigate = useNavigate();

  const handlePublish = async () => {
    const token=localStorage.getItem("token");
   const response =await axios.post(`${BACKEND_URL}/api/v1/blog`,{
    title,
    content,
    category
   },{
            headers:{
                'Authorization':`Bearer ${token}`
            }
   })

   navigate(`/blog/${response.data.id}`)
  };

  return (
   
    <div className="min-h-screen bg-gray-100">
       <AppBar/>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-4xl font-bold mb-4 p-2 border-b-2 border-gray-200 focus:outline-none focus:border-gray-500"
            />
            <textarea
              placeholder="Tell your story..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-64 text-lg p-2 border-b-2 border-gray-200 focus:outline-none focus:border-gray-500 resize-none"
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full text-lg mt-4 p-2 bg-transparent border-b-2 border-gray-700 focus:outline-none focus:border-gray-500 text-white placeholder-gray-500"
                />
          </div>
          <div className="bg-gray-50 px-6 py-4">
            <button
              onClick={handlePublish}
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
            >
              Publish The Post
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};