import { useState, useEffect } from "react"

function Home(props) {

    return(
        <section className='home'>

        {props.filterdCard.map((item, index) => {
            return(
            <div key={index} className="card">
                <img src={item.flags.png} alt="" className="img"/>
                <h4>{item.name.common}</h4>
                <div className="infos">
                    <p><b>Population :</b> {item.population} </p>
                    <p><b>Region :</b> {item.region} </p>
                    <p><b>Capital :</b> {item.capital} </p>
                    
                </div>
            </div>
        )})}
        </section>
    )
}

export default Home 