import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Increment
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Decrement
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="count">{count}</div>
      <button className="increment" onClick={handleIncrement}>
        Increment
      </button>
      <button className="decrement" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
