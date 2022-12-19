import { Parallax } from "react-parallax";
import france from "../images/france.jpg";

const ImageFive = () => (
  <Parallax
    className="parallaxImg"
    bgImage={france}
    strength={800}
  ></Parallax>
);

export default ImageFive;
