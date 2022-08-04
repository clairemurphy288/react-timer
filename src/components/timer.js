import {useState, useEffect} from 'react';
import React, {Component} from 'react';
import "./timer.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function Timer(props) { 
    const [date, setDate] = useState(new Date().toLocaleString());
    const [initialTime, setInitialTime] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    function startTimer(e) {
        const w = Date.now();
        setInitialTime(w);
        console.log("timer started");
    }
    useEffect(()=> {
        if(initialTime !== 0) {
            setInterval(()=> {
                const currentTime = Date.now();
                const delta = currentTime  - initialTime;
                setDate(msToTime(delta));
    
            }, 1000)

        }

    },[initialTime])

    return (
        <div onClick={startTimer} className="body">
            <button className="btn btn-dark ">Start Timer</button>
            <div className="container1">
                <div className = "timer-box">
                    <h1 id="timer">{`${date}` }</h1>
                    
                </div>
                
            </div>
        </div>);

}
function msToTime(duration) {
    // const milliseconds = parseInt((duration % 1000) / 100);
    var seconds = Math.floor((duration / 1000) % 60);
    var minutes = Math.floor((duration / (1000 * 60)) % 60);
    var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds 
  }
 