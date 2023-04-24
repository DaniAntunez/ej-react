import React, { useEffect, useState } from 'react'

export default function DigitalClock(){
    
    const [clockState, setClockState] = useState();
  
    useEffect(() => {
      setInterval(() => {
        const date = new Date();
        setClockState(date.toLocaleTimeString());
      }, 1000);
    }, []);

    return (
        <div className="clock">
            <p>DIGITAL CLOCK</p>
            <p>actual time</p>
            <h1>{clockState}</h1>
        </div>
    );

  };

