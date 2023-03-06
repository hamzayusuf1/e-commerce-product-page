import React, { useContext } from "react";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";

import "./index.css";
import { ShopContext } from "../../App";

const Cart = ({ show, closeCart }) => {
  const { count } = useContext(ShopContext);
  return (
    <div className="cart">
      {show ? (
        <div className="cartDiv">
          <div className="cartHeader">
            <p>Cart</p>
            <AiOutlineClose onClick={closeCart} />
          </div>
          <div className="space-between">
            <div className="cartMain">
              <img src="images/image-product-1.jpeg" />
              <p>{`$125 x ${count}`}</p>
              <span className="total">{`$${125 * count}`}</span>
            </div>
            <div className="delIcon">
              <AiOutlineDelete size={25} />
            </div>
          </div>
          <div className="checkoutBtn">
            <p>Checkout</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
