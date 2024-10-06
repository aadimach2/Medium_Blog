import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"



export const Signup=()=>{
    return(
        <div className="flex  bg-slate-900">
      {/* Auth Component (Left Side) */}
      <div className="w-1/2 flex items-center justify-center">
        <Auth type="signup" />
      </div>

      {/* Quote Component (Right Side) */}
      <div className="w-1/2">
        <Quote />
      </div>
    </div>
  );
    
}