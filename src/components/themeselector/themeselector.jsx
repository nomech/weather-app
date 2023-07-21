import "./themeselector.css";
import PropTypes from "prop-types";

function ThemeSelector({ setTheme, theme }) {
  const handleSwitch = (event) => {
    if (event.target.checked) {
      if (theme == "dark") {
        setTheme("light");
      }
    } else {
      setTheme("dark");
    }
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={handleSwitch} />
        <span className="slider"> </span>
      </label>
    </div>
  );
}

ThemeSelector.propTypes = {
  setTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default ThemeSelector;
