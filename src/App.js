import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./components/timer";

function App() {
  return ( 
  <Router>
  <Routes>
    <Route path="/" element = {<Timer/>}></Route>
  </Routes>
  </Router>

  );
}

export default App;
