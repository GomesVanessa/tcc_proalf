import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 2px solid #f0f0f0; 
    background-color: #f0f0f0; 
    padding: .5em;
    border-radius: 6px; 
    cursor: pointer; 
    &:hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
        transform: translate(0, -5px);  
    }
/* 
    ${({ correct, active }) => {
    if (correct && active) {
      return `
                border: 2px solid green; 
            `;
    } else {
      return `
                border: 2px solid red;
            `;
    }
    }} */
`;

const Img = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;         
`;

const Card = ({ text, image, correct = false, active = false}) => { 
    return( 
        <Wrapper correct = {correct} active ={active} >
            <Img src={image} alt={text} /> 
        </Wrapper> 
    )
}

export default Card;


