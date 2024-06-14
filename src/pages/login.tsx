import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useState } from "react";

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleLogin = () => {
    if(email && password){
      login({ email, password, name: "", type: "Consumer" })
      return
    }
    alert("Please fill the form");
  }

  return (
    <div className="flex items-center h-screen">
      <div className="left w-2/5 flex flex-col mx-20 px-10 text-center prose">
        <div className="area bg-base-100 p-5">
        <h3 className="mt-10">Login</h3>
          <form className="flex flex-col gap-5">
            <div className="input-area">
              <input className="w-full input input-bordered" type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-area">
              <input className="input input-bordered w-full" type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <input className="checkbox" type="checkbox" id="signed"  />
                <label htmlFor="signed">Keep me signed in</label>
              </div>
              <Link to={""}>Forget Password</Link>
            </div>
            <button type="button" onClick={handleLogin} className="bg-accent btn text-primary hover:bg-accent ">Login</button>
            <div>
            <hr className="my-5"/>
            <div className="flex gap-3">
              <span>Don't have an account?</span>
              <Link to={""}>Register</Link>
            </div>
            </div>
          </form>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Login