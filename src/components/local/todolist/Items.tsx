import { useState } from "react";

export const Items = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Walk the dog" },
    { id: 2, text: "Play Playstation" },
    { id: 3, text: "Feed the cat" },
  ]);
  return (
    <h3>
      {items.map((item) => {
        return <h4 key={item.id}>{item.text}</h4>;
      })}
    </h3>
  );
};
