import React, {Component} from "react"; 
import "./Time.scss"

export class Time extends Component {
    
    elapsedTime(date){
        const time = new Date (date);
        const currentTime = new Date();
        let timeElapsed = currentTime.getTime() - time.getTime();
        timeElapsed *= 10 ** -3;
        timeElapsed /= (60 * 60 * 24);
        timeElapsed = Math.round(timeElapsed);
        return <h1 className = "time">{`Posted ${timeElapsed} days ago.`}</h1>;
    }

    render(){
        return this.elapsedTime(this.props.date);
    }
}