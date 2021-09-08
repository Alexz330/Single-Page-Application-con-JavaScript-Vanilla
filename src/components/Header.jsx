import React, { useState, useContext } from 'react'
import ThemeContext from '../context/ThemeContext';
import '../assets/style/Header.css'

const Header = (props) => {
    const handleClick = () => {
        props.onClick()
    }

    const color = useContext(ThemeContext)
    return (
        <div className={props.darkMode ? " Header Light" : "Header Dark"}>
            <h1 style={{color}}>ReactHooks + Rick and Morty  <br />Alexis López 🧑🏻
           </h1>
            <a onClick={handleClick}>
                <button>
                    {props.darkMode ? "Light Mode ☀️" : "🌙  Dark Mode"}
                </button>
            </a>
        </div>
    );
};

export default Header
