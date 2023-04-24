import React, { useEffect, useState } from 'react'

export default function StopWatch(){
    
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
  
    useEffect(() => {
      let interval = null;
  
      if (timerOn) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [timerOn]);
    return (
      <div className="clock">
        <p>STOP WATCH</p>
        <h1>{time}</h1>
        <button className='button' onClick={() => setTimerOn(true)}>Start</button>
        <button className='button' onClick={() => setTimerOn(false)}>Stop</button>
        {/* <button className='button' onClick={() => setTimerOn(true)}>Resume</button> */}
        <button className='button' onClick={() => setTime(0)}>Reset</button>
      </div>
    );

};

