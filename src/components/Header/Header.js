import React from 'react';
import styled from 'styled-components';
import logo from '../../Assets/icons/logo.png';
import Nav from '../Nav/Nav'; 
//import Icon from '../Icon/Icon';
import facebook from '../../Assets/icons/facebook.png';
import login from '../../Assets/icons/login.png';


const Wrapper = styled.header`
    /*grid-area: header;*/
    background: rgb(51,170,204);
    display: flex;
`

const Navigation = styled(Nav)`
    padding: 0px 300px 0px;
    
`

const Header = () => { 
    return(
        <Wrapper>
            <img src={logo} alt="Logo" width="200" />
                <Navigation /> 
                
            <img src={facebook} alt="Facebook" />
            <img src={login} alt="Login" />
        </Wrapper>
    )
}

export default Header