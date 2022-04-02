import React, { useContext } from "react";
import { FatherContext } from "../Father/Father";
import { MyContext } from "../Grandpa/Grandpa";

const Sister = () => {
  const SisterHouse = useContext(MyContext);
  const SisterWelcome = useContext(FatherContext);
  return (
    <div style={{ border: "2px solid orange", padding: "10px", margin: "9px" }}>
      <p>Sister {SisterHouse}</p>
      <h5>SC: {SisterWelcome}</h5>
    </div>
  );
};

export default Sister;
