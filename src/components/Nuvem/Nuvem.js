import React from 'react'; 
import styled from 'styled-components';
import Card from '../Card/Card'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-column-gap: 15px;
  grid-row-gap: 2em;
`

const Nuvem = ({text}) => { 

    return(
        <Wrapper>
            <a >
                <Card>{text}</Card>
            </a>
        </Wrapper>
    )
}


// const Nuvem = ({to, path, alt}) => { 

//     return(
//         <Wrapper>
//             <a href={to}>
//                 <img src={path} alt={alt} width="300" /> 
//             </a>
//         </Wrapper>
//     )
// }

export default Nuvem