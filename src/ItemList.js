import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ items, setItems, handleCheck, deleteHandle }) => {
  return items.length ? (
    items.map((item) => (
      <ul key={item.id}>
        <LineItem
          item={item}
          setItems={setItems}
          handleCheck={handleCheck}
          deleteHandle={deleteHandle}
        />
      </ul>
    ))
  ) : (
    <p style={{ marginTop: "2rem" }}>List is empty</p>
  );
};

export default ItemList;
