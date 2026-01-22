import { useState, useEffect } from "react";

function Timer() {

    const [time, setTime] = useState(0)
    const [runnig, setRunning] = useState(true)

    useEffect(()=>{
        if (!runnig) return;

        const interval = setInterval(()=>{
            setTime(prevtime=>prevtime+1);
        }, 1000);

        return() => clearInterval(interval)
    },[runnig]);

    return (
    <div>
      <p>Seconds passed: {time}</p>

      <button onClick={() => setRunning(false)}>
        Stop
      </button>
      <button onClick={() => setRunning(true)}>
        Start
      </button>
      <button onClick={() => setTime(0)}>
        reset
      </button>
    </div>
  );
}

export default Timer