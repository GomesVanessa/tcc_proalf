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

`;

const Card = ({children, ...rest}) => { 
    return( 
        <Wrapper {...rest}>
            {children}            
        </Wrapper> 
    )
}

export default Card;


