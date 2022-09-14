import loadingsvg from '../images/mainload.svg'

export default function Loading() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div>
        <div className="w-full p-2 font-anton text-3xl">
          Pomodro Timer App
        </div>
        <div className='flex justify-center items-center'>
          <img src={loadingsvg} alt="Loading"/>
        </div>
      </div>
    </div>
  )
}
