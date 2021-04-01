import React from 'react'; 
import styled from 'styled-components';


const Wrapper = styled.div`
    grid-area: content;
    background: Gainsboro;
    background: rgb(240,240,240);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;
`

const Content = ({title}) => { 
    return(
        <Wrapper>
            {title}
        </Wrapper>
    )
}

export default Content


