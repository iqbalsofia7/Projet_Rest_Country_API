import React from 'react';

function Navbar(props) {
    return (
        <nav>
            <div className='part1'>
                <h2>Where is the World ?</h2>
                <button className='darkMode' >Dark Mode</button>
            </div>
            
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
            
        </nav>
    );
}

export default Navbar;