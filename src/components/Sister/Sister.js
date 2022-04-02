import React, { useContext } from "react";
import { FatherContext } from "../Father/Father";
import { MyContext } from "../Grandpa/Grandpa";

const Sister = () => {
  const [house, setHouse] = useContext(MyContext);
  const SisterWelcome = useContext(FatherContext);
  return (
    <div style={{ border: "2px solid orange", padding: "10px", margin: "9px" }}>
      <p>Sister {house}</p>

      <button onClick={() => setHouse(house + 2)}>buy a house</button>
      <h5>SC: {SisterWelcome}</h5>
    </div>
  );
};

export default Sister;
