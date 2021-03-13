import React from 'react'; 
import styled from 'styled-components';

const Wraper = styled.footer`
    color: white;
    background-color: lightblue;
    border: 2px solid #000
    `
         
const Footer = ({text}) => {
    return(
        <Wraper>
            {text} 
        </Wraper>
    )
}

export default Footer; 



