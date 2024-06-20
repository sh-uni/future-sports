import React from "react";
import './Footer.css';
import SocialLinks from "./SocialLinks";
import DocLinks from "./DocLinks";

const Footer = () => {
  return (
      <div className="Footer">
          <SocialLinks />
          <DocLinks />
      </div>
  );
};

export default Footer;