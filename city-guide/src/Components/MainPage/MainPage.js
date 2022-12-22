import React, { useState, useEffect, createRef } from "react";
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
// import Map from "../Map/Map";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import { getPlacesData } from "../../api/travelAdvisorAPI"
import {  Grid,  } from "@material-ui/core";


const MainPageBG = () => {
  const [type, setType] = useState('restaurants');
  const [places, setPlaces] = useState([]);
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  useEffect(() => {
    console.log("Type after change: ", type);
    var southWest = { lat: 47.6062095, lng: -122.3320708 };
    var northEast = { lat: 48.6062095, lng: -122.1320708 };
    getPlacesData(type, southWest, northEast)
      .then((data) => {
        setPlaces(data)
      }).catch((err) => console.log(err));
  }, [type]);

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
          <CategoryCards
            setType={setType}
            type={type}
          />
          {/* /*  <Map /> */}
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
              {/* {places.map((place, index) => {
                var randKey = Math.random;
                debugger;
                return (<PlaceDetails key={`${index}${randKey}`} place={place} />)
              })} */}


              {places?.map((place, i) => (
                <Grid ref={elRefs[i]} key={i} item xs={12}>
                  <PlaceDetails
                    // selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                    place={place}
                  />
                </Grid>
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
