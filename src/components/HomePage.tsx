import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext";
import playimg from '../images/play.png'
import pauseimg from '../images/pause.png'
import resetimg from '../images/reset.png'
import logoutimg from '../images/logout.png'

export default function HomePage() {
  const { user, signout } = useContext(AuthContext)
  const [ minutes, setMinutes ] = useState(25)
  const [ seconds, setSeconds ] = useState(0)
  const [ timerStarted, setTimerStarted ] = useState(false)
  const [ breakTimerStarted, setBreakTimerStarted ] = useState(false)

  
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
            setTimerStarted(false)
            setBreakTimerStarted(true)
            setMinutes(5)
            setSeconds(0)
            console.log("Normal Timer Dones");
          }else{
            setSeconds(59)
            setMinutes(minutes-1)
          }
        }
      },1000)
    }
    return () => clearInterval(interval)
  },[timerStarted, seconds, minutes])


  useEffect(()=>{
    if(breakTimerStarted){
      interval = setInterval(() => {
        if(seconds>0){
          setSeconds(seconds-1)
        }
        if(seconds === 0){
          if(minutes===0){
            clearInterval(interval)
            setTimerStarted(true)
            setBreakTimerStarted(false)
            setMinutes(25)
            setSeconds(0)
          }else{
            setSeconds(59)
            setMinutes(minutes-1)
          }
        }
      },1000)
    }
    return () => clearInterval(interval)
  },[breakTimerStarted, seconds, minutes])

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

      <div className="min-h-[100px] sm:min-h-full flex flex-col sm:flex-row justify-around items-center bg-slate-900 font-roboto p-2 text-white shadow-md shadow-slate-700">
        <div className="break-all">{user.email}</div>
        <button 
          onClick={signout}
          title="Signout"
        >
          <img src={logoutimg} alt="Logout" className="w-8"/>
        </button>
      </div>

      <div
        className={`flex flex-col justify-center items-center flex-1 bg-slate-900 m-4 min-h-[200px] ${timerStarted && 'bg-green-800'} ${breakTimerStarted&& 'bg-red-800'} shadow-md shadow-slate-700 rounded-md`}
      >

        <div className="text-5xl sm:text-8xl font-anton text-white my-2 flex justify-center items-center p-4 text-center">
          {minutes<10? `0${minutes}`:minutes} : {seconds<10? `0${seconds}`:seconds}
        </div>

        <div className="my-2 w-full p-2 flex justify-around items-center flex-col sm:flex-row h-60 sm:h-max">
          <button
            onClick={startTimer}
            title="Start"
            className="aspect-square bg-indigo-400 shadow-md shadow-slate-800 px-4 py-1 rounded-full"
          >
            <img src={playimg} alt="Play" className="w-4"/>
          </button>
          <button 
            onClick={pauseTimer}
            title="Pause"
            className="aspect-square bg-indigo-400 shadow-md shadow-slate-800 px-4 py-1 rounded-full"
          >
            <img src={pauseimg} alt="Pause" className="w-4"/>
          </button>
          <button
            onClick={resetTimer}
            title="Reset"
            className="aspect-square bg-indigo-400 shadow-md shadow-slate-800 px-4 py-1 rounded-full"
          >
            <img src={resetimg} alt="Reset" className="w-4"/>
          </button>

        </div>


      </div>

    </div>
  )
}
