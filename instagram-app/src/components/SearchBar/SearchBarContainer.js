import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';

const SearchBar = () => {
    return(
        <div className='search-bar-wrapper'>
            <div className='image-wrapper'>
                <img alt='insta logo' src={IGLogo} className='logo-img' />
            </div>
            <div className='search'>
            <span class="fa fa-search"></span>
            <input type='text' placeholder='
                Search' />
            </div>
            <div className='social-wrapper'>
                <div className='social'>
                    <i className='far fa-compass' />
                </div>
                <div className='social'>
                    <i className='far fa-heart' />
                </div>
                <div className='social'>
                    <i className='far fa-circle' />
                </div>
            </div>
        </div>

    );
};

export default SearchBar;