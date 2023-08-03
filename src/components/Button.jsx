import "./Button.css"

import PropTypes from 'prop-types';


function Button({ imp, text, link }) {
  return (
    <div className={ `button ${imp === "secondary" ? "button__white" : ""}` }>
      <a href={ link }>{ text }</a>
    </div>
  );
}


Button.propTypes = {
  imp: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}
export default Button;
