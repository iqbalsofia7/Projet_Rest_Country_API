import { useState, useEffect } from "react"

//Page principale qui contiendra toutes les cards
function Home() {
    //tableau vide qui sera mis à jour dans le useEffect une seule fois
    const [data, setData] = useState([])
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
    return(
        <section className='home'>

        {data.map((item, index) => {
            return(
            <div key={index} className="card">
                <img src={item.flags.png} alt="" className="img"/>
                <h4>Nom du pays</h4>
                <div className="infos">
                    <p><b>Population :</b> {item.name.common} </p>
                    <p><b>Région :</b> {item.population} </p>
                    <p><b>Capital :</b> {item.capital} </p>
                    
                </div>
            </div>
        )})}
        </section>
    )
}

export default Home 