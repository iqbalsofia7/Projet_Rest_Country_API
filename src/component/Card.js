import { useState, useEffect } from 'react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';


//Component qui affichera uniquement la Card sur laquelle on a cliqué
function Card(props) {
    const country = props.country;

    return (
    <section className='Card'>
        <Link to='../'>
        <button className='goBack'>Go Back</button>
        </Link>
        {country && (
        <div className='CardBody'>
            <img src={country.flags.png} alt="" className="imgCard"/>
            <div>
                <h1>{country.name.common}</h1>
                <br />
                <div className="infosCard">
                    <p><b>Native name :</b> {country.name.common} </p>
                    <p><b>Population :</b> {country.population} </p>
                    <p><b>Region :</b> {country.region} </p>
                    <p><b>Sub Region :</b> {country.subregion} </p>
                    <p><b>Capital :</b> {country.capital} </p>
                    <p><b>Top Level Domain :</b> {country.tld} </p>
                    <p><b>Languages :</b> {Object.keys(country.languages).map((index) => {
                        return (
                            <span key={index}>{country.languages[index]}</span>
                        );
                    })}</p>

                    {/* <p><b>Languages:</b> {Object.keys(country.languages).map((langue, index) => {
                        return (
                            <span key={index}>{langue}</span>
                        )
                    })}</p> */}

                </div>
                
                <div>
                    <p><b>Border-countries :<br></br></b> {Object.keys(country.borders).map((index) => {
                        return (
                            <button className='btnBrd' key={index}>{country.borders[index]}</button>
                        );
                    })}</p>

                    </div>
            </div>
        </div>
        )}
    </section>
    );
}

export default Card;