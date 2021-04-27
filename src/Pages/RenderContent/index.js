import React from "react";
import getRenderComponent from "./getRenderComponent";

const RenderContent = ({ type, atividade }) => {
  const ContentComponent = getRenderComponent(type);

  return <ContentComponent atividade={atividade} />;
};

export default RenderContent;