import PropTypes from "prop-types";

import "./Item.css";

const Section = ({ children, backgroundImg, className }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
      className={className}
    >
      {children}
    </section>
  );
};
Section.propTypes = {
  children: PropTypes.object.isRequired,
  backgroundImg: PropTypes.string.isRequired,
};

export default Section;
