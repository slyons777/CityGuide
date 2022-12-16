const express = require("express"); // to get the dependency into the app
const app = express(); // for the express functionality use app
require('dotenv').config()
const PORT = process.env.PORT; //port to listen make it PORT capitalize because it will be hiden because anything inside the .env file will be hiden so hacker will not know the port using
// will use 3000 if cannot find .env.PORT

app.get("/", () => {
    console.log("App is getting to the Home Page");

}); //create update delete destroy


// API ENDPOINTS
app.get("/api/weather", (req, res)=>{
    const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
    const searchType = "current";
    const location = "London";
    fetch(
        `http://api.weatherapi.com/v1/${searchType}.json?key=${WEATHER_API_KEY}&q=${location}`
    )
        .then((response) => response.json())
        .then((data) => {console.log("Response: ", data);});
        
});



app.listen(PORT, () => {
    console.log("Listening port: " + PORT);
}); //  take two parameters app is listening on port 3000                                