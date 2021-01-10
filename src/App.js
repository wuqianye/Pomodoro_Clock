import React from "react";
import "./App.css";
import Break from "./Break";
import Session from "./Session";

function App() {
    return (
        <div className="App">
            <h1>Pomodoro Clock</h1>
            <Break />
            <Session />
        </div>
    );
}

export default App;
