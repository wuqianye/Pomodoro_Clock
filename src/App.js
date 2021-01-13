import React from "react";
import "./App.css";
import Break from "./components/Break";
import Session from "./components/Session";

function App() {
    return (
        <div className="App">
            <h1>Pomodoro Clock</h1>
            <div id="main">
                <Break />
                <Session />
            </div>
        </div>
    );
}

export default App;
