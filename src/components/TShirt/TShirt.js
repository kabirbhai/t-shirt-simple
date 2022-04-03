import React from "react";
import "./TShirt.css";

const TShirt = ({ handleAddToCart, tShirt }) => {
  const { name, picture, price } = tShirt;
  return (
    <div>
      <div className="border-2 rounded-lg w-3/4 mx-auto">
        <img className="w-3/4 mx-auto" src={picture} alt="" />
        <h2 className="text-gray-800">{name}</h2>
        <p>
          <strong>{price}</strong>
        </p>
        <button
          className="border-2 rounded-lg px-4 py-2 my-2 hover:bg-purple-500 cursor-pointer hover:text-yellow-100"
          onClick={() => handleAddToCart(tShirt)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default TShirt;
