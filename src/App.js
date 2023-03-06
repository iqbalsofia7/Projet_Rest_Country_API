import './App.css'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Card from './component/Card'
import Navbar from './component/Navbar.js';
import { useEffect } from 'react';
import React from 'react';


function App() {
  //Dark Mode 
  const [dark, setDark] = useState(false)
  const ChangeMode =()=>{
    setDark(!dark)
  }
  //State qui contiendra l'API quand la page sera lancée
  const [data, setData] = useState([])
  useEffect (() => {
    //url de l'API
    fetch("https://restcountries.com/v3.1/all")
    //Récupérer les données
    .then(res => res.json())
    //Assigner les données
    .then(data => setData(data))
    .catch(err => console.log(err));
}, [])

  //Input Search
  const [searchValue, setSearchValue] = useState('');  
  const [filteredCard, setFilteredCard] = useState(data);
  //Value de l'input Search
  const Rechercher =(e)=>{
    setSearchValue(e.target.value)
  }

  //Filtrer les recherches selon le NOM du PAYS
  useEffect (() => {
    const filteredItem = data.filter(item => item.name.common.toLowerCase().includes(searchValue.toLowerCase()))
    setFilteredCard(filteredItem)
  }, [searchValue, data])

  //Afficher la carte dans le component Card
    const [choix, setChoix] = useState(null);
    const showCard = (country) => {
      setChoix(country);
    }

  return(
    <div className={dark ? 'AppDark' : 'App'}>
      {/* Navbar contenant le darkMode  */}
      <Navbar rechercher={Rechercher} darkMode={ChangeMode} dark={dark}/>
      <Routes>
        {/* Page d'Accueil qui contient toutes les cards et la barre de recherche  */}
        <Route path="/"  element={<Home rechercher={Rechercher} showCard={showCard} dark={dark} filterdCard={filteredCard} data={data} setData={setData}/>}/>
        {/* Route pour les Cards et Border Country Card  */}
        <Route path="/pays/:id" element={<Card country={choix} showCard={showCard} dark={dark} data={data}/>}/>
      </Routes> 
    </div>
  )
}

export default App
