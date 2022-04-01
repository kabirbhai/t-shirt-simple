import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  //Conditional rendering
  //1. Element variable.
  //2. ternary operator
  //3. && operator (shorthand)
  //4. || operator

  // style with variable
  const orOperatorStyle = {
    backgroundColor: "gray",
    color: "white",
    border: "2px solid red",
    padding: "8px",
  };

  let command;
  if (cart.length === 0) {
    command = <p>Please add atleast 1 item</p>;
  } else if (cart.length === 1) {
    command = <p>Add more..</p>;
  } else {
    command = <p>Thanks for adding item!!</p>;
  }
  return (
    <div>
      <h1>Item selected {cart.length}</h1>

      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt)}>x</button>
        </p>
      ))}
      {/* {command} */}
      {cart.length === 0 || <p style={orOperatorStyle}>yay!! you are buying</p>}
      {cart.length === 3 && (
        <p style={{ backgroundColor: "orange" }}>you are done</p>
      )}
      {cart.length !== 3 ? " " : <button>Remove all</button>}
    </div>
  );
};

export default Cart;
