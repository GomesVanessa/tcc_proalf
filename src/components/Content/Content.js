import React from 'react'; 
import styled from 'styled-components';

const Wrapper = styled.div`
    grid-area: content;
    background: #DCDCDC;    
    text-align: center;    
    div {
        margin: 17em;
    }   
 `

const Content = ({children}) => { 
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Content