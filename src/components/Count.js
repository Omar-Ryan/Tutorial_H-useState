import { React, useState } from "react";
import "./Count.css";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="count-content">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1 className={count > 0 ? "" : "redColor"}>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button className=" b-reset " onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Count;
