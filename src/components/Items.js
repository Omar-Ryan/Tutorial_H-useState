import { React, useState } from "react";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <>
      <button onClick={addItem}>Add Random Numbers</button>
      <ul className="randNum">
        {items.map((ele) => (
          // => Need to Key
          <span key={ele.id}>{ele.value},</span>
        ))}
      </ul>
      <button className=" b-reset " onClick={() => setItems([])}>
        Reset
      </button>
    </>
  );
};

export default Items;
