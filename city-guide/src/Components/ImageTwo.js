import { Parallax } from "react-parallax";
import mountain from "../images/mountain.jpg";

const ImageTwo = () => (
  <Parallax
    className="parallaxImg"
    bgImage={mountain}
    strength={800}
  ></Parallax>
);

export default ImageTwo;
