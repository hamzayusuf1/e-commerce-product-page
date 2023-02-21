import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./index.css";

const NavLinks = () => {
  return (
    <div className="navContainer">
      <div className="links">
        <h1>sneakers</h1>

        <p>Collections</p>
        <p>Men</p>
        <p>Women</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="checkout">
        <AiOutlineShoppingCart size={20} />
      </div>
    </div>
  );
};

export default NavLinks;
