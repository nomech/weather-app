import "./WeatherCard.css"
import PropTypes from 'prop-types';


function WeatherCard({ condition, icon, maxTempC, maxTempF, location, date }) {



    return (
      <>
      <div className="weatherCard">
        <img src={icon} />
        <p>{condition}</p>
        <p>{Math.floor(maxTempC)} °C | {Math.floor(maxTempF)} °F</p>
        <p>{location}</p>
        <p>{date}</p>
        </div>
      </>
    );
  }
 
  WeatherCard.propTypes= {
    condition: PropTypes.string,
    icon: PropTypes.string,
    maxTempC: PropTypes.number,
    maxTempF: PropTypes.number,
    location: PropTypes.string,
    date: PropTypes.string
  }

  export default WeatherCard