import React from "react";
import styled from "styled-components";

const Text = styled.p`
  width: 45px;
  height: 25px; 
  object-fit: contain;
`; 

const RenderText = ({ atividade }) => {
  return atividade.cards.map((item) => <Text>{item.text}</Text>);
};

export default RenderText;
