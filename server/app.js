const express = require("express"); // to get the dependency into the app
const app = express(); // for the express functionality use app
const path = require('path');
require('dotenv').config()
const axios = require('axios');
const PORT = process.env.PORT; //port to listen make it PORT capitalize because it will be hiden because anything inside the .env file will be hiden so hacker will not know the port using
// will use 3000 if cannot find .env.PORT

app.get("/", (req, res) => {
    console.log("App is getting to the Home Page");
}); //create read update delete


// API ENDPOINTS

//  WEATHER
app.get("/api/weather", (req, res) => {
    const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
    let location = [47.6062095, -122.3320708];

    const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: { lat: `${location[0]}`, long: `${location[1]}`, format: 'json', u: 'f' },
        headers: {
            'X-RapidAPI-Key': `${WEATHER_API_KEY}`,
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.error(error);
    });
});

// BIKE TRAILS API:
app.get('/api/trails', (req, res) => {
    const TRAIL_API_KEY = process.env.TRAIL_API_KEY;
    let location = [47.6062095, -122.3320708];

    const options = {
        method: 'GET',
        url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
        params: { lon: `${location[1]}`, lat: `${location[0]}` },
        headers: {
            'X-RapidAPI-Key': `${TRAIL_API_KEY}`,
            'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.error(error);
    });
});

// HIKING TRAILS API:
app.get('/api/hiking-trails', (req, res) => {
    const TRAIL_API_KEY = process.env.TRAIL_API_KEY;
    let location = [47.6062095, -122.3320708];

    const options = {
        method: 'GET',
        url: 'https://trailapi-trailapi.p.rapidapi.com/activity/',
        params: {
            lat: `${location[0]}`,
            limit: '40',
            lon: `${location[1]}`,
            radius: '10',
            'q-activities_activity_type_name_eq': 'hiking'
        },
        headers: {
            'X-RapidAPI-Key': `${TRAIL_API_KEY}`,
            'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.error(error);
    });
});

// YELP:

// FOOD
app.get("/api/food", (req, res) => {
    const YELP_API_KEY = process.env.YELP_API_KEY;
    const location = [47.6062095, -122.3320708];
    const searchTerm = 'restaurants';
    const sortBy = 'best_match';
    const options = {
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search',
        params: {
            'latitude': `${location[0]}`,
            'longitude': `${location[1]}`,
            'term': `${searchTerm}`,
            'radius': '15000',
            'sort_by': `${sortBy}`,
            'limit': '50'
        },
        headers: {
            'Authorization': `Bearer ${YELP_API_KEY}`,
            'accept': 'application/json'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.error(error);
    });    
});

// ATTRACTIONS
app.get("/api/attractions", (req, res) => {
    const YELP_API_KEY = process.env.YELP_API_KEY;
    const location = [47.6062095, -122.3320708];
    const searchTerm = 'attractions';
    const sortBy = 'best_match';

    const options = {
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search',
        params: {
            'latitude': `${location[0]}`,
            'longitude': `${location[1]}`,
            'term': `${searchTerm}`,
            'radius': '15000',
            'sort_by': `${sortBy}`,
            'limit': '50'
        },
        headers: {
            'Authorization': `Bearer ${YELP_API_KEY}`,
            'accept': 'application/json'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.error(error);
    }); 
    
});

app.listen(PORT, () => {
    console.log("Listening port: " + PORT);
}); //  take two parameters app is listening on port 3000   
