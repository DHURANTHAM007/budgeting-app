// src/App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for layout helpers
import './App.css';
import BudgetSummary from './components/BudgetSummary';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

const App = () => {
  // --- State Management ---
  const [budget, setBudget] = useState(() => {
    const savedBudget = localStorage.getItem('budget');
    return savedBudget ? JSON.parse(savedBudget) : 2000;
  });

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  // --- Data Persistence using useEffect ---
  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget));
  }, [budget]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // --- Calculated Values ---
  const spent = expenses.reduce((total, item) => total + item.cost, 0);
  const remaining = budget - spent;

  // --- Handler Functions ---
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const saveBudget = (newBudget) => {
    setBudget(newBudget);
  };

  return (
    <div className='container'>
      <h1>My Budget Planner</h1>
      <div className='row mb-4'>
        <BudgetSummary
          budget={budget}
          remaining={remaining}
          spent={spent}
          onSaveBudget={saveBudget}
        />
      </div>
      
      <h3 className='mt-4'>Expenses</h3>
      <div className='row'>
        <div className='col-sm'>
          <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </div>
      </div>

      <h3 className='mt-4'>Add Expense</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <AddExpenseForm onAddExpense={addExpense} />
        </div>
      </div>
    </div>
  );
};

export default App;
