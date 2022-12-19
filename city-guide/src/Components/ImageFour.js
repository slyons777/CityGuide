import { Parallax } from "react-parallax";
import gate from "../images/gate.jpg";

const ImageFour = () => (
  <Parallax
    className="parallaxImg"
    bgImage={gate}
    strength={800}
  ></Parallax>
);

export default ImageFour;
