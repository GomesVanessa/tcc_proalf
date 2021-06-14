import React from 'react';
import styled from 'styled-components';
import Nav from '../Nav/Nav'; 
import Icon from '../Icon/Icon';
import facebook from '../../Assets/icons/facebook.png';
import Login from '../../Assets/icons/login.png';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
    grid-area: header;
    background: rgb(51,170,204);
    font-size: 1.3em;
      

    ${Container} {
        display: flex;
        align-items: center; 
        height: 100%; 
    }
        
    h1{
        
        color: #FCFCFC;
        font-size: 3em;
        font-style: italic;
        font-family: Gabriola;
        text-shadow: black 0.1em 0.1em 0.2em;
  
    }
    a{
        text-decoration: none; 
    }
    
`;

const Navigation = styled(Nav)`
    margin: auto;   
`

const Header = ({to, path, alt}) => { 
    return(
        <Wrapper>
            <Container>
                <a href="/home"><h1>Proalf</h1></a>
                {/* <img src={logo} alt="Logo" width="200" /> */}
                <Navigation /> 
                <Icon to="https://www.facebook.com/SerPsicopedagoga" path={facebook} alt="facebook" />
                <Icon to="./login" path={Login} alt="Login" /> 
            </Container>
        </Wrapper>
    )
}

export default Header