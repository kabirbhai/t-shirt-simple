import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import SelectedItems from "../SelectedItems/SelectedItems";

import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  //Conditional rendering
  //1. Element variable.
  //2. ternary operator
  //3. && operator (shorthand)
  //4. || operator
  const [chooses, setChooses] = useState([]);

  const chooseOne = (choose) => {
    const newChoose = choose[Math.floor(Math.random() * choose.length)];
    setChooses(newChoose);
  };

  return (
    <div>
      <h1 className="text-2xl text-orange-700 underline">
        Selected Item{" "}
        {cart.length >= 1 && (
          <strong className="text-black ">{cart.length}</strong>
        )}
      </h1>

      {cart.map((tShirt) => (
        <SelectedItems
          key={tShirt._id}
          tShirt={tShirt}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
      {cart.length >= 4 && (
        <div>
          <button
            onClick={() => chooseOne(cart)}
            className="border-2 m-2 p-1 rounded-md hover:bg-purple-600 hover:text-white font-bold "
          >
            Choose One
          </button>
          <button className="border-2 m-2 p-1 rounded-md hover:bg-purple-600 hover:text-white font-bold ">
            Remove All
          </button>
        </div>
      )}
      <div className="flex justify-between items-center border-2 bg-slate-200 mt-6 p-4 rounded-lg">
        <img src={chooses.picture} alt="" className="w-8 h-8 rounded-lg" />
        <p className="text-xl">{chooses.name}</p>
        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Cart;
