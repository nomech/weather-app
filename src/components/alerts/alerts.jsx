import "./alerts.css"
import PropTypes from 'prop-types';


function Alerts({ headline, severity, urgency, areas, certainty,event,note,desc,instruction, onClick  }) {



    return (
      <>
      <div className={`alerts`} onClick={onClick}> 
        <hr />
        <p>{headline}</p>
        <p>Severity: {severity}</p>
        <p>Urgency: {urgency} </p>
        <p>Areas: {areas}</p>
        <p>Certainty: {certainty}</p>
        <p>Event: {event}</p>
        <p>NOTE: {note}</p>
        <p>Description: {desc}</p>
        <p>Please follow these instruction: {instruction}</p>

        <hr />
        </div>
      </>
    );
  }
 
  Alerts.propTypes= {
    headline: PropTypes.string,
    severity: PropTypes.string,
    urgency: PropTypes.string,
    areas: PropTypes.string,
    certainty: PropTypes.string,
    event: PropTypes.string,
    note: PropTypes.string,
    desc: PropTypes.string,
    instruction: PropTypes.string,
    onClick: PropTypes.func
  }


  

  export default Alerts