import PropTypes from 'prop-types';

const errorMessages = {
     1002:'Error: My Key seems to be missing, intresting.....',
     1003:'Please enter a location',
     1005: 'Error: Seems like the URL is either wrong or missing, hmm....',
     1006: 'It does not not look like this place exist, maybe its in another gaalxy?',
     2006: 'Error: I seem to have the wrong key, ups...',
     2007: 'Error: Sorry, I am not allowed to make any more calls. Limit has beebn reached',
     2009: 'Error: Seems like we are not allowed to access this place, move along',
     9000: 'Error: Json body passed in bulk re... blah... blah... blah... Just contact the system administrator',
     9001: 'Error: Json body contains too many re... blah... blah... blah... Just contact the system administrator',
     9999: 'Internal application error.'
}

function ErrorHandler({ errorCode }) {
  return (
    <p>
      {errorMessages[errorCode] || 'An unknown error occurred. Please contact the system administrator.'}
    </p>
  );
}


ErrorHandler.propTypes= {
    errorCode: PropTypes.number,
 }

export default ErrorHandler;
