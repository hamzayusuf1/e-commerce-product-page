import React, { useState } from "react";

import "./index.css";

const Gallery = () => {
  const [imgUrl, setImgUrl] = useState("/images/image-product-1.jpeg");

  const imgs = [
    { id: 0, url: "http:..localhost:" },
    { id: 0, url: "" },
    { id: 0, url: "" },
    { id: 0, url: "" },
  ];

  console.log(imgUrl);

  const handleClick = (e) => {
    const path = e.target.src.split("/").slice(-2).join("/");
    console.log(path);
    setImgUrl(path);
  };

  return (
    <div className="gallery">
      <div className="mainImage">
        <img src={imgUrl} />
      </div>
      <div className="images">
        <img src={`/images/image-product-1.jpeg`} onClick={handleClick} />
        <img src={`/images/image-product-2.jpeg`} onClick={handleClick} />
        <img src={`/images/image-product-3.jpeg`} onClick={handleClick} />
        <img src={`/images/image-product-4.jpeg`} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Gallery;
