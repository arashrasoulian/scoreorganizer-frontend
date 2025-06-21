import React, { useState } from "react";
import { Link } from "react-router-dom";
import ZoomInOnScroll from "../ZoomInOnScroll";
const Coverunderlists = () => {
  return (
    <div className="coverunderlists-homepage-container">
      <div className="coverunderlists-homepage-background">
        <img src= "images/homepage_ad/backgroundcover2.png"/>
      </div>

      <ZoomInOnScroll className="coverunderlists-homepage-image-container">
        <img src="images/homepage_ad/coverunderlists.png" alt="imageforcover" />
      </ZoomInOnScroll>
      <ZoomInOnScroll delay={1000} className="coverunderlists-homepage-text-container">
        <p> Musicians</p>

        <p>need to be</p>
        <p>Organized</p>
      </ZoomInOnScroll>
    </div>
  );
};
export default Coverunderlists;
