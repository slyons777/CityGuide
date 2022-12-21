import { Parallax } from "react-parallax";
import temple from "../images/temple.jpg";

const ImageThree = () => (
  <Parallax
    className="parallaxImg"
    bgImage={temple}
    strength={800}
  ></Parallax>
);

export default ImageThree;
