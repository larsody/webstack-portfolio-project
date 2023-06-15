import "./AboutContentStyles.css";

import React from 'react'
import { Link } from 'react-router-dom';

import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who are We?</h1>
            <p>We, as the StealthShare team, are passionate about preserving privacy and prioritizing user-centric design, aiming to contribute to privacy discourse while providing individuals with a reliable, secure, and self-reliant solution for content sharing.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div 
            className="img-container">
                <div className="img-stack top">
                <img src className="" alt="true" />
                </div>

                <div className="img-stack top">
                <img src={React2} className="img" 
                alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;