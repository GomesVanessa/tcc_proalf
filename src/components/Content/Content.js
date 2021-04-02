import React from 'react'; 
import styled from 'styled-components';
import Button from '../Button/Button';
import CardsGrid from '../CardsGrid/CardsGrid';


 const Wrapper = styled.div`
    grid-area: content;
    background: #DCDCDC;    
    text-align: center;    
    button {
        //margin-inline-end: 10px;
        margin: 28em;
    }    
 `

const Content = ({title}) => { 
    return(
        <Wrapper>
            {title}
            
            <Button>Continuar</Button>
        </Wrapper>
    )
}

export default Content