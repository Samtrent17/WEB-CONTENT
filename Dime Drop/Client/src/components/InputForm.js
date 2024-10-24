import React, { useState } from 'react';

const InputForm = ({ setTransactions }) => {
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ type, amount, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTransactions((prev) => [...prev, data]);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default InputForm;
