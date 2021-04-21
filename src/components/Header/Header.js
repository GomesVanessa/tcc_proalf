import React from 'react';
import styled from 'styled-components';
import Nav from '../Nav/Nav'; 
import Icon from '../Icon/Icon';
import facebook from '../../Assets/icons/facebook.png';
import Login from '../../Assets/icons/login.png';
import Container from '../Container/Container';

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
        margin:0; 
        color: #FCFCFC;
        //color: #DCDCDC;
        font-size: 1.9em;
        font-style: italic;
    }
`

const Navigation = styled(Nav)`
    margin: auto;   
`

const Header = ({to, path, alt}) => { 
    return(
        <Wrapper>
            <Container>
                <h1>Proalf</h1>
                {/* <img src={logo} alt="Logo" width="200" /> */}
                <Navigation /> 
                <Icon to="./facebook" path={facebook} alt="facebook" />
                <Icon to="./login" path={Login} alt="Login" /> 
            </Container>
        </Wrapper>
    )
}

export default Header