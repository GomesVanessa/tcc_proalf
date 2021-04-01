import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 30px 30px;
  background: rgb(101,199,40);
  color: white;
`

 const Button = ({onClick, children}) => { 
     return (
         <Wrapper onClick={onClick}>{children}</Wrapper>
       );
 }

 export default Button