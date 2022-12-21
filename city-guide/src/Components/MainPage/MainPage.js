import React from "react";
import background from "../../assets/bg.mp4";
import Container from "react-bootstrap/esm/Container";
import mountain from "../../images/mountain.jpg";
import temple from "../../images/temple.jpg";
import gate from "../../images/gate.jpg";
import france from "../../images/france.jpg";

import CategoryCards from "../CategoryCards/categoryCards";
import LandingHeader from "../LandingHeader/landingHeader";
import MainNav from "../MainNav/mainnav";

import CategoryResults from "../CategoryResultCards/categoryResultCards";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const MainPageBG = () => {
  return (
    // <div className="parallaxImg">
    //   <div className="mainPageBg">
    //     <div className="overlay"></div>
    //     <video
    //       src={background}
    //       autoPlay
    //       loop
    //       muted
    //     />
    //     <div className="content">
    //       <LandingHeader />
    //       <MainNav />
    //       <CategoryCards />
    //       {/* <CategoryResults /> */}
    //     </div>
    //   </div>
    // </div>

    <div>
      {/* <div className="overlay"></div> */}
      <Parallax pages={9}>
        <ParallaxLayer
          sticky={{ start: 0.1 }}
          style={{ textAlign: "center" }}
        >
          <LandingHeader />
          <MainNav />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.5 }}
          style={{ textAlign: "center",
          marginLeft: "22em", }}

        >
          <CategoryCards />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.8 }}
          style={{ textAlign: "center" }}
        >
          <CategoryResults />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1}
        >
          <video
            // className="mainPageBg"
            src={background}
            autoPlay
            loop
            muted
          />
        </ParallaxLayer>

        <ParallaxLayer
          className="mountainImg"
          offset={1}
          speed={0.5}
          style={{
            backgroundImage: `url(${mountain})`,
            backgroundSize: "cover",
            overflow: "hidden",
          }}
        />

        <ParallaxLayer
          sticky={{ start: 0.5, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          {/* <CategoryResults /> */}
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            backgroundImage: `url(${temple})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={1}
          style={{
            backgroundImage: `url(${gate})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={1}
          style={{
            backgroundImage: `url(${france})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer></ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default MainPageBG;
