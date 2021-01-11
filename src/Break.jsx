import React from "react";
import { useState } from "react";
import moment from "moment";
import BreakTimeLeft from "./BreakTimeLeft";

const Break = () => {
    const [breakLength, setBreakLength] = useState(5 * 60);

    const decrementBreakLength = () => {
        if (breakLength >= 60) {
            setBreakLength(breakLength - 60);
        } else {
            setBreakLength(0);
        }
    }

    const incrementBreakLength = () => {
        setBreakLength(breakLength + 60);
    }

    const breakLengthInMinutes = moment.duration(breakLength, "s").minutes();

    return (
        <div id="break">
            <h2>Break</h2>
            <button className="control" onClick={decrementBreakLength}>-</button>
            <button className="control" onClick={incrementBreakLength}>+</button>
            <BreakTimeLeft breakLength={breakLength}/>
        </div>
    );
}

export default Break;