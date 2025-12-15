import React from "react";


const bits = ["< />", "{ }", "JS", "React", "HTML", "CSS", "Node.js"];

const ReactBitsBackground = () => {
  return (
    <div className="bits-background">
      {bits.map((bit, index) => (
        <span key={index} className={`bit bit-${index}`}>
          {bit}
        </span>
      ))}
    </div>
  );
};

export default ReactBitsBackground;
