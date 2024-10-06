import { useNavigate } from "react-router-dom";


export default function SecondHeader() {

   
 const navigate=useNavigate();
 
 const handlePublish=()=>{
    navigate('/publish')
 }
 


  return (
  <>
        <header className="flex justify-between items-center py-5">
        <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <input type="text" placeholder="Search" className="bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200" />
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300" onClick={handlePublish}>Publish</button>
        </header>
  </>
  )
}
