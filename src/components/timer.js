import {useState, useEffect} from 'react';
import React, {Component} from 'react';
import "./timer.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function Timer(props) { 
    const [date, setDate] = useState(new Date().toLocaleString());
    const [initialTime, setInitialTime] = useState(0);
    const [pause, setPause] = useState("pause")
    const [interval, setNewInt] = useState(0);
    const [deltaTime, setDelta] = useState(0);
    function startTimer(e) {
        const w = Date.now();
        setInitialTime(w);
        console.log("timer started");
    }
    useEffect(()=> {
        if(initialTime !== 0) {
            var i = setInterval(()=> {
                const currentTime = Date.now();
                const delta = currentTime  - initialTime;
                setDate(msToTime(delta));
    
            }, 1000);
            setNewInt(i)

        }

    },[initialTime]);



    function pauseTimer(e) {
        if (pause === "pause") {
            setNewInt(clearInterval(interval));
            console.log("pause timer");
            setPause("unpause");

        } else if(pause === "unpause") {
            setPause("pause")

            
            var i = setInterval(()=> {
                const currentTime = Date.now();
                const delta = (currentTime  - initialTime) + deltaTime;
                setDelta(delta);
                setDate(msToTime(delta));
    
            }, 1000);
            setNewInt(i)
            //set valid interval
        }
    }
    function stopTimer(e) {
        console.log("stop timer");

    }

    return (
        <div className="body">
            <button onClick={startTimer}  className="btn btn-dark mx-1">start</button>
            <button onClick={pauseTimer} className="btn btn-dark mx-1">{pause}</button>
            <button onClick={stopTimer} className="btn btn-dark mx-1">stop</button>

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
 