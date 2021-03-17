import React from 'react'; 
import styled from 'styled-components';

const Wraper = styled.footer`
    
    background: rgb(51,170,204);
    color: white;
    text-align: center;
    margin-top: 20px;
    `
         
const Footer = ({text}) => {
    return (
        <Wraper>
            {text}
        </Wraper>
    )
}

export default Footer; 





