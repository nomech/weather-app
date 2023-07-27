import useWeather from "./components/utils/weather";
import "./App.css";
import WeatherCard from "./components/weathercard/weatherCard";
import { convertDate, getDay } from "./components/utils/convertDate";
import Loadingspinner from "./components/loadingspinner/loadingspinner";
import ErrorHandler from "./components/errorhandler/errorhandler";
import Autocomplete from "react-google-autocomplete";
import Dayselector from "./components/dayselector/dayselector";
import { useState, useEffect } from "react";
import ThemeSelector from "./components/themeselector/themeselector";
import WeatherCardExtended from "./components/weatherCardExtended/weatherCardextended";
import WeatherForecastExtended from "./components/weatherForecastExtended/WeatherForecastExtended";


function App() {
  const {
    weatherLocation,
    weatherCurrent,
    weatherForecast,
    isLoading,
    errorCode,
    search,
    getWeather,
    handleSubmit,
    handleSearch,
  } = useWeather();

  const [days, setDays] = useState("3");
  const [theme, setTheme] = useState("dark");
  const [enabled, setEnabled] = useState(false);
  const [foreCastEnabled, setForeCastEnabled] = useState(false);
  const [index, setIndex] = useState('');
 

  const handleEnabled = () => {
    setEnabled(!enabled);
  };

  const handleForeCastEnabled = (index) => {
    setForeCastEnabled(!foreCastEnabled);
    setIndex(index + 1);
    console.log(weatherForecast[index].day.condition.icon)
  };


  const handleExit = () => {
    setEnabled(false);
    setForeCastEnabled(false)

  };

  useEffect(() => {
    const originalBodyColor = document.body.style.backgroundColor;
    
    const weatherElements = document.querySelectorAll('.weatherCard');
    const originalWeatherColors = [];
    const originalWeatherShadows = [];
    
    const daysElement = document.querySelector('.days');    
    const originalDaysColor = daysElement ? daysElement.style.backgroundColor : null;
  
    const fetchBtnElement = document.querySelector('.fetchBtn');
    const originalFetchBtnColor = fetchBtnElement ? fetchBtnElement.style.backgroundColor : null;
    
    document.body.style.backgroundColor = theme === 'light' ? '#00a4e4' : '#292530';
    
    if (fetchBtnElement) fetchBtnElement.style.backgroundColor = theme === 'light' ? '#0088b3' : '#000000aa';
  
    weatherElements.forEach((element, index) => {
      originalWeatherColors[index] = element.style.backgroundColor;
      originalWeatherShadows[index] = element.style.getPropertyValue('--shadow-color');
    
      element.style.backgroundColor = theme === 'light' ? '#0088b3' : '#1a1a1a';
      element.style.setProperty('--shadow-color', theme === 'light' ? '#ffffffaa' : '#000000aa');
    });
    
    if (daysElement) daysElement.style.backgroundColor = theme === 'light' ? '#0088b3' : '#1a1a1a';
  
    return () => {
      document.body.style.backgroundColor = originalBodyColor;
    
      if (fetchBtnElement) fetchBtnElement.style.backgroundColor = originalFetchBtnColor;
    
      weatherElements.forEach((element, index) => {
        element.style.backgroundColor = originalWeatherColors[index];
        element.style.setProperty('--shadow-color', originalWeatherShadows[index]);
      });
  
      if (daysElement) daysElement.style.backgroundColor = originalDaysColor;
    }
  }, [theme, days]);
  
  
  
  

  return (
    <>
        <div className={`${theme}`}>
          <>
            {weatherLocation.name ? (
              <WeatherCardExtended
                condition={weatherCurrent.condition.text}
                icon={weatherCurrent.condition.icon}
                maxTempC={weatherCurrent.temp_c + 3}
                maxTempF={weatherCurrent.temp_f}
                location={weatherCurrent.location}
                date="Today"
                windSpeed={weatherCurrent.wind_kph}
                windDirection={weatherCurrent.wind_dir}
                humidity={weatherCurrent.humidity}
                feelsLikeC={weatherCurrent.feelslike_c}
                feelsLikeF={weatherCurrent.feelslike_f}
                theme={theme}
                enabled={enabled}
                handleExit={handleExit}
              />
            ) : null}
          </>
          <>
          {weatherForecast[index] ? (
              <WeatherForecastExtended
              icon={weatherForecast[index].day.condition.icon}
              condition={weatherForecast[index].day.condition.text}
              maxTempC={weatherForecast[index].day.maxtemp_c + 3}
              maxTempF={weatherForecast[index].day.maxtemp_f}
              date={getDay(weatherForecast[index].date) + " " + convertDate(weatherForecast[index].date)}
              windSpeed={weatherForecast[index].day.maxwind_kph}
              humidity={weatherForecast[index].day.avghumidity}
              feelsLikeC={weatherForecast[index].day.avgtemp_c}
              feelsLikeF={weatherForecast[index].day.avgtemp_f}
              handleExit={handleExit}
              enabled={foreCastEnabled}
              theme={theme}
              />
            ) : null}
          </>
          <div className={`blurConatiner-${enabled}`}>
          <div>
            <div className="bodyContainer">
              <div className="titleLogo">
                {/* Display logos for Vite and React */}
                <h1>Simple Weather App</h1>
                <div>
                  <img
                    src="https://cdn.weatherapi.com/weather/64x64/day/116.png"
                    className="weatherLogo"
                    alt="Weather logo"
                  />
                </div>
                <ThemeSelector setTheme={setTheme} theme={theme} />
              </div>
              <div>
                <h3>
                  Powered by <span className="vite">Vite</span> +{" "}
                  <span className="react">React</span>
                </h3>
              </div>
              <form className="inputForm" onSubmit={handleSubmit}>
                <div className="inputContainer">
                  <Autocomplete
                    apiKey={import.meta.env.VITE_APP_WEATHER_GOOGLE_API_KEY}
                    options={{
                      types: ["(cities)"],
                    }}
                    onPlaceSelected={handleSearch}
                    inputAutocompleteValue={search}
                  />
                </div>
                <div>
                  {/* Button to fetch new weather data */}
                  <button className={`fetchBtn`} onClick={getWeather}>
                    Get me some weather!
                  </button>
                </div>
              </form>
              <div className="weatherContainer">
                <div className="currentWeather">
                  {/* Display current weather if available */}

                  {isLoading && <Loadingspinner />}

                  {errorCode && <ErrorHandler errorCode={errorCode} />}

                  {!isLoading && weatherLocation.name ? (
                    <div>
                      <p>
                        Current Weather for {weatherLocation.name},{" "}
                        {weatherLocation.country}
                      </p>
                    </div>
                  ) : null}
                  {weatherLocation.name ? (
                    <WeatherCard
                      condition={weatherCurrent.condition.text}
                      icon={weatherCurrent.condition.icon}
                      maxTempC={weatherCurrent.temp_c + 3}
                      maxTempF={weatherCurrent.temp_f}
                      location={weatherCurrent.location}
                      date="Today"
                      onClick={handleEnabled}
                    />
                  ) : null}
                </div>

                {/* Display forecast heading if weather data is available */}
                {weatherLocation.name ? (
                  <>
                    <div className="foreCastTextContainer">
                      <Dayselector setDays={setDays} theme={theme} />
                      <div className="forecastLocation">
                        <p>
                          days for {weatherLocation.name},{" "}
                          {weatherLocation.country}
                        </p>
                      </div>
                    </div>
                  </>
                ) : null}
                <div className="weatherForecast">
                  {/* Display forecast if weather data is available */}
                  {weatherLocation.name
                    ? weatherForecast
                        .slice(1, days)
                        .map((forcast, index) => (
                      <WeatherCard
                        key={forcast.date}
                        condition={forcast.day.condition.text}
                        icon={forcast.day.condition.icon}
                        maxTempC={forcast.day.maxtemp_c}
                        maxTempF={forcast.day.maxtemp_f}
                        location={weatherCurrent.location}
                        date={getDay(forcast.date) + " " + convertDate(forcast.date)}
                        theme={theme}
                        onClick={() => handleForeCastEnabled(index)}
                      />
                       
                        ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
