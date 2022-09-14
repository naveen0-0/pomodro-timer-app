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
    <form onSubmit={Login} className="bg-slate-500 flex flex-col mx-auto p-2 justify-around w-full flex-1">
      <input 
        type="email" 
        required 
        value={email} 
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email..."
        className="bg-slate-300 font-roboto px-2 py-3 rounded-sm border-none outline-none"
        autoFocus={true}
      />

      <input 
        type="text" 
        required 
        value={password} 
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter your password..."
        className="bg-slate-300 font-roboto px-2 py-3 rounded-sm border-none outline-none"
      />
      <button 
        className="font-roboto text-white p-3 rounded-sm bg-black"
        type="submit">Login</button>
    </form>
  )
}
