import React, { useState, useEffect } from "react";

export default function CountdownToEnd(){

    const [time, setTime] = useState("");
    
    useEffect(() => {
      let countDownDate = new Date("May 11, 2023 18:00:00").getTime();
      let x = setInterval(() => {
        let now = new Date().getTime();
  
        let distance = countDownDate - now;
  
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
  
        if (distance < 0) {
          clearInterval(x);
          setTime("COUNTDOWN FINISHED");
        }
      }, 1000);
    }, []);

    return (
        <div className="clock">
            <p>CLOCK DOWN</p>
            <p>to end the BootCamp</p>
            <h1>{time}</h1>
        </div>
    )
};
