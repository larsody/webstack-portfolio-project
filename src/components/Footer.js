import "./FooterStyles.css";
import React from "react";

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:
                "#fff", marginRight: "2rem"}} />
                <div>
                    <p>House CR06, Castle Rock Apartments, </p>
                    <p> Plot 239 P.O.W. Mafemi Crescent, Utako, Abuja, Nigeria, West Africa.</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone 
                size={20} 
                style={{color:
                "#fff", marginRight: "2rem"}} 
                />
                +234 706 054 1541, +234 805 526 3178
                </h4>
            </div>
            <div className="email">
                <h4>
                <FaMailBulk 
                size={20} 
                style={{color:"#fff", 
                marginRight: "2rem"}} 
                />
                larsody@gmail.com
                </h4>
            </div>
        </div>

        <div className="right">
            <h4>About the Company</h4>
            <p> At StealthShare, we are the architects of digital fortresses, the guardians of privacy in the ever-expanding
            kingdom of content sharing. Our pioneering web application is more than just a shield; it is a key to
            empowerment and protection.
            </p>

            <div className="social">
            <a href="https://web.facebook.com/sirkayodeodeyemi?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://twitter.com/larsody" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://www.linkedin.com/in/kayode-odeyemi-98090b72/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
