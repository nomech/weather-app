import "./WeatherCard.css"
import PropTypes from 'prop-types';


function WeatherCard({ condition, icon, maxTempC, maxTempF, location, date, onClick,  }) {



    return (
      <>
      <div className={`weatherCard`} onClick={onClick}> 
        <hr />
        <p>{date}</p>
        <img src={icon} />
        <p>{condition}</p>
        <p>{Math.floor(maxTempC)} °C | {Math.floor(maxTempF)} °F</p>
        <p>{location}</p>
        <hr />
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
    date: PropTypes.string,
    onClick: PropTypes.func
  }


  

  export default WeatherCard