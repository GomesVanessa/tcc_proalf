import React from 'react'; 
import styled from 'styled-components';

const Wraper = styled.footer`
    grid-area: footer;
    background: lightblue;
    `
         
const Footer = ({text}) => {
    return (
        <Wraper>
            {text}
        </Wraper>
    )
}

export default Footer; 



