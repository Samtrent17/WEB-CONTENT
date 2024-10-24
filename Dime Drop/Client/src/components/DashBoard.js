import React, { useState, useEffect } from 'react';
import InputForm from './InputForm';
import TransactionList from './TransactionList';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/transactions', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div>
      <h1>Dime Drip Dashboard</h1>
      <InputForm setTransactions={setTransactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Dashboard;
