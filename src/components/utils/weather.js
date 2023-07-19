import { useState } from 'react';

function useWeather() {
  const [weatherLocation, setWeatherLocation] = useState([]);
  const [weatherCurrent, setWeatherCurrent] = useState([]);
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorCode, setErrorCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function getWeather() {
      try {
        setIsLoading(true);
        let response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_APP_WEATHER_API_KEY
          }&q=Oslo&days=7&aqi=no&alerts=no`
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
        getWeather
      };       
}
export default useWeather;