import React from 'react';
import './header.css';
import SearchBar from '../Searchbar/searchbar';

function Header() {
    return(
        <header className='header-container'>

            <div className='logo'>
                <img alt='' className='image-logo' src='reddit-logo.png' width='30px' height='30px'/>
                <h1 className='title'><span className='span-orange'>Reddit</span>Minimal</h1>
            </div>

            <div>
                <SearchBar />
            </div>

            <div>
                { /** empty space **/ }
            </div>

        </header>
    )
};

export default Header;