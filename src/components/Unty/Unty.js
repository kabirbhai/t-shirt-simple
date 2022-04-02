import React, { useContext } from "react";
import { MyContext } from "../Grandpa/Grandpa";

const Unty = () => {
  const AuntyHouse = useContext(MyContext);
  return (
    <div style={{ border: "2px solid orange", padding: "10px", margin: "9px" }}>
      <p>ami aunty</p>
      <h1>House: {AuntyHouse}</h1>
    </div>
  );
};

export default Unty;
