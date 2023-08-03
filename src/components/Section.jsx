import PropTypes from "prop-types";

import "./Item.css";

const Section = ({children, backgroundImg}) => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >{ children}</section>
  );
}
Section.propTypes = {
  children: PropTypes.object.isRequired,
  backgroundImg: PropTypes.string.isRequired,
};

export default Section;
