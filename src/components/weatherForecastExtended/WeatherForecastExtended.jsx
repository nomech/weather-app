import './WeatherForecastExtended.css';
import PropTypes from 'prop-types';

function WeatherForecastExtended ({condition, icon, maxTempC, maxTempF, location, date, windSpeed, humidity, feelsLikeC, feelsLikeF, theme, enabled, handleExit}) {
  const className = `weatherCardExtended-${enabled ? "true" : "false"}-${theme}`;    

  return (
    <>
    
    <div className={className}>
        <div className="basicInformation">
          <p>{date}</p>
          <img src={icon} alt="Weather icon" />
          <p>{condition}</p>
          <p>{Math.floor(maxTempC)} °C | {Math.floor(maxTempF)} °F</p>
          <p>{location}</p>
        </div>

        <div className='extendedInformation'>
          <p>Wind Speed: {windSpeed} km/h</p>
          <p>Humidity: {humidity}%</p>
          <p>Avrage temp: {Math.floor(feelsLikeC)} °C | {Math.floor(feelsLikeF)} °F</p>
        </div>
        <div className='extendedExit'>
          <button onClick={handleExit}>
            X
          </button>
        </div>
      </div>
    </>
  );
}

WeatherForecastExtended.propTypes= {
    condition: PropTypes.string,
    icon: PropTypes.string,
    maxTempC: PropTypes.number,
    maxTempF: PropTypes.number,
    location: PropTypes.string,
    date: PropTypes.string,
    windSpeed: PropTypes.number,
    humidity: PropTypes.number,
    feelsLikeC: PropTypes.number,
    feelsLikeF: PropTypes.number,
    theme: PropTypes.string,
    enabled: PropTypes.bool,
    handleExit: PropTypes.func
}


export default WeatherForecastExtended;
