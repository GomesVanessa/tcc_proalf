import React from 'react'; 
import styled from 'styled-components';

const Wraper= styled.footer`
    grid-area: footer;
    background: rgb(51,170,204);
    color: rgb(255,255,255);
    font-size: 1.3em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
`
         
const Footer = ({year, children}) => {
    return <Wraper>
        © Copyright - {year} - {children}
    </Wraper>
}

export default Footer; 





