import React from 'react'
import './Welcome.css';
import mainImage from '../../assets/images/main.jpg';

const Welcome = () => {
 
  return (
  <div>
    <div className="Welcome">
      <h1>Welcome</h1>
      <p>We&apos;re proud to introduce you to Quadball Australia, home of the Australian Dropbears</p>  
      <button>Meet the Teams</button>
    </div>
    <div>
      <figure style={{margin:"0px"}}>
        <img  style={{width:"100%"}} src={mainImage} alt="Quadball Team Break"/>
      </figure>
    </div>
  </div>
  );
};

export default Welcome;