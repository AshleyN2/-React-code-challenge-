import React from "react";

function AddTransactionForm({addTransaction}) {

  // receives form data
  const handleSubmit = (e)=> {
    e.preventDefault();

    // variable for new transaction input elements
    const newTransaction = {
      date: e.target.date.value,
      description: e.target.description.value,
      category: e.target.category.value,
      amount: e.target.amount.value
    }

    // new transaction data is added to our existing transactions
    addTransaction(newTransaction)
    e.target.reset(); // restores form's element default values

    //POST method to add new transaction input to existing list
    fetch('http://localhost:8001/transactions', {
      method: "POST",
      headers: { "Content-Type": "application/json",},
      body: JSON.stringify(newTransaction)
    })
    .then(response => response.json())
    .then(() => {
      return addTransaction(newTransaction)
    })
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;


