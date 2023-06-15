import React from "react";
import "./NewsletterStyles.css";

const Newsletter = (props) => {
  return (
    <div className="heros-img">
      <div className="headings">
        <h1>{props.headings}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Newsletter;
