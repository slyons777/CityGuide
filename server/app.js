const express = require("express"); // to get the dependency into the app
const app = express(); // for the express functionality use app
require('dotenv').config()
const PORT = process.env.PORT; //port to listen make it PORT capitalize because it will be hiden because anything inside the .env file will be hiden so hacker will not know the port using
// will use 3000 if cannot find .env.PORT

app.get("/", () => {
    console.log("App is getting to the Home Page");
}); //create update delete destroy


// API ENDPOINTS
app.get("/api/weather", (req, res) => {
    const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
    const searchType = "current";
    const location = "London";
    fetch(
        `http://api.weatherapi.com/v1/${searchType}.json?key=${WEATHER_API_KEY}&q=${location}`
    )
        .then((response) => response.json())
        .then((data) => { console.log("Response: ", data); });

});

//HIKE API:
app.get('/api/test', () => {
    const getAPIKey = process.env.TRAIL_API_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': getAPIKey,
            'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
        }
    };

    fetch('https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=39.7551&lon=-75.5291', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err, console.error(err));
});

app.get('/api/trail', () => {
    //Find Bike Trail API: 
    const getAPIKey = process.env.TRAIL_API_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': getAPIKey,
            'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
        }
    };

    fetch('https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=39.7551&lon=-75.5291', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
});

// Yelp
app.get("/api/yelp", (req, res)=>{
    const location = "London";
    const YELP_API_KEY = process.env.YELP_API_KEY;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${YELP_API_KEY}`
        }
      };      
      
      fetch(`https://api.yelp.com/v3/businesses/search?location=${location}&sort_by=best_match&limit=20`, options)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));        
});

app.get('/api/trails', ()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd4f3fb3b77mshb66b4c6e752d815p1fda49jsnf028cdccaa6f',
            'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
        }
    };
    
    fetch('https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=39.7551&lon=-75.5291', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err, console.error(err));    
});


app.listen(PORT, () => {
    console.log("Listening port: " + PORT);
}); //  take two parameters app is listening on port 3000   
