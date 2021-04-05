import React from 'react';
import styled from 'styled-components';
import logo from '../../Assets/icons/logo.png';
import Nav from '../Nav/Nav'; 
import Icon from '../Icon/Icon';
import facebook from '../../Assets/icons/facebook.png';
import login from '../../Assets/icons/login.png';

const Wrapper = styled.header`
    grid-area: header;
    background: rgb(51,170,204);
    display: flex;
    font-size: 1.3em;
        
    h1{
        color: #FCFCFC;
        //color: #DCDCDC;
        font-size: 1.9em;
        padding: 0.25em 1em;
        font-style: italic;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Navigation = styled(Nav)`
    margin: 1em;
    padding: 0.25em 28em ;   
`

const Header = ({to, path, alt}) => { 
    return(
        <Wrapper>
            <h1>Proalf</h1>
            {/* <img src={logo} alt="Logo" width="200" /> */}
            <Navigation /> 
            <Icon to="./facebook" path={facebook} alt="facebook" />
            <Icon to="./login" path={login} alt="Login" /> 
            
        </Wrapper>
    )
}

export default Header

// const LoginButton(props) {
//     return (
//       <button onClick={props.onClick}>
//         Login
//       </button>
//     );
//   }
  
//   const LogoutButton(props) {
//     return (
//       <button onClick={props.onClick}>
//         Logout
//       </button>
//     );
//   }