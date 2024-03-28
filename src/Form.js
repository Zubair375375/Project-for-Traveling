import React, { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function dataEntered(e) {
    setDescription(e.target.value);
    console.log(e.target.value);
  }
  function optionEntered(e) {
    setQuantity(Number(e.target.value));
    console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      quantity,
      description,
      packed: false,
    };
    onAddItems(newItem);
    console.log(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <div className="add-form">
      <h2>What do you need for your 😍 trip ?</h2>
      <form action="form.php" onSubmit={handleSubmit}>
        <select
          name="Items-num"
          id="i18"
          value={quantity}
          onChange={optionEntered}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={dataEntered}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
