import React from "react";
import background from "../../assets/bg.mp4";
import CategoryCards from "../CategoryCards/categoryCards";
import LandingHeader from "../LandingHeader/landingHeader";
import MainNav from "../MainNav/mainnav";

import CategoryResults from "../CategoryResultCards/categoryResultCards";

const MainPageBG = () => {
  return (
    <div className="parallaxImg">
      <div className="mainPageBg">
        <div className="overlay"></div>
        <video
          src={background}
          autoPlay
          loop
          muted
        />
        <div className="content">
          <LandingHeader />
          <MainNav />
          <CategoryCards />
          {/* <CategoryResults /> */}
        </div>
      </div>
    </div>
  );
};

export default MainPageBG;
