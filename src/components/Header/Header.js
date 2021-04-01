import React from 'react';
import styled from 'styled-components';
//import logo from '../../Assets/icons/logo.png';
import Nav from '../Nav/Nav'; 
import Icon from '../Icon/Icon';





const Wrapper = styled.header`
    /*grid-area: header;*/
    background: rgb(51,170,204);
    display: flex;

    h1{
        color: white;
        font-size: 1.9em;
        padding: 0.25em 1em;
        font-style: italic;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Navigation = styled(Nav)`
    padding: 0px 300px 0px;
    
`

const Header = () => { 
    return(
        <Wrapper>
            <h1>Proalf</h1>
            {/* <img src={logo} alt="Logo" width="200" /> */}
                <Navigation /> 
            <Icon />   
            
        </Wrapper>
    )
}

export default Header