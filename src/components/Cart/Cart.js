import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h1>Item selected {cart.length}</h1>
      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
