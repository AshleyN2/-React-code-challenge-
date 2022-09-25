//import React from "react";

/*
function AddTransactionForm() {
  return (
    <div className="ui segment">
      <form className="ui form">
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
*/

import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: "",
  };

  // function to submit the form data and persist to the database
  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount,
      }),
    })
      .then((res) => res.json())
      .then((addTransaction) => {
        // pass the data to the addTransactionFun to update automatic on the browser
        this.props.addTransactionFun(addTransaction);

        // empty inputs after the submission
        this.setState({
          date: "",
          description: "",
          category: "",
          amount: "",
        });
      });
  };

  // function to handle onChange event when fired
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <span>
              <b>Date:</b>
            </span>
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={this.state.category}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
