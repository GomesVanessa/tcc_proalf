import React from 'react'; 
import styled from 'styled-components';

const Wrapper = styled.div`
    padding:80px;
    width: 80px;
    box-shadow: 0 0 5px 0px gray;   

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }


    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr; 
   
    grid-template-areas: 
            "cardsgrid cardsgrid cardsgrid cardsgrid cardsgrid"
            "cardsgrid cardsgrid cardsgrid cardsgrid cardsgrid"
            "cardsgrid cardsgrid cardsgrid cardsgrid cardsgrid";
`

const CardsGrid = ({onClick, children}) => {
    return <Wrapper onClick={onClick}>{children}</Wrapper>
}

export default CardsGrid