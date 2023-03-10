import React, { useContext } from "react";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";

import "./index.css";
import { ShopContext } from "../../App";
import { useCartContext } from "../../contexts/CartContext";

const Cart = ({ closeCart }) => {
  const { orderNum, showCart } = useCartContext();
  console.log(showCart);
  return (
    // <div className="cart">
    //   {showCart ? (
    //     <div className="cartDiv">
    //       <div className="cartHeader">
    //         <p>Cart</p>
    //         <AiOutlineClose onClick={closeCart} />
    //       </div>
    //       <div className="space-between">
    //         <div className="cartMain">
    //           <img src="images/image-product-1.jpeg" />
    //           <p>{`$125 x ${orderNum}`}</p>
    //           <span className="total">{`$${125 * orderNum}`}</span>
    //         </div>
    //         <div className="delIcon">
    //           <AiOutlineDelete size={25} />
    //         </div>
    //       </div>
    //       <div className="checkoutBtn">
    //         <p>Checkout</p>
    //       </div>
    //     </div>
    //   ) : (
    //     ""
    //   )}
    // </div>

    <div className="cart">
      <div className="cartDiv">
        <div className="cartHeader">
          <h5>Cart</h5>
          <AiOutlineClose />
        </div>
        <div className="cardContent">
          <p>Your cart is empty</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
