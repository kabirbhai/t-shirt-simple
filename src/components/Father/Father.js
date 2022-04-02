import React, { createContext, useContext, useState } from "react";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";
import MySelf from "../MySelf/MySelf";
import { MyContext } from "../Grandpa/Grandpa";
export const FatherContext = createContext("ring");

const Father = () => {
  const FatherHouse = useContext(MyContext);

  return (
    <FatherContext.Provider value="welcome">
      <div
        style={{ border: "2px solid orange", padding: "10px", margin: "9px" }}
      >
        <p>house: {FatherHouse}</p>

        <MySelf></MySelf>
        <Brother></Brother>
        <Sister />
      </div>
    </FatherContext.Provider>
  );
};

export default Father;
