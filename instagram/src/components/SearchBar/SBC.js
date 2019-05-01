// search bar container
import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css'

const SearchBar = props => {
    console.log('Search Bar Props', props)
    return (
        <div className='s-b-wrapper'>
            <div className='img-wrapper'>
                <img alt='insta logo' src={IGLogo} className='logo-img' />
            </div>
            <div>
                {/* <form onSubmit={search}> */}
                <input type='text' placeholder='Search' onChange={props.changeHandler} value={props.post}/>
                {/* </form> */}
            </div>
            <div className='social-wrapper'>
            <div className='social'>
            <i class="far fa-compass"></i>
            </div>
            <div className='social'>
            <i class="far fa-heart"></i>
            </div>
            <div className='social'>
            <i class="far fa-circle"></i>
            </div>
        </div>
</div>
    );
};

export default SearchBar;