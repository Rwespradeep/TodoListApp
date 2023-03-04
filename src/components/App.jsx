import React, { useState } from "react";

function App() {
  const [itemName, setItemName] = useState("");
  const [itemsArr, setItemsArr] = useState([]);

  function handleInput(event) {
    const newItem = event.target.value;
    setItemName(newItem);
  }
  function addItem() {
    setItemsArr((prevValue) => {
      return [...prevValue, itemName];
    });
    setItemName("");
  }
  console.log(itemsArr.toString());

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={itemName} />
        <button type="submit" onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsArr.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
