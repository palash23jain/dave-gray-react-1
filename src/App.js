import React, { useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import "./style.css";

export default function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shopping list")) || []
  );

  const [newItem, setNewItem] = useState("");
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    localStorage.setItem("shopping list", JSON.stringify(items));
  }, [items]);

  const handleCheck = (id) => {
    const arr = items.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });
    setItems(arr);
  };

  const deleteHandle = (id) => {
    const arr = items.filter((item) => item.id !== id);
    setItems(arr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      { id: items.length + 2, checked: false, item: newItem }
    ]);
    setNewItem("");
  };

  return (
    <div className="app">
      <Header title="Groceries" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(searchItem)
        )}
        setItems={setItems}
        handleCheck={handleCheck}
        deleteHandle={deleteHandle}
      />
      <Footer items={items.length} />
    </div>
  );
}
