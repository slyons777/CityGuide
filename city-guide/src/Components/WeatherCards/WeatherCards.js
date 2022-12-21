function getWeatherCards() {
  for (var i = 0; i < response.forecasts; i++) {
    if (i === 0) {
      // make the current day's weather card

      let newDiv = document.createElement("div");

      newDiv.setAttribute("class", "cur-weatherDiv");

      let newCard = document.createElement("card");

      newCard.setAttribute("class", "cur-weatherCard");

      //maybe

      //let cardImage = document.createElement("img");

      let dayH3 = document.createElement("h3");

      dayH3.setAttribute("id", "cur-weatherDay");

      dayH3.innerText = response.forecasts[0].day;

      let tempH4 = document.createElement("h4");

      tempH4.setAttribute("id", "cur-temp");

      tempH4.innerText = `${response.current_observation.condition.temperature} degrees`;

      let weatherH3 = document.createElement("h3");

      weatherH3.setAttribute("id", "cur-weatherStatus");

      weatherH3.innerText = response.current_observation.condition.text;

      let windSpeed = document.createElement("h4");

      windSpeed.setAttribute("id", "cur-wind");

      windSpeed.innerText = `${response.current_observation.wind.speed} MPH`;

      newCard.append(dayH3, tempH4, weatherH3, windSpeed);

      newDiv.append(newCard);

      // append to whereever here
      document.querySelector(".row").insertAdjacentHTML("beforeend", newCard);
    } else {
      // make the forecast cards

      let newDiv = document.createElement("div");

      newDiv.setAttribute("class", "weatherDiv");

      let newCard = document.createElement("card");

      newCard.setAttribute("class", "weatherCard");

      let dayH3 = document.createElement("h3");

      dayH3.setAttribute("id", "weatherDay");

      dayH3.innerText = response.forecasts[i].day;

      let highH4 = document.createElement("h4");

      highH4.setAttribute("id", "high");

      highH4.innerText = `${response.forecasts[i].high} degrees`;

      let lowH4 = document.createElement("h4");

      lowH4.setAttribute("id", "low");

      lowH4.innerText = `${response.forecasts[i].low} degrees`;

      let weatherH3 = document.createElement("h3");

      weatherH3.setAttribute("id", "weatherStatus");

      weatherH3.innerText = response.forecasts[i].text;

      newCard.append(dayH3, highH4, lowH4, weatherH3);

      newDiv.append(newCard);

      // append to whereever here
      document.querySelector(".row").insertAdjacentHTML("beforeend", newCard);
    }
  }
  return console.log(newCard);
}

export default getWeatherCards;
