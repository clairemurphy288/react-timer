import {useState, useEffect} from 'react';
import React, {Component} from 'react';
import "./timer.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function Timer(props) { 
    const [date, setDate] = useState(Date.now());
    const [task, setTask] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    function startTimer(e) {
        console.log("timer started");
        const date = new Date().toLocaleString();
        console.log(date)
        const dateInMili = Date.parse(date)
        console.log(dateInMili);

    }

    return (
        <div onClick={startTimer} className="body">
            <button className="btn btn-dark ">Start Timer</button>
            <div className="container1">
                <div className = "timer-box">
                    <h1 id="timer">{`${hours}:${minutes}:${seconds}` }</h1>
                    
                </div>
                
            </div>
        </div>);

}
 