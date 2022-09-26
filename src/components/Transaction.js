import React from "react";

function Transaction(props) {
  
  // Destructing to allow extraction of multiple properties from array 
  let {date, description, category, amount} = props.transaction;

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
