import React, { useContext } from "react";
import { MyContext } from "../Grandpa/Grandpa";

const Unty = () => {
  const [house, setHouse] = useContext(MyContext);
  return (
    <div style={{ border: "2px solid orange", padding: "10px", margin: "9px" }}>
      <p>ami aunty</p>
      <h1>House: {house}</h1>
      {house >= 4 && (
        <button onClick={() => setHouse(house + 3)}>aunty magic</button>
      )}
    </div>
  );
};

export default Unty;
