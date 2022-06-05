import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ListItem = ({ item, handleCheck, deleteHandle }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        onDoubleClick={() => handleCheck(item.id)}
        style={item.checked ? { textDecoration: "line-through" } : null}
      >
        {item.item}
      </label>
      <FaTrashAlt onClick={() => deleteHandle(item.id)} />
    </li>
  );
};

export default ListItem;
