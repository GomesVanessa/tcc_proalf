import React from 'react'; 
import styled from 'styled-components';

const Wraper= styled.footer`
    grid-area: footer;
    background: rgb(51,170,204);
    color: rgb(255,255,255);
    text-align: center;
    font-size: 1em;
`
         
const Footer = ({year, children}) => {
    return <Wraper>
        {year} - {children}
    </Wraper>
}

export default Footer; 





