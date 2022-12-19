import React from "react";
import background from "../../assets/bg.mp4";
import CategoryCards from "../CategoryCards/categoryCards";
import LandingHeader from "../LandingHeader/landingHeader";
import MainNav from "../MainNav/mainnav";

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
        </div>
      </div>
    </div>
  );
};

export default MainPageBG;
