import React from "react";
import "./App.css";
import TicTacToe from "./TicTacToe";
import Navigation from "./Navigation.jsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from "./About.jsx"
import Home from "./Home.js";
function App() {
  return (
    <>
    <div className="App">

      <Router>
        <Routes>
       
        <Route path="/" element={ <Navigate replace to="/home" />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/TicTacToe" element={<TicTacToe/>}/>
        <Route path="/About" element={<About/>} />
        <Route path="/Navigation" element={<Navigation/>} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
