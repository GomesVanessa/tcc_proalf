import RenderVideo from "./RenderVideo";
import RenderText from "./RenderText";
import RenderClick from "./RenderClick";

const getRenderComponent = (type) => {
  switch (type) {
    case "IMAGE":
      return RenderClick;
    case "TEXT":
      return RenderText;
    default:
      return () => null;
  }
};

export default getRenderComponent;
