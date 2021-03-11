import React from 'react'; 
import styled from 'styled-components';

const footer = styled.p`
    background: papayawhip;
    `
         

const Footer = ({text}) => { 
    return( 
        <footer>
            <p>© 2021 | TCC Etec Embu <br>Programa de Alfabetização e Estimulação Cognitiva.</br></p>
        </footer> 
    )
}

export default Footer; 



