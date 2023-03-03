import './App.css'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Card from './component/Card'
import Navbar from './component/Navbar.js';
import { useEffect } from 'react';

function App() {
  //Dark Mode 
  const [dark, setDark] = useState(false)
  const ChangeMode =()=>{
    setDark(!dark)
  }
  //API Pays
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
  //API pour les filtres
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


  return(
    <div className={dark ? 'AppDark' : 'App'}>
      <Navbar rechercher={Rechercher} darkMode={ChangeMode} dark={dark}/>
      <Routes>
        <Route path="/"  element={<Home dark={dark} filterdCard={filteredCard} data={data} setData={setData}/>}/>
        <Route path="/:pays" element={<Card/>}/>
      </Routes> 
    </div>
  )
}

export default App
