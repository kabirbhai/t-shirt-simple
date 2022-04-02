import React, { createContext, useState } from "react";
import "./Grandpa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Unty from "../Unty/Unty";

/* 
// Context api
1. Call createContext with a default value.
2. Set a variable of the context with uppercase.
3. Make sure you export the context to use other places.
4. Wrap yu child content using yourContext.Provider.
5. Provide a value.
6. To consume the context from child component.
7. Make sure you take notes.... :)
*/

export const MyContext = createContext("hello");

const Grandpa = () => {
  const [house, setHouse] = useState(3);

  const inAddHome = () => {
    const newHouse = house + 1;
    setHouse(newHouse);
  };
  return (
    <MyContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h1>
          Grandpa <button onClick={inAddHome}>buy</button>
        </h1>

        <div
          style={{
            display: "flex",
            border: "1px solid black",
            padding: "20px",
          }}
        >
          <Father house={house}></Father>
          <Uncle></Uncle>
          <Unty></Unty>
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default Grandpa;
