import React from "react";
import './Logo.css';
import logo from '../../assets/images/logo.png';

export default function Logo() {
  return (
    <div className="Logo">
      <div>
        <figure style={{margin:"0px"}}>
          <img  width="124" height="165" src={logo} alt="Quadball Australia Logo"/>
        </figure>
      </div>
      <div>
        <h3 style={{margin:"15px", width:"140px"}}>Quadball Australia</h3>            
      </div>
    </div>
  );
} 