import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React, {Component} from 'react';
export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            seconds: 0,
            minutes: 0,
            hours: 0,
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
        this.minuteTime = setInterval(() => {
            this.minutes()
            
        }, 60000);
        this.hourTime = setInterval(() => {
            this.hours()
        }, 3600000 );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
        clearInterval(this.minuteTime);
        clearInterval(this.hourTime)
      }
    
      tick() {    
        this.setState({      
            seconds: this.state.seconds + 1, 
        });  
    }
    minutes() {
        this.setState({
            seconds: 0,
            minutes: this.state.minutes + 1
        })
    }
    hours() {
        this.setState({
            seconds: 0,
            minutes: 0,
            hours: this.state.hours + 1
        })
    }
 
    render() {
        return (<div class="container">
            <h1>{`${this.state.hours}:${this.state.minutes}:${this.state.seconds}` }</h1>
            <button >Start</button>
            <button>Pause</button>
            <button>Stop</button>
        </div>);
    }
}