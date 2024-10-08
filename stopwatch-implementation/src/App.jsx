import { useEffect, useRef, useState } from "react";
import "./index.css";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [elaspedTime, setElapsedTime] = useState(0);

  const intervalId = useRef(null);
  const startRef = useRef(0);

  useEffect(() => {
    if (isStart) {
      startRef.current = Date.now() - elaspedTime; 
      intervalId.current = setInterval(() => {
        setElapsedTime(Date.now() - startRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalId.current);
    };
  }, [isStart]);

  const handleStart = () => {
    setIsStart(!isStart);

   
  };

  const handleReset = () => {
    setElapsedTime(0)
    setIsStart(false);
  };

  const timeFormat = ()=>{
    let mins = Math.floor(elaspedTime/(1000*60)%60);
    let secs = Math.floor(elaspedTime/(1000)%60)

    
      secs = String(secs).padStart(2,"0");

      return `${mins}:${secs}`
  }

  return (
    <div className="text-3xl bg-zinc-300 w-[500px] h-[200px] m-auto flex flex-col items-center gap-5 pt-5 rounded-md shadow-xl">
      <h1 className="text-3xl font-bold">Stopwatch</h1>
      <p className="font-bold">Time: <span className="text-gray-500">{timeFormat()}</span></p>
      <div className="flex gap-10">
        <button className="px-2 py-1 border border-gray-600 rounded-md shadow-lg" onClick={() => handleStart()}>
          {isStart ? "Stop" : "Start"}
        </button>
        <button className="px-2 py-1 border border-gray-600 rounded-md shadow-lg" onClick={() => handleReset()}>Reset</button>
      </div>
    </div>
  );
}

export default App;
