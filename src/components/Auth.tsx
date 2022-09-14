import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext";
import googleimg from '../images/google.png'
import Register from "./Register";
import Login from "./Login";

export default function Auth() {
  const { googleSignIn } = useContext(AuthContext)
  const [ showLoginPage, setShowLoginPage ] = useState(false);


  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center sm:w-9/12 w-[95%] min-h-[420px]">
        <div className="w-full p-2 font-anton text-2xl">
          Pomodro timer app
        </div>
        <div className="bg-slate-500 w-full flex justify-around items-center p-2 flex-wrap">
          <button 
            disabled={!showLoginPage}
            className ={`border-black border px-4 py-1 font-roboto rounded-full ${!showLoginPage? "bg-slate-900 text-white" :""}`}
            onClick={() => setShowLoginPage(false)}
          >
            signup
          </button>
          <button
            className={`border-black border px-4 py-1 font-roboto rounded-full ${showLoginPage? "bg-slate-900 text-white" :""}`}
            disabled={showLoginPage}
            onClick={() => setShowLoginPage(true)}
          >
            login
          </button>
        </div>
        {showLoginPage? <Login/> : <Register/>}
        <div className="w-full p-2 font-anton text-center text-xl">
          OR
        </div>
        <button onClick={googleSignIn} className="flex items-center w-full sm:w-64 p-3 rounded-sm bg-black text-white">
          <img src={googleimg} alt="Sign In With Google" className="w-5 mx-2"/>
          <div className="font-roboto flex-1">Google Sign In </div>
        </button>
      </div>

    </div>
  )
}
