import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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
    }}
`;

const Img = styled.img`
    width: 100px;
    height: 100px;
    border: 2px solid #F0F0F0;
    &:hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
        transform: translate(0, -5px);  
    }    
`;

const Card = ({ text, image, correct = false, active = false}) => { 
    return( 
        <Wrapper correct = {correct} active ={active} >
            <Img src={image} alt={text} /> 
        </Wrapper> 
    )
}

export default Card;


