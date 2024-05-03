import React from 'react';
import './searchbar.css';

function SearchBar(){
    return (
        <form className='searchbar-container'>
            <input className='search-bar' type='text' placeholder='search'></input>
            <button className='search-button'>
                <img alt='' className='search-icon' src='search-icon.png' width='30px'/>
            </button>
        </form>
    )
};

export default SearchBar;