import React from 'react'; 
import styled from 'styled-components';

import Abacaxi from '../../Assets/a/abacaxi.png';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 3em;
  //margin: 10px; 

  div{
    padding:40px;
    width: 40px;
    border:2px solid white; 
    border-radius: 5px;
    box-shadow: 0 0 2px 0px gray;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
}
`

const CardsGrid = ({onClick, children}) => {
  return(
    <Wrapper>{children}
      <div><img src={Abacaxi} width="90" onClick={onClick} correct={true}/></div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </Wrapper>
  )
}

export default CardsGrid