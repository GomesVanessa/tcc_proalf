import RenderVideo from "./RenderVideo";
import RenderText from "./RenderText";
import RenderImage from "./RenderImage";

const getRenderComponent = (type) => {
  switch (type) {
    case "IMAGE":
      return RenderImage;
    case "TEXT":
      return RenderText;
    default:
      return () => null;
  }
};

export default getRenderComponent;
