import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//Component qui affichera uniquement la Card sur laquelle on a cliqué
function Card(props) {
    const { id } = useParams(); //l'id repris ici fait partie du lien (voir App.js)
    const country = props.data.find((c) => c.cca3 === id);
    
    return (
    <section className={props.dark ? 'Card' : 'Card2'}>
        <Link to='../'>
        <button className='goBack'>Go Back</button>
        </Link>

        {country && (
        <div className='CardBody'>
            <img src={country.flags.png} alt="" className="imgCard"/>
            <div>
                <h1 className='Title'>{country.name.common}</h1>
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
                </div>

{/* Condition pour les borders-countries (car problème d'affichage) */}
            {country.borders ? (
            <div>
                <p><b>Border-countries :<br></br></b> {Object.keys(country.borders).map((index) => {
                return (
// Link pour les border countries
                    <Link to={`/pays/${country.borders[index]}`} key={index} >
                    <button className='btnBrd' onClick={()=>props.showCard(index)}>{country.borders[index]}</button>
                    </Link>
                );
                })}</p>
            </div> 
            ) :                 
            <div>
                <p><b>Border-countries :</b> / </p>
            </div>
            }

            </div>
        </div>
        )}
    </section>
    );
}

export default Card;