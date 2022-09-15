import { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("")
  const { login } = useContext(AuthContext)

  const Login = (e:any) => {
    e.preventDefault()
    login(email,password)
  }

  return (
    <form onSubmit={Login} className="flex flex-col mx-auto p-2 justify-around w-full flex-1">
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
        type="submit">Login</button>
    </form>
  )
}
