import useWeather from "./components/utils/weather";
import "./App.css";
import WeatherCard from "./components/weathercard/weatherCard";
import { convertDate, getDay } from "./components/utils/convertDate";
import Loadingspinner from "./components/loadingspinner/loadingspinner";
import ErrorHandler from "./components/errorhandler/errorhandler";
import Autocomplete from "react-google-autocomplete";
import Dayselector from "./components/dayselector/dayselector";
import { useState } from "react";
import ThemeSelector from "./components/themeselector/themeselector";

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

  return (
    <>
      <div className="theme">
        <div className={`${theme}`}>
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
              <div className="fetchBtn">
                {/* Button to fetch new weather data */}
                <button className={`fetchBtn${theme}`} onClick={getWeather}>Get me some weather!</button>
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
                    theme={theme}
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
                      .map((forcast) => (
                        <WeatherCard
                          key={forcast.date}
                          condition={forcast.day.condition.text}
                          icon={forcast.day.condition.icon}
                          maxTempC={forcast.day.maxtemp_c}
                          maxTempF={forcast.day.maxtemp_f}
                          location={weatherCurrent.location}
                          date={
                            getDay(forcast.date) +
                            " " +
                            convertDate(forcast.date)
                          }
                          theme={theme}
                        />
                      ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
