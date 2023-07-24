import './weatherCardExtended.css';
import PropTypes from 'prop-types';

function WeatherCardExtended({ condition, icon, maxTempC, maxTempF, location, date, windSpeed, windDirection, humidity, feelsLikeC, feelsLikeF, theme, enabled }) {
  const className = `weatherCardExtended-${enabled ? "true" : "false"}-${theme}`;    

  return (
    <>
    
      <div className={className}>
        <div className="basicInformation">
          <hr />
          <p>{date}</p>
          <img src={icon} alt="Weather icon" />
          <p>{condition}</p>
          <p>{Math.floor(maxTempC)} °C | {Math.floor(maxTempF)} °F</p>
          <p>{location}</p>
          <hr />
        </div>

        <div className='extendedInformation'>
          <hr />
          <p>Wind Speed: {windSpeed} km/h</p>
          <p>Wind Direction: {windDirection}</p>
          <p>Humidity: {humidity}%</p>
          <br /> 
          <p>Feels Like: {Math.floor(feelsLikeC)} °C | {Math.floor(feelsLikeF)} °F</p>
        </div>
        <div className='extendedExit'>
            X
        </div>
      </div>
    </>
  );
}

WeatherCardExtended.propTypes= {
  condition: PropTypes.string,
  icon: PropTypes.string,
  maxTempC: PropTypes.number,
  maxTempF: PropTypes.number,
  location: PropTypes.string,
  date: PropTypes.string,
  windSpeed: PropTypes.number,
  windDirection: PropTypes.string,
  humidity: PropTypes.number,
  feelsLikeC: PropTypes.number,
  feelsLikeF: PropTypes.number,
  theme: PropTypes.string,
  enabled: PropTypes.bool
}

export default WeatherCardExtended;
