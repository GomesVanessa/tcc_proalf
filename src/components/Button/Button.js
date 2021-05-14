import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  font-size: 1.5em;
  margin: 2em;
  padding: 0.25em 1em;
  border: 2px solid #65c728;
  border-radius: 30px 30px;
  outline:0; 
  background: #65c728;
  color: white;
  cursor: pointer; 
  &:hover{
    background-color: #67CF26;
  }
`

 const Button = ({onClick, children}) => { 
     return (
         <Wrapper onClick={onClick}>{children}</Wrapper>
       );
 }

 export default Button