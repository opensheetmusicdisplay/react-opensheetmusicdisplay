import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Osmd from "./lib/Osmd";
import sampleFile from "./assets/music/Beethoven_AnDieFerneGeliebte.xml";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">OpenSheetMusicDisplay in React</h1>
      </header>
      <Osmd file={sampleFile} />
    </div>
  );
};

export default App;
