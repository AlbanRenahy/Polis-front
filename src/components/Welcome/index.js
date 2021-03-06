import React from "react";
import PropTypes from "prop-types";
// Composants
// Styles et assets
import Logo from "../../styles/images/logo-saumon.png";
import Background from "../../styles/images/BG-Login-Signin.jpg";
import "./welcome.scss";

/**
 * Code
 */
const Welcome = ({ children }) => (
  <div
    id="welcome"
    style={{
      backgroundImage: `url(${Background})`,
    }}
  >
    <div className="welcome-container">
      <h1>
        <img src={Logo} alt="Polis" />
      </h1>
      <p className="welcome-container_subtitle">
        En grec ancien πόλις <span>la cité</span>
      </p>

      {children}
    </div>
  </div>
);

Welcome.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Welcome;
