import React from "react";
//import styled from 'styled-components';

// const RenderText = styled.p`
//   width: 90px;
//   height: 50px; 
//   object-fit: contain;
// `;

const RenderText = ({ atividade }) => {
  return atividade.cards.map((item) => <p>{item.text}</p>);
};

export default RenderText;
