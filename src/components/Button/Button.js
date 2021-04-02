import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  font-size: 1.3em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #65c728;
  border-radius: 30px 30px;
  background: #65c728;
  color: white;
`

 const Button = ({onClick, children}) => { 
     return (
         <Wrapper onClick={onClick}>{children}</Wrapper>
       );
 }

 export default Button