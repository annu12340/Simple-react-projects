import React from "react";

const ItemList = ({ Item, SelectedItems, handleSelect }) => {
  const toDelete = (key) => {
    console.log(key, "is to be deleted ");
    Item.splice(key, 1);
    console.log(Item);
  };
  return (
    <ul className="list-group">
      {Item.map((item, key) => (
        <li
          className={"list-group-item list-group-item-action" + (SelectedItems.includes(key) ? " active" : "")}
          key={key}
          onClick={(e) => {
            e.preventDefault();
            handleSelect(key);
          }}
        >
          {item}

          <button className="btn btn-danger btn-sm" onClick={() => toDelete(key)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
