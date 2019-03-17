import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3817265577604!2d3.3409568142668236!3d6.59939182410855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228a7aa91ef%3A0xbbb4cbc24e02984a!2sIkeja+Bus+Stop!5e0!3m2!1sen!2sng!4v1552822522694"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullscreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
