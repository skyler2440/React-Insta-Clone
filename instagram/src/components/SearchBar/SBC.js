// search bar container
import React from 'react';
import IGLogo from '../../assets/iglogo.png';
// import './SearchBar.css'
import styled from 'styled-components';

const Header = styled.header`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;

const LogoHeader = styled.div`
  width: 300px;
  line-height: 75px;
  margin-top: .5rem;
`;

const LogoImage = styled.img`
  height: 50%;
  padding: 0px 15px;
`;

// const Divider = styled.span`
//   width: 50px;
// `;

const InputWrapper = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  text-align: center;
`;

const IconsWrapper = styled.div`
  display: flex;
  width: 300px;
`;
const SearchIcon = styled.i`
  position: absolute;
  display: inline;
  top: 33px;
  padding-left: 10px;
`;
const SocialDiv = styled.div`
  width: 50px;
`;
const SearchBar = props => {
    console.log('Search Bar Props', props)
    return (
        <Header>
            <LogoHeader>
                <LogoImage alt="ig-logo" src={IGLogo} />
            </LogoHeader>
            <InputWrapper>
            <SearchIcon className="fas fa-search" />
            <SearchInput
            type='text'
            placeholder='search'
            onChange={props.changeHandler}
            value={props.post}
            />
            </InputWrapper>
            <IconsWrapper>
                <SocialDiv>
                    <i className='far fa-compass'/>
                </SocialDiv>
                <SocialDiv>
                    <i className='far fa-heart'/>
                </SocialDiv>
                <SocialDiv>
                    <i className='far fa-circle' onClick={props.handleLogoutSubmit}/>
                </SocialDiv>
            </IconsWrapper>
        </Header>
//         <div className='s-b-wrapper'>
//             <div className='img-wrapper'>
//                 <img alt='insta logo' src={IGLogo} className='logo-img' />
//             </div>
//             <div>
//                 {/* <form onSubmit={search}> */}
//                 <input type='text' placeholder='Search' onChange={props.changeHandler} value={props.post}/>
//                 {/* </form> */}
//             </div>
//             <div className='social-wrapper'>
//             <div className='social'>
//             <i class="far fa-compass"></i>
//             </div>
//             <div className='social'>
//             <i class="far fa-heart"></i>
//             </div>
//             <div className='social'>
//             <i class="far fa-circle" onClick={props.handleLogoutSubmit}></i>
//             </div>
//         </div>
// </div>
    );
};

export default SearchBar;