import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { ShopContext } from "../../App";

import "./index.css";

const NavLinks = () => {
  const { count } = useContext(ShopContext);

  return (
    <div className="navContainer">
      <div className="links">
        <h1 className="logo">sneakers</h1>

        <p>Collections</p>
        <p>Men</p>
        <p>Women</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="checkout">
        <AiOutlineShoppingCart size={20} />
        <span>{count}</span>
      </div>
    </div>
  );
};

export default NavLinks;
