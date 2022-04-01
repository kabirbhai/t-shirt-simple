import React from "react";
import "./TShirt.css";

const TShirt = ({ handleAddToCart, tShirt }) => {
  const { name, picture, price } = tShirt;
  return (
    <div>
      <div className="t-shirt">
        <img src={picture} alt="" />
        <h3>{name}</h3>
        <p>{price}</p>
        <button onClick={() => handleAddToCart(tShirt)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default TShirt;
