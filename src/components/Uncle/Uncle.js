import React, { useContext } from "react";
import { MyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  const UncleHouse = useContext(MyContext);
  return (
    <div style={{ border: "2px solid orange", padding: "10px", margin: "9px" }}>
      <p>Uncle</p>
      <h1>House: {UncleHouse}</h1>
    </div>
  );
};

export default Uncle;
