import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Home(props) {

    return(
        <section className='home'>
            <div className='part2'>
                <input type="search" onChange={props.rechercher}  placeholder='Search for a country...' name="regions" id="" />
                <select name="" id="">
                    <option value="all">All Regions</option>
                    <option value="africa">Africa</option>
                    <option value="northAmerica">NorthAmerica</option>
                    <option value="southAmerica">South America</option>
                    <option value="asia">Asia</option>
                    <option value="europa">Europe</option>
                </select>
            </div>
            <br />
        {props.filterdCard.map((item, index) => {
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