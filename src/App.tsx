import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import HomePage from "./components/HomePage"
import Auth from "./components/Auth"
import Loading from './components/Loading'

export default function App() {
  const { user,loading } = useContext(AuthContext);

  if(loading) return <Loading/>

  return (
    <div>
      {user===null ? <Auth/> : <HomePage/>}
    </div>
  )
}
