import React from 'react'; 
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-column-gap: 15px;
  grid-row-gap: 2em;
`

const Nuvem = ({to, path, alt}) => { 

    return(
        <Wrapper>
            <a href={to}>
                <img src={path} alt={alt} width="200" /> 
            </a>
        </Wrapper>
    )
}

export default Nuvem