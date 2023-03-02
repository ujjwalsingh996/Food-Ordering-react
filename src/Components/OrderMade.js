import React, { useState } from "react";


const OrderMade = (props) => {
const [isValid, setIsValid] = useState(true)

    const deleteHandler = () => {
        localStorage.removeItem(props.items[0].id)
        setIsValid(false)
    }
    let content = (<li></li>)
    if(isValid)
    {
        content = (props.items.map((item) => (
            <li key={item.id}>
              Price: {item.price}, Dish: {item.dish}, Table: {item.table}
              <button onClick={deleteHandler}>Delete Item</button>
            </li>
          )))
    }
    else{
        content = (<ul></ul>)
    }
    // setIsValid(true)


  return (
    <ul>
      {content}
    </ul>
  );
};

export default OrderMade;
