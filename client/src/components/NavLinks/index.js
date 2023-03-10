import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { ShopContext } from "../../App";
import { useCartContext } from "../../contexts/CartContext";
import Cart from "../Cart";
import Profile from "../../assets/profile.png";

import "./index.css";

const NavLinks = () => {
  const { count } = useContext(ShopContext);
  const { orderNum, showCart, setShowCart } = useCartContext();

  // const handleClick = useEffect(() => {
  //   setShowCart(true);
  // }, []);

  return (
    <>
      <div className="navContainer">
        <div className="links">
          <h1 className="logo">sneakers</h1>

          <p>Collections</p>
          <p>Men</p>
          <p>Women</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div className="profileCart">
          <div className="icon-and-cart">
            <div className="checkout">
              <AiOutlineShoppingCart
                size={20}
                onClick={() => {
                  setShowCart(!showCart);
                }}
              />
              <span>{orderNum}</span>
            </div>
            <Cart />
          </div>
          <img className="profilePic" src={Profile} />
        </div>
      </div>
    </>
  );
};

export default NavLinks;
