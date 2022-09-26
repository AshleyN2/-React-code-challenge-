import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  // current value and setter function to update state 
  const [transactions, setTransactions] = useState([]);

  // fetches transaction from local json server 
  function getTransactions(){
    fetch("http://localhost:8001/transactions")
    .then((response) => response.json())
    .then(setTransactions);
  }
  useEffect(getTransactions,[]);

  // filters a specific search word in lowercase to find in transaction list rendered
  function findSearch(search){
    if (search === " "){
      getTransactions(transactions)}

      else 
      {
        const searchTransaction = transactions.filter(transaction => {
          return transaction.description.toLowerCase().includes(search.toLowerCase())
      })
      setTransactions(searchTransaction) }
    }

  function addTransaction(transaction){
    setTransactions([...transactions, transaction])
  }

    return (
      <div>
        <Search findSearch={findSearch}/>
        <AddTransactionForm addTransaction={addTransaction}/>
        <TransactionsList transaction={transactions}/>
      </div>
    );
}

export default AccountContainer;

