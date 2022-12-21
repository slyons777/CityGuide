import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  debugger;
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "x-rapidapi-key":
            "6b78c1d125mshdbc3c6440bfefb8p1edea6jsn952ebc898a53",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    debugger;

    return data;
  } catch (error) {
    debugger;
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(
        "https://community-open-weather-map.p.rapidapi.com/find",
        {
          params: { lat, lon: lng },
          headers: {
            "x-rapidapi-key":
              "8a24f0daf1msh68fdb3db3dfb83cp1085bfjsnac83c9c341bb",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          },
        }
      );

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
