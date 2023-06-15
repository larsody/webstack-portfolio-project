import "./HeroImgStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import Introbg from "../assets/introbg.jpg";

const HeroImg = () => {

  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={Introbg} alt="" />
        </div>  
          <div className="content">
            <p>Hi, I'M A FREELANCER.</p>
            <h1>FullStack Developer.</h1>
            <div>
              <Link to="/project"
              className="btn">Project</Link>
              <Link to="/content"
              className="btn
              btn-light">Content</Link>
            </div>

          </div>  
    </div>
  );
};

export default HeroImg;