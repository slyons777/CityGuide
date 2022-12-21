import "./App.css";
import ImageTwo from "./Components/ImageTwo";
import ImageThree from "./Components/ImageThree";
import MainPageBG from "./Components/MainPage/MainPage";
import ImageFour from "./Components/ImageFour";
import ImageFive from "./Components/ImageFive";
import Footer from "./Components/Footer/footer";
import CategoryResults from "./Components/CategoryResultCards/categoryResultCards";
import Row from "react-bootstrap/esm/Row";
import getWeatherCards from "./Components/WeatherCards/WeatherCards";


function App() {
  return (
    <div className="App">
      <MainPageBG />
     
          {/* <ImageTwo />
          <ImageThree />
          <ImageFour />
          <ImageFive /> */}
      {/* <ImageTwo />
      <ImageThree />
      <ImageFour />
      <ImageFive /> */}
      {/* <CategoryResults /> */}

      {/* <Footer /> */}
      <row><getWeatherCards /></row>
    </div>
  );
};

export default App;
