import React, { useState } from "react";
import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  const [expanded, setExpanded] = useState(false);

  const togglePanel = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="work-container">
      <h1 className="project-heading">Explore Our Visionary Projects</h1>
      {WorkCardData.map((data, index) => (
        <div key={index} onClick={togglePanel}>
          <WorkCard
            key={index}
            title={expanded ? data.title : "Click to Expand"}
          />
          {expanded && (
            <WorkCard
              key={index}
              imgsrc={data.imgsrc}
              text={data.text}
              view={data.view}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Work;
