import "./PricingCardStyles.css"

import React from "react";

import { Link } from "react-router-dom";

const PricingCard = () => {
  return <div className="pricing">
    <h1 className="pricing heading">Affordable Pricing for StealthShare Features</h1>
    <div className="card-container">
        <div className="card">
            <h3>- Privacy Protection and Redaction Logic -</h3>
            <span className="bar"></span>
            <p className="btc">$ 100</p>
            <p>- Secure Story Sharing -</p>
            <p>- 3 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">
                PURCHASE NOW
            </Link>
          </div>         

          <div className="card">
            <h3>- Front-End Development and Intuitive User Interface -</h3>
            <span className="bar"></span>
            <p className="btc">$ 200</p>
            <p>- StealthShare Web Application -</p>
            <p>- StealthShare Mobile App -</p> 
            <p>- 5 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">
                PURCHASE NOW
            </Link>
          </div>         

          <div className="card">
            <h3>- Self-Containment and Security -</h3>
            <span className="bar"></span>
            <p className="btc">$ 300</p>
            <p>- Self-Contained Security System -</p>
            <p>- 8 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">
                PURCHASE NOW
            </Link>
          </div>         
        </div>
    </div>
  
}

export default PricingCard;