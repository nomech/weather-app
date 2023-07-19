import useWeather from "./components/utils/weather";
import "./App.css";
import WeatherCard from "./components/weathercard/weatherCard";
import { convertDate, getDay } from "./components/utils/convertDate";

function App() {
  const {
    weatherLocation,
    weatherCurrent,
    weatherForecast,
    isLoading,
    errorCode,
    errorMessage,
    getWeather,
  } = useWeather();

  //testing purpose
  //getWeather()
  //setInterval(getWeather, 60 * 60 * 1000);

  //in case I add submit button
  /*
  function handleEnter(event) {
    if (event.which === 13) {
      getWeather();
    }
  }
*/
  return (
    <>
      <div className="bodyContainer">
        <div className="titleLogo">
          {/* Display logos for Vite and React */}
          <h1>My Weather App</h1>
          <div>
            <img
              src="https://cdn.weatherapi.com/weather/64x64/day/116.png"
              className="weatherLogo"
              alt="Weather logo"
            />
          </div>
        </div>
        <div>
          <h3>
            Powered by <span className="vite">Vite</span> +{" "}
            <span className="react">React</span>
          </h3>
        </div>
        <div className="fetchBtn">
          {/* Button to fetch new weather data */}
          <button onClick={getWeather}>Get me some weather yo!</button>
        </div>
        <div className="weatherContainer">
          <div className="currentWeather">
            {/* Display current weather if available */}

            {isLoading ? (
              <div className="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : null}

            {errorCode && (
              <p>
                Error {errorCode}: {errorMessage} Please contact the System
                Administrator
              </p>
            )}

            {!isLoading && weatherLocation.name ? (
              <div>
                <p>Current Weather</p>
              </div>
            ) : null}
            {weatherLocation.name ? (
              <WeatherCard
                condition={weatherCurrent.condition.text}
                icon={weatherCurrent.condition.icon}
                maxTempC={weatherCurrent.temp_c}
                maxTempF={weatherCurrent.temp_f}
                location={weatherCurrent.location}
                date="Today"
              />
            ) : null}
          </div>

          {/* Display forecast heading if weather data is available */}
          {weatherLocation.name ? (
            <div>
              <p>Forecast</p>
            </div>
          ) : null}
          <div className="weatherForecast">
            {/* Display forecast if weather data is available */}
            {weatherLocation.name
              ? weatherForecast
                  .slice(1)
                  .map((forcast) => (
                    <WeatherCard
                      key={forcast.date}
                      condition={forcast.day.condition.text}
                      icon={forcast.day.condition.icon}
                      maxTempC={forcast.day.maxtemp_c}
                      maxTempF={forcast.day.maxtemp_f}
                      location={weatherCurrent.location}
                      date={
                        getDay(forcast.date) + " " + convertDate(forcast.date)
                      }
                    />
                  ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
