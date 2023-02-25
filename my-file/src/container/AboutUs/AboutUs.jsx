import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.spoons} alt="" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
          id error ipsam nesciunt iste adipisci, deserunt enim quos, dolorum
          eveniet ex porro animi soluta quo. Ullam, veniam placeat recusandae
          quos pariatur, aut ad debitis provident culpa odit iure, expedita
          repudiandae!
        </p>
        <button type="butoon" className="custom__button">Know More</button>
      </div>


      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
          id error ipsam nesciunt iste adipisci, deserunt enim quos, dolorum
          eveniet ex porro animi soluta quo. Ullam, veniam placeat recusandae
          quos pariatur, aut ad debitis provident culpa odit iure, expedita
          repudiandae!
        </p>
        <button type="butoon" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
