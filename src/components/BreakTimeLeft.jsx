import React, { useEffect } from "react";
import { useState } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const BreakTimeLeft = ({breakLength}) => {
    const [intervalID, setIntervalID] = useState(null);
    const [timeLeft, setTimeLeft] = useState(breakLength);

    useEffect(() => {
        setTimeLeft(breakLength);
    }, [breakLength]);

    const isStarted = intervalID != null;
    const handleStartStopClick = () => {
        if (isStarted) {
            clearInterval(intervalID);
            setIntervalID(null);
        } else {
            const newIntervalID = setInterval(() => {
                setTimeLeft(prevTimeLeft => {
                    if (prevTimeLeft >= 1) {
                        return prevTimeLeft - 1;
                    } else {
                        return prevTimeLeft;
                    }
                });
            }, 1000);
            setIntervalID(newIntervalID);
        }
    }

    const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", {trim: false});

    return (
        <div>
            <p className="timer">{formattedTimeLeft}</p>
            <button className="start" onClick={handleStartStopClick}>{isStarted? "Stop" : "Start"}</button>
        </div>
    );
}

export default BreakTimeLeft;