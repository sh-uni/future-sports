import React from "react";
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="SocialLinks">
      {/* Link media icon styling */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      
      <h4 style={{marginLeft: "10px"}}>Quadball Australia</h4>
      <div>
        <a href="https://www.facebook.com/quadballaustralia/" className="fa fa-facebook"></a>
        <a href="https://www.youtube.com/@QuadballAustralia/" className="fa fa-youtube-play"></a>
        <a href="https://www.instagram.com/quadballaustralia/" className="fa fa-instagram"></a>
      </div>
    </div>
  );
};

export default SocialLinks;