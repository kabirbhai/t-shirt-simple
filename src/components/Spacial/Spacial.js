import React, { useContext } from "react";
import { MyContext } from "../Grandpa/Grandpa";

const Spacial = () => {
  const MyHouse = useContext(MyContext);
  return (
    <div style={{ border: "2px solid orange", padding: "10px", margin: "9px" }}>
      <p>s: {MyHouse} </p>
    </div>
  );
};

export default Spacial;
