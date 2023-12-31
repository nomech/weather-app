import PropTypes from 'prop-types';
import './dayselector.css'

function Dayselector({setDays}) {


  const handleDays = (event) => {
    setDays(parseInt(event.target.value))
  }

  return (
    <div>
      <label htmlFor="days">Show forecast for the next </label>
      <select name="days" id="days" className={`days`} onChange={handleDays}>
        <option value="3">2</option>
        <option value="5">4</option>
        <option value="7">6</option>
      </select>
    </div>
  )
  
}

Dayselector.propTypes = {
    setDays: PropTypes.func.isRequired,
    theme: PropTypes.string
  };
  

export default Dayselector;
