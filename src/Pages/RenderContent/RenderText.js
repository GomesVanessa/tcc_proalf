import React from "react";

const RenderText = ({ atividade }) => {
  return atividade.cards.map((item) => <p>{item.text}</p>);
};

export default RenderText;
