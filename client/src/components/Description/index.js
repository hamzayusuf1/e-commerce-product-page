import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import "./index.css";

const Description = () => {
  return (
    <div className="allText">
      <p>sneaker company</p>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
        These low profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </p>
      <h1>
        $125.00 <span>50%</span>
      </h1>
      <p>$250.00</p>
      <div className="btns">
        <div className="quantityBtn">
          <AiOutlineMinus color="orange" />
          <p>0</p>
          <AiOutlinePlus color="orange" />
        </div>
        <div className="checkoutBtn">
          <AiOutlineShoppingCart />
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
