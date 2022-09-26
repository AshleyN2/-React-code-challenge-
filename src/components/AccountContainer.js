import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  function getTransactions(){
    fetch("http://localhost:8001/transactions")
    .then((response) => response.json())
    .then(setTransactions);
  }

  useEffect(getTransactions,[]);

function findSearch(search){
  if (search === ''){
    getTransactions(transactions)}
    else 
    {
      const searchTransactions = transactions.filter(transaction => {
        return transaction.description.toLowerCase().includes(search.toLowerCase())
    })
    setTransactions(searchTransactions) }
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

