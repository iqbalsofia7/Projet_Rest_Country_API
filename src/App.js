import './App.css'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Accueil from './pages/Accueil';
import Erreur from './component/Erreur.js'


function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/"  element={<Accueil />}/>
        <Route path="*"  element={<Erreur />}/>
      </Routes> 
    </div>
  )
}

export default App
