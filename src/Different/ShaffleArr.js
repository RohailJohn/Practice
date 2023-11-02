import React, { useState } from "react";
import Data from "../data/bootcamp.json";
import "../css/index.css";

const ShaffleArr = () => {
  const [arr, setArr] = useState(Data);
  console.log(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return (
    <div className="shaffleArr">
      {arr.map((e, i) => (
        <div className="shaffle" key={i}>
          <div>{e.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ShaffleArr;
