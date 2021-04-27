import React from "react";

const RenderVideo = ({ atividade }) => {
  console.log(atividade);
  return atividade.cards.map((item) => (
    <iframe>
      src={`https://www.youtube.com/embed/${item.video}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullscreen
      </iframe>
  ));
};

export default RenderVideo;