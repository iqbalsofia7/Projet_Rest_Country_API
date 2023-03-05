import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Home(props) {
    //filtre qui va permettre de trier les pays selon leur continent, on les affiche tous par défaut
    const [selectedRegion, setSelectedRegion] = useState("all");

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
    }

    return(
        <section className='home'>
            <div className='part2'>
                <input type="search" onChange={props.rechercher} placeholder='Search for a country...' name="regions" id="" />
                <select name="regions" id="regions" value={selectedRegion} onChange={handleRegionChange}>
                    <option value="all">All Regions</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            <br />
            {/* {props.filterdCard.map((item, index) => { */}
        {props.filterdCard.filter(item => selectedRegion === "all" || item.region === selectedRegion).map((item, index) => {
            return(
            <Link to={`/pays/${item.tld}`} style={{ textDecoration: 'none', color:'black' }}>
                <div key={index} className={props.dark ? 'cardDark' : 'card'} onClick={()=>props.showCard(item)}>
                    <img src={item.flags.png} alt="" className="img"/>
                    <h4>{item.name.common}</h4>
                    <div className="infos">
                        <p><b>Population :</b> {item.population} </p>
                        <p><b>Region :</b> {item.region} </p>
                        <p><b>Capital :</b> {item.capital} </p>
                    </div>
                </div>
            </Link>
        )})}
        </section>
    )
}

export default Home 
