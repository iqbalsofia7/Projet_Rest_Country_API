import React from 'react';
// Select options : Par Continent (région)
function Navbar(props) {
    return (
        <nav>
            <div className={props.dark ? 'part11' : 'part1'}>
                <h2>
                    {props.dark ? 'Where is the World ?' : 'Here is the World'} </h2>
                <button className={props.dark ? 'darkBtn' : 'darkMode'} onClick={props.darkMode}>
                    {props.dark ? 'Light Mode ': 'Dark Mode'}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;