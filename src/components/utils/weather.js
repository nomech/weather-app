import { useState } from "react";

function useWeather() {
  const [weatherLocation, setWeatherLocation] = useState([]);
  const [weatherCurrent, setWeatherCurrent] = useState([]);
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorCode, setErrorCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setSearch] = useState("");
console.log(weatherForecast)
  const handleSearch = (place) => {
    let cityName = "";
  
    if (typeof place === 'string') {
      // User entered a query and pressed enter
      cityName = place;
    } else if (place && place.name) {
      // User selected an option from the list
      cityName = place.name;
    } else if (place && place.address_components && place.address_components[0]) {
      // User selected an option from the list, but it doesn't have a name property
      cityName = place.address_components[0].long_name;
    } else {

      return;
    }
  
    setSearch(cityName);
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather();
  };

  async function getWeather() {
    try {
      setIsLoading(true);
      setWeatherLocation([]);
      setWeatherCurrent([]);
      setWeatherForecast([]);
      setErrorCode("");
      setErrorMessage("");

      let response = await fetch(
        `${import.meta.env.VITE_APP_WEAHTER_API_BASE_URL}key=${
          import.meta.env.VITE_APP_WEATHER_API_KEY
        }&q=${search}&days=7&aqi=no&alerts=no`
      );

      let data = await response.json();

      if (data.error) {
        setErrorCode(data.error.code);
        setErrorMessage(data.error.message);
        setIsLoading(false);
      } else {
        setWeatherLocation(data.location);
        setWeatherCurrent(data.current);
        setWeatherForecast(data.forecast.forecastday);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(true);
      console.log("Network error: " + error);
      setIsLoading(false);
    }
  }
  return {
    weatherLocation,
    weatherCurrent,
    weatherForecast,
    isLoading,
    errorCode,
    errorMessage,
    search,
    handleSubmit,
    getWeather,
    handleSearch,
  };
}
export default useWeather;
