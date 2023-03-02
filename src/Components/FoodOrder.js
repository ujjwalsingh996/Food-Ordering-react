import React, { useState } from "react";

const FoodOrder = (props) => {
  const [uniqueId, setUniqueId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState('')
 
  const submitHander = (event) => {
    event.preventDefault();
    // console.log(uniqueId, price, dish)
    props.onSubmit(uniqueId, price, dish, table);
    localStorage.setItem(uniqueId, `${price} ${dish} ${table}`)
  };

  const idHandler = (event) => {
    // console.log(event.target.value)
    setUniqueId(event.target.value);
  };
  const priceHandler = (event) => {
    // console.log(event.target.value)
    setPrice(event.target.value);
  };
  const dishHandler = (event) => {
    // console.log(event.target.value)
    setDish(event.target.value);
  };
  const tableHandler = (event) => {
    setTable(event.target.value)
    // console.log(event.target.value)
  }

  return (
    <div>
      <form onSubmit={submitHander}>
        <label htmlFor="foodorderid">Unique ID:</label>
        <input type="number" id="foodorderid" onChange={idHandler}></input>
        <label htmlFor="orderprice">Price:</label>
        <input type="number" id="orderprice" onChange={priceHandler}></input>
        <label htmlFor="orderdish">Dish:</label>
        <input type="text" id="orderdish" onChange={dishHandler}></input>
        <label>Table:</label>
        <select onChange={tableHandler}>
          <option>Choose a table:</option>
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
        <button type="submit">Add Dish</button>
      </form>
      <div>
      <ul>
        <h1>Orders</h1>
        <li>
          <h1 id=" table1">Table 1</h1>
        </li>
        <br />
        <li>
          <h1 id="table2">Table 2</h1>
        </li>
        <br />
        <li>
          <h1 id="table3">Table 3</h1>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default FoodOrder;
