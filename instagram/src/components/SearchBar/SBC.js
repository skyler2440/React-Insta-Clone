// search bar container
import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className='s-b-wrapper'>
            <div className='img-wrapper'>
                <img alt='insta logo' src={IGLogo} className='logo-img' />
            </div>
        </div>
    );
};

export default SearchBar;