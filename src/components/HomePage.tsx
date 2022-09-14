import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext";


export default function HomePage() {
  const { user, signout } = useContext(AuthContext)
  const [ minutes, setMinutes ] = useState(1)
  const [ seconds, setSeconds ] = useState(0)
  const [ timerDone, setTimerDone ] = useState(false);
  const [ timerStarted, setTimerStarted ] = useState(false)

  let interval: string | number | NodeJS.Timer | undefined;

  useEffect(()=>{
    if(timerStarted){
      interval = setInterval(() => {
        if(seconds>0){
          setSeconds(seconds-1)
        }
  
        if(seconds === 0){
          if(minutes===0){
            clearInterval(interval)
            setTimerDone(true)
          }else{
            setSeconds(59)
            setMinutes(minutes-1)
          }
        }
      },1000)
    }

    return () => clearInterval(interval)
  },[timerStarted, seconds, minutes])

  const startTimer = () => setTimerStarted(true)
  const pauseTimer = () => setTimerStarted(false)
  const resetTimer = () => {
    clearInterval(interval)
    setTimerStarted(false)
    setMinutes(25)
    setSeconds(0)
  }

  return (
    <div className="bg-slate-400 min-h-screen flex flex-col">

      <div className="flex justify-around items-center bg-slate-900 font-roboto p-2 text-white shadow-md shadow-slate-700">
        <div>{user.email}</div>
        <button 
          className="px-4 py-1 font-roboto rounded-full bg-red-700 shadow-sm shadow-slate-700 hover:bg-red-900"
          onClick={signout}
        >signout</button>
      </div>

      <div
        className="flex flex-col justify-center items-center flex-1 bg-slate-900 m-4 min-h-[200px]"
      >
        <div className=" text-6xl sm:text-9xl font-anton text-white my-2">
          {minutes<10? `0${minutes}`:minutes} : {seconds<10? `0${seconds}`:seconds}
        </div>

        <div className="my-2 w-full p-2 flex justify-around items-center">
          <button
            onClick={startTimer}
            className="bg-indigo-400 shadow-md shadow-slate-800 px-4 py-1 font-roboto rounded-full"
          >
            Start
          </button>
          <button 
            onClick={pauseTimer}
            className="bg-indigo-400 shadow-md shadow-slate-800 px-4 py-1 font-roboto rounded-full"
          >
            Pause
          </button>
          <button
            onClick={resetTimer}
            className="bg-indigo-400 shadow-md shadow-slate-800 px-4 py-1 font-roboto rounded-full"
          >
            Reset
          </button>
        </div>
      </div>

    </div>
  )
}
