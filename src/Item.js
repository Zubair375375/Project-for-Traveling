import React from "react";
export default function Item({ iTEM, onDeleteItems, onToggleItem }) {
  console.log(iTEM.packed);
  return (
    <li>
      <input
        type="checkbox"
        value={iTEM.packed}
        onChange={() => onToggleItem(iTEM.id)}
      />
      <span style={iTEM.packed ? { textDecoration: "line-through" } : {}}>
        {iTEM.quantity} {iTEM.description}
      </span>
      <button onClick={() => onDeleteItems(iTEM.id)}>❌</button>
    </li>
  );
}
