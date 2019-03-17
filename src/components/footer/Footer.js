import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className=" footer_logo_venue">The Venue</div>
        <div className="footer_copyright">&copy; 2019 | The Venue</div>
      </Fade>
    </footer>
  );
};

export default Footer;
