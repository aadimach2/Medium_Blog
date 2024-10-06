import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"




export const Signin=()=>{

    return (
    <div className="flex h-screen bg-slate-900">
      {/* Auth Component (Left Side) */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Auth type="signin" />
      </div>

      {/* Quote Component (Right Side) */}
      <div className="md:w-1/2  hidden lg:block">
        <Quote />
      </div>
    </div>
    )
}
