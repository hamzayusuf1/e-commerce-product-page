import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { ShopContext } from "../../App";
import Cart from "../Cart";

import "./index.css";

const NavLinks = () => {
  const { count } = useContext(ShopContext);

  const [show, setShow] = useState(false);

  console.log(show);

  const closeCart = () => {
    setShow(false);
  };
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
        <div
          className="checkout"
          onClick={() => {
            setShow(!show);
          }}
        >
          <AiOutlineShoppingCart size={20} />
          <span>{count}</span>
        </div>
      </div>
      <Cart show={show} closeCart={closeCart} />
    </>
  );
};

export default NavLinks;
