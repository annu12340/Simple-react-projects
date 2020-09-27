import React, { useState } from "react";
import Header from "./Component/Header";
import Item from "./Component/Item";
import ItemList from "./Component/ItemList";
import Shop from "./styles/Shop.png";
import "./styles/App.css";
const App = () => {
  const [SelectedItems, setSelectedItems] = useState([]);
  const [shopMode, setshopMode] = useState(false);

  const [value, setvalue] = useState("");

  const shopValues = [...SelectedItems].map((item) => "- " + Item[item]).join("\n");

  const handleSelect = (key) => {
    if (SelectedItems.includes(key)) {
      let items = [...SelectedItems];
      const idx = items.indexOf(key);

      items.splice(idx, 1);

      setSelectedItems(items);
    } else {
      setSelectedItems([...SelectedItems, key]);
    }
  };

  const toggleMode = (e) => {
    e.preventDefault();
    setshopMode(!shopMode);
  };

  const handleCopy = (e) => {
    e.preventDefault();
    e.target.select();
    document.execCommand("copy");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Item.push(value);
    console.log(Item);
    handleChange(e);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setvalue(e.target.value);
  };

  return (
    <div className="App">
      <Header className="Header d-block text-center mb-4" dark={true}>
        React Shopping Helper
      </Header>

      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-3"></div>
          <div className="col-6 mb-20">
            <form action="" onSubmit={handleSubmit}>
              <b>Add item </b>
              <input type="text" value={value} className="form-control" placeholder="Enter item" onChange={handleChange} />
            </form>
          </div>
        </div>

        <br />
        <br />
        <div className="row">
          <div className="col-12">
            {shopMode ? (
              <textarea value={shopValues} className="form-control" onClick={handleCopy} />
            ) : (
              <ItemList Item={Item} SelectedItems={SelectedItems} handleSelect={handleSelect} />
            )}
          </div>
        </div>
      </div>
      <span className={"shop-button" + (shopMode ? " active" : "")} onClick={toggleMode}>
        <img src={Shop} alt="shop" />
      </span>
    </div>
  );
};

export default App;
