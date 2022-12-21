import React, { useState, useEffect } from "react";
import background from "../../assets/bg.mp4";
import mountain from "../../images/mountain.jpg";
import temple from "../../images/temple.jpg";
import gate from "../../images/gate.jpg";
import france from "../../images/france.jpg";
import CategoryCards from "../CategoryCards/categoryCards";
import LandingHeader from "../LandingHeader/landingHeader";
import MainNav from "../MainNav/mainnav";
// import CategoryResults from "../CategoryResultCards/categoryResultCards";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import Footer from "../Footer/footer";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import Map from "../Map/Map";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

const MainPageBG = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    placeAPI
      .then((res) => {
        return res.json();
      })
      .then((data) => setCategories(data));
  });

  return (
    <div className="mainPageBG">
      <Parallax pages={5}>
        <ParallaxLayer
          sticky={{ start: 0.1, end: 0.1 }}
          style={{ textAlign: "center" }}
        >
          <LandingHeader />
          <MainNav />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.55 }}
          style={{ textAlign: "center", marginLeft: "22em" }}
        >
          {/* <CategoryCards /> */}
          {/* {categories.map(category => categoryCard)} */}
          {/* <Map /> */}
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.99 }}
          style={{
            textAlign: "center",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <Container>
            <Row
              xs={6}
              md={4}
              className="g-4"
            >
              {categories.map((category) => (
                <PlaceDetails category={category} />
              ))}
            </Row>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          style={{ textAlign: "center", backgroundSize: "cover" }}
        >
          <video
            src={background}
            autoPlay
            loop
            muted
          />
        </ParallaxLayer>
        <ParallaxLayer
          className="mountainImg"
          offset={0.99}
          speed={0.9}
          style={{
            backgroundImage: `url(${mountain})`,
            backgroundSize: "cover",
            overflow: "hidden",
          }}
        ></ParallaxLayer>
        {/* <ParallaxLayer
          sticky={{ start: 0.5, end: 2.5 }}
          style={{ textAlign: "center" }}
        ></ParallaxLayer> */}
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{
            backgroundImage: `url(${temple})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={1.99}
          speed={1}
          style={{
            backgroundImage: `url(${gate})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={1.99}
          speed={1}
          style={{
            backgroundImage: `url(${france})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default MainPageBG;
