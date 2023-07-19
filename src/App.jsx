import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WeatherCard from "./components/weatherCard";
import { convertDate, getDay } from "./components/convertDate";

function App() {
  const [weatherLocation, setWeatherLocation] = useState([]);
  const [weatherCurrent, setWeatherCurrent] = useState([]);
  const [weatherForecast, setWeatherForecast] = useState([]);

  async function getWeather() {
    try{
    let response = await fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=cb764fe31c284560881210432231807&q=Oslo&days=7&aqi=no&alerts=no"
    );
    let data = await response.json();
    setWeatherLocation(data.location);
    setWeatherCurrent(data.current);
    setWeatherForecast(data.forecast.forecastday);
    } catch(error) {
      console.log('Error encountered: ' + error)
    }
  }

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
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h3>Powered by Vite + React</h3>

        <h1>My Weather app</h1>
        <button onClick={getWeather}>Get me some new weather yo!</button>

        <div className="weatherContainer">
          <div className="currentWeather">
            <div>
            <p>Current Weather</p>
            </div>
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
          
          <div>
          <p>Forecast</p>
          
          </div>

          <div className="weatherForecast">            
            {weatherLocation.name
              ? weatherForecast.slice(1).map((forcast, index) => (
                  <WeatherCard
                    key={index}
                    condition={forcast.day.condition.text}
                    icon={forcast.day.condition.icon}
                    maxTempC={forcast.day.maxtemp_c}
                    maxTempF={forcast.day.maxtemp_f}
                    location={weatherCurrent.location}
                    date={getDay(forcast.date) + ' ' + convertDate(forcast.date)}
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
