import React, { useState } from "react";
export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );
  let numsPacked = items.filter((item) => item.packed).length;
  let percentage = Math.round((numsPacked * 100) / items.length);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything! Ready to go`
          : `You have ${
              items.length
            } items on your list, and you already packed${" "}
          ${numsPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
