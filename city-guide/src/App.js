import "./App.css";
import ImageTwo from "./Components/ImageTwo";
import ImageThree from "./Components/ImageThree";
import MainPageBG from "./Components/MainPage/MainPage";
import ImageFour from "./Components/ImageFour";
import ImageFive from "./Components/ImageFive";

const App = () => {
  return (
    <div className="App">
      <MainPageBG />
      <ImageTwo />
      <ImageThree />
      <ImageFour />
      <ImageFive />
    </div>
  );
};

export default App;
