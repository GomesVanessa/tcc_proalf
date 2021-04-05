import React from 'react'; 
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 130px);
  grid-column-gap: 15px;
  grid-row-gap: 2em;
`

const CardsGrid = ({ children}) => { 
  return( 
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default CardsGrid