import React, { useContext } from "react";
import { MyContext } from "../Grandpa/Grandpa";
import Spacial from "../Spacial/Spacial";

const MySelf = () => {
  const MyHouse = useContext(MyContext);
  return (
    <div style={{ border: "2px solid orange", padding: "10px", margin: "9px" }}>
      <p>myHouse: {MyHouse}</p>
      <Spacial></Spacial>
    </div>
  );
};

export default MySelf;
