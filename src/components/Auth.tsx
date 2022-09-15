import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext";
import googleimg from '../images/google.png'
import Register from "./Register";
import Login from "./Login";


export default function Auth() {
  const { googleSignIn } = useContext(AuthContext)
  const [ showLoginPage, setShowLoginPage ] = useState(false);


  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900">
      <div className="flex flex-col justify-center items-center sm:w-9/12 w-[95%] min-h-[420px]">
        <div className="text-center w-full p-2 font-anton text-4xl text-slate-300">
          POMODORO TIMER APP
        </div>
        <div className="w-full flex justify-around items-center p-2 flex-wrap">
          <button 
            disabled={!showLoginPage}
            className ={`px-4 py-1 font-roboto rounded-full ${!showLoginPage? "bg-slate-500 text-black border-none" :"border-slate-300 border text-slate-300"}`}
            onClick={() => setShowLoginPage(false)}
          >
            signup
          </button>
          <button
            className={`px-4 py-1 font-roboto rounded-full ${showLoginPage? "bg-slate-500 text-black border-none" :"border-slate-300 border text-slate-300"}`}
            disabled={showLoginPage}
            onClick={() => setShowLoginPage(true)}
          >
            login
          </button>
        </div>
        {showLoginPage? <Login/> : <Register/>}
        <div className="w-full p-2 font-anton text-center text-xl text-slate-400">
          OR
        </div>
        <button onClick={googleSignIn} className="flex items-center w-full sm:w-64 p-3 rounded-sm bg-black text-slate-300">
          <img src={googleimg} alt="Sign In With Google" className="w-5 mx-2"/>
          <div className="font-roboto flex-1">Google Sign In </div>
        </button>
      </div>

    </div>
  )
}
