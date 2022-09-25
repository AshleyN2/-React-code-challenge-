//import React, { useState, useEffect } from "react";
import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

/*
function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
  fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
})

  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;
*/

class AccountContainer extends Component {
  state = {
    transactions: [],
  };

  // Fetching data from db.json
  componentDidMount() {
    fetch("http://localhost:8000/transactions")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ transactions: data });
      });
  }

  // Adding transactions from the form

  addTransactions = (addTransaction) => {
    this.setState((prevState) => {
      return {
        transactions: [...prevState.transactions, addTransaction],
      };
    });
  };

  render() {
    return (
      <div>
        <AddTransactionForm addTransactions={this.addTransaction} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;