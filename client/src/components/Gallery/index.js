import React from "react";

import "./index.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="mainImage">
        <img src="https://via.placeholder.com/300" />
      </div>
      <div className="images">
        <img src="https://via.placeholder.com/60" />
        <img src="https://via.placeholder.com/60" />
        <img src="https://via.placeholder.com/60" />
        <img src="https://via.placeholder.com/60" />
      </div>
    </div>
  );
};

export default Gallery;
