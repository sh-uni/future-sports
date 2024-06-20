import React from 'react';
import './PhotoGallery.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Carousel_1 from '../../assets/images/carousel-1.webp';
import Carousel_2 from '../../assets/images/carousel-2.jpg';
import Carousel_3 from '../../assets/images/carousel-3.jpg';
import Carousel_4 from '../../assets/images/carousel-4.jpg';
import Carousel_5 from '../../assets/images/carousel-5.jpg';
import Carousel_6 from '../../assets/images/carousel-6.jpg';

const carouselProp = {
    showStatus: false,
    showThumbs: false,
    useKeyboardArrows: true,
    infiniteLoop: true,
    autoPlay: true,
    stopOnHover: true,
    emulateTouch: true,
    transitionTime: 400,
    showArrows: false,
    renderArrowPrev: (clickHandler, hasPrev, label) => {
      return (
        <span className="arrow-left" id="arrow-left" onClick={clickHandler}>
          <button className="Prev">Previous</button>
        </span>
      )
    },
    renderArrowNext: (clickHandler, hasNext, label) => {
      return (
        <span className="arrow-right" id="arrow-right" onClick={clickHandler}>
          <button className="Next">Next</button>
        </span>
      )
    },
}

function prevImg() {
    document.getElementById('arrow-left').click();
}

function nextImg() {
    document.getElementById('arrow-right').click();
}


const PhotoGallery = () => {
  return (
    <div className="Carousel" id="Carousel">
      <Carousel {...carouselProp}>
        <div>
          <img src={Carousel_1} />
          <p className="legend">Quadball Gameplay 1</p>
        </div>
        <div>
          <img src={Carousel_2} />
          <p className="legend">Team Celebration</p>
        </div>
        <div>
          <img src={Carousel_3} />
          <p className="legend">Australian Team Chanting</p>
        </div>
        <div>
          <img src={Carousel_4} />
          <p className="legend">Quadball Gameplay 2</p>
        </div>
        <div>
          <img src={Carousel_5} />
          <p className="legend">Quadball Gameplay 3</p>
        </div>
        <div>
          <img src={Carousel_6} />
          <p className="legend">Team With Shield</p>
        </div>
      </Carousel>
      <div id="button-row">
        <button className="Prev" onClick={prevImg}>Previous</button>
        <button className="Next" onClick={nextImg} style={{marginLeft:"12px"}}>Next</button>
      </div>
    </div>
  );
};

export default PhotoGallery;