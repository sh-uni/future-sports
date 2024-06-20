// Main.js
import React from "react";
import './Main.css';
import Welcome from "./Welcome";
import MainText from "./MainText";
import PhotoGallery from "./PhotoGallery";
import Video from "./Video";
import Left from "./Left/Left";
import Aside from "./Aside/Aside";

const Main = () => {
  return (
    <div className="MainSection">
      <Welcome />
      <MainText />
      <div className="Media">
        <PhotoGallery />
        <Video />
      </div>
      <div className="Content">
        <Left />
        <Aside />
      </div>
    </div>
  );
};

export default Main;