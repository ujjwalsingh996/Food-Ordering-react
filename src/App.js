import React, { useState } from "react";
import FoodOrder from "./Components/FoodOrder";
import OrderMade from "./Components/OrderMade";

function App(props) {
  const [details, setDetails] = useState([]);

  const foodSubmission = (id, price, dish, table) => {
    setDetails((prevState) => 
    { 
      return [...prevState, {
        id: id,
        price: price,
        dish: dish,
        table: table,
      }]
    });
    
    
  };


  return (
    <div>
      <FoodOrder onSubmit={foodSubmission}></FoodOrder>
      <OrderMade items={details}></OrderMade>
    </div>
  );
}

export default App;
