# CityGuide App 
A web app used to plan activities by providing a location.

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Installing](#installing)
- [Usage](#usage)
- [Contributing](#contributing)

## About
CityGuide is a non-deployed web facing app utilizing local storage to simulate a collections db. 

## Getting Started
1. Clone a copy of the repo into ,your chosen directory.
  - make sure to create a .env file in the root of the directory and add your own API keys for the following sites: 
  See example below of the .env file copy paste and add the API keys from the Gooogle places and the travel adviser from the Rapids APIs: 
  
  sample .env file: 
  
    REACT_APP_GOOGLE_MAPS_API_KEY=
    REACT_APP_RAPID_API_TRAVEL_API_KEY= 
    REACT_APP_RAPID_API_WEATHER_API_KEY= 

- Add the dependencies after clonning the copy of the repo into the root of the project please include the --force as you see below and do run each of the react dependecies from the terminal one at a time. Please disregard the warnings: 

    npm install @material-ui/core --force  
    npm install @material-ui/icons --force 
    npm install @material-ui/lab --force    
    npm install @react-google-maps/api axios --force  
    npm install @react-google-maps/api axios google-map-react --force

2. Open a terminal and navigate to CityGuide/server and run `node app.js`
3. Navigate to CityGuide/city-guide and run `npm start`;
4. Open a browser and navigate to localhost:3001
5. Type in a location in the search bar to get started! 

## Usage
1. Explain usage here

## Contributing
Vladimir Antigua
Sarina Lyons
Michael Greene
