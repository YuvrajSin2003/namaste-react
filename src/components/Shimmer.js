import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img">card</div>
            <div className="shimmer-h2">card</div>
            <div className="shimmer-p">card</div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer; 