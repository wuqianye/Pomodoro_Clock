import React from "react";
import { useState } from "react";
import moment from "moment";
import SessionTimeLeft from "./SessionTimeLeft";

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
        <div id="session">
            <h2>Session</h2>
            <button className="control" onClick={decrementSessionLength}>-</button>
            <button className="control" onClick={incrementSessionLength}>+</button>
            <SessionTimeLeft sessionLength={sessionLength}/>
        </div>
    );
}

export default Session;