import React, { useContext } from "react";
import { FatherContext } from "../Father/Father";
import { MyContext } from "../Grandpa/Grandpa";

const Brother = () => {
  const BrotherHouse = useContext(MyContext);
  const FatherCount = useContext(FatherContext);
  return (
    <div style={{ border: "2px solid orange", padding: "10px", margin: "9px" }}>
      <p>Brother {BrotherHouse}</p>
      <h6>FCount: {FatherCount}</h6>
    </div>
  );
};

export default Brother;
