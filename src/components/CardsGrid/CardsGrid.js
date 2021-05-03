import React from 'react'; 
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 22px;
  grid-row-gap: 1.7em;
`

const CardsGrid = ({children}) => { 
  return( 
    <Wrapper>
      {children} 
    </Wrapper>
  )
}

export default CardsGrid