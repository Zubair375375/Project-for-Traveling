import React, { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function checkStatus() {
    setItems(items.map((i) => i.packed === false));
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    console.log(id);
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete the list?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        checkSt={checkStatus}
        onDeleteItems={handleDeleteItem}
        onToggleItem={handleToggleItem}
        setItems={setItems}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
