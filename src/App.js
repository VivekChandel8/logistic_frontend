import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Landing from "./Components/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
