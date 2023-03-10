import React, { useState, useContext } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { ShopContext } from "../../App";
import { useCartContext } from "../../contexts/CartContext";

import "./index.css";

const Description = () => {
  // const { count, setCount } = useContext(ShopContext);
  const { orderNum, setOrderNum, prodName, setShowCart, count, setCount } =
    useCartContext();

  const handleDecrement = () => {
    count > 0 ? setCount(count - 1) : setCount(count);
  };

  const handleIncrement = () => {
    setCount(count + 1);
    console.log("increase");
  };

  const handleCheckout = () => {
    if (count > 0) {
      setOrderNum(count);
      setShowCart(true);
    }
  };

  return (
    <div className="allText">
      <p>sneaker company</p>
      <h2>{prodName}</h2>
      <p>
        These low profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </p>
      <div className="prices">
        <h3>$125.00</h3>
        <p>50%</p>
      </div>
      <p className="exPrice">$250.00</p>
      <div className="btns">
        <div className="quantityBtn">
          <AiOutlineMinus
            color="orange"
            style={{ cursor: "pointer" }}
            onClick={handleDecrement}
          />
          <p>{count}</p>
          <AiOutlinePlus
            color="orange"
            style={{ cursor: "pointer" }}
            onClick={handleIncrement}
          />
        </div>

        {/* <div className="addBtn" onClick={addToCart}>
          <AiOutlineShoppingCart />
          <p>Add to cart</p>
        </div> */}
        <button onClick={handleCheckout}>Add to cart </button>
      </div>
    </div>
  );
};

export default Description;
