import React from "react";
import { useState } from "react";
import moment from "moment";
import TimeLeft from "./TimeLeft";

const Session = () => {
    const [sessionLength, setSessionLength] = useState(25 * 60);

    const decrementSessionLength = () => {
        if (sessionLength >= 60) {
            setSessionLength(sessionLength - 60);
        } else {
            setSessionLength(0);
        }
    }

    const incrementSessionLength = () => {
        setSessionLength(sessionLength + 60);
    }

    const sessionLengthInMinutes = moment.duration(sessionLength, "s").minutes();

    return (
        <div>
            <p>Session</p>
            <p>{sessionLengthInMinutes}</p>
            <button onClick={decrementSessionLength}>-</button>
            <button onClick={incrementSessionLength}>+</button>
            <TimeLeft sessionLength={sessionLength}/>
        </div>
    );
}

export default Session;