import React, { useState } from "react";
import "./Home.css";
import useTshirts from "../../hooks/useTshirts";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";

const Home = () => {
  const [tShirts, setTShirts] = useTshirts();
  const [cart, setCart] = useState([]);

  // Adding cart
  const handleAddToCart = (selectedItem) => {
    const exist = cart.find((tShirts) => tShirts._id === selectedItem._id);
    if (!exist) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("hey! this item already added");
    }
  };

  //Removing cart
  const handleRemoveFromCart = (selectedItem) => {
    const rest = cart.filter((tShirt) => tShirt._id !== selectedItem._id);
    setCart(rest);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
