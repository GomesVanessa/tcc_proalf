import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;  
   
     
`

const Icon = ({to, path, alt}) => { 

    return(
        <Wrapper>
            <a href={to}>
                <img src={path} alt={alt} width="30" /> 
            </a>
        </Wrapper>
    )
}
   
export default Icon


