import './App.css'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Card from './component/Card'
import Navbar from './component/Navbar.js';
import { useEffect } from 'react';

function App() {
  //API Pays
  const [data, setData] = useState([])

  //Input Search
  const [searchValue, setSearchValue] = useState('');  
  //API
  useEffect (() => {
    //url de l'API
    fetch("https://restcountries.com/v3.1/all")
    //Récupérer les données
    .then(res => res.json())
    //Assigner les données
    .then(data => setData(data))
    .catch(err => console.log(err));
}, [])
  const [filteredCard, setFilteredCard] = useState(data);

  //Value de l'input Search
  const Rechercher =(e)=>{
    setSearchValue(e.target.value)
  }
  //Filtrer les recherches
  useEffect (() => {
    const filteredItem = data.filter(item => item.name.common.toLowerCase().includes(searchValue.toLowerCase()))
    setFilteredCard(filteredItem)
  }, [searchValue, data])


  return(
    <div className="App">
      <Navbar rechercher={Rechercher}/>
      <Routes>
        <Route path="/"  element={<Home filterdCard={filteredCard} data={data} setData={setData}/>}/>
        <Route path="/:pays" element={<Card/>}/>
      </Routes> 
    </div>
  )
}

export default App
