import './App.css'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Card from './component/Card'


function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/:pays" element={<Card/>}/>
      </Routes> 
    </div>
  )
}

export default App
