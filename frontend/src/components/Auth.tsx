import { Link,useNavigate } from "react-router-dom";
import {         signupInput } from "@ashxcx/dom";
import { useState} from "react";
import axios  from "axios";
import { BACKEND_URL } from "../config";
import { Spinner } from "./Spinner";



export const Auth=({type}:{type:"signup"|"signin"})=>{
  const navigate=useNavigate();
  const [postInputs,setPostInputs]=useState<signupInput>({
    name:"",
    email:"",
    password:""
  })
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState< string| null>(null) ;
 
 
  const sendRequest=async()=>{
   
    setError(null) ; 
    setLoading(true);
    try{
      const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type ==="signup"?"signup":"signin"}`,postInputs);
      const jwt= response.data.token;
      localStorage.setItem("token",jwt);
     
    
      navigate('/blogs')
    }catch(e){
      if(axios.isAxiosError(e)){
        if(e.response){
         
          if(e.response.status===411){
            setError("Please enter valid inputs");
          }
          else if(e.response.status===403){
            setError("Invalid email and password. Please check your credential")
          }
        }
      }
      else{
        setError("Invalid Email or password please try again later")
      }
 
  
  }}

    return (
      <div className=" w-full max-w-md px-8  bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an account</h2>
      
        <form>
          {type==="signup"?<div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" id="username" placeholder="Enter your name" 
              onChange={(e)=>{setPostInputs ({
                   ...postInputs,
                   name:e.target.value})} }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            
          </div>:null}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" placeholder="m@example.com" 
            onChange={(e)=>setPostInputs({...postInputs,
              email:e.target.value
            })}
                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" placeholder="Enter your password" 
             onChange={(e)=>{setPostInputs({
              ...postInputs,
                  password:e.target.value
                })
                }}
                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                 
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button onClick={sendRequest} type="button" className="w-full bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:shadow-outline">
            {type==="signup" ?"Sign up":"Sign in"}
          </button>
        </form>
        <p className="text-center text-gray-600 mb-6 ">
          {type==="signin" ?"Dont have an account?": "Already have an account?" }
          <Link to={type==="signin"?"/signup":"/signin"}>
          {type==="signin"?(<span style={{textDecoration:'underline'}}>Signup</span>
        ):(
        <span style={{textDecoration:'underline'}}>Sigin</span>
        )}
        </Link>
        </p>
        {loading?(<Spinner/>):""}
      </div>
    );
}

