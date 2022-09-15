import React,{ useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import googleimg from '../images/google.png'

export default function Register() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("")
  const { signup } = useContext(AuthContext)

  const signUp = (e:any) => {
    e.preventDefault()
    signup(email,password)
  }

  return (

      <form onSubmit={signUp} className="flex flex-col mx-auto p-2 justify-around w-full flex-1 min-h-[200px]">
        <input 
          type="email" 
          required 
          value={email} 
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email..."
          className="bg-slate-700 font-roboto px-2 py-3 rounded-sm border-none outline-none text-slate-300"
          autoFocus={true}
        />

        <input 
          type="text" 
          required 
          value={password} 
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your password..."
          className="bg-slate-700 font-roboto px-2 py-3 rounded-sm border-none outline-none text-slate-300"
        />
        <button 
          className="font-roboto text-slate-300 p-3 rounded-sm bg-black"
          type="submit">Create Account</button>
      </form>


  )
}
