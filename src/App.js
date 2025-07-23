import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Your custom styles
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from './components/Spent';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

const App = () => {
    // --- State Initialization with Local Storage ---
    const [budget, setBudget] = useState(() => {
        const savedBudget = localStorage.getItem('budget');
        return savedBudget ? JSON.parse(savedBudget) : 2000;
    });

    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = localStorage.getItem('expenses');
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    // --- Effects for Local Storage Persistence ---
    useEffect(() => {
        localStorage.setItem('budget', JSON.stringify(budget));
    }, [budget]);

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    // --- State Handler Functions ---
    const handleAddExpense = (expense) => {
        setExpenses((prevExpenses) => [...prevExpenses, expense]);
    };

    const handleDeleteExpense = (id) => {
        setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
    };

    const handleSaveBudget = (newBudget) => {
        setBudget(newBudget);
    };
    
    // --- Derived State (Calculated on each render) ---
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    return (
        <div className='container mt-4'>
            <h1 className='mt-3'>FinTrack Budget Planner</h1>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <Budget budget={budget} handleSaveBudget={handleSaveBudget} />
                </div>
                <div className='col-sm'>
                    <Remaining budget={budget} spent={totalExpenses} />
                </div>
                <div className='col-sm'>
                    <Spent spent={totalExpenses} />
                </div>
            </div>
            <h3 className='mt-4'>Expenses</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <ExpenseList expenses={expenses} handleDeleteExpense={handleDeleteExpense} />
                </div>
            </div>
            <h3 className='mt-4'>Add Expense</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <AddExpenseForm handleAddExpense={handleAddExpense} />
                </div>
            </div>
        </div>
    );
};

export default App;
