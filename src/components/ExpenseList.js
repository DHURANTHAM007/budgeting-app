import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, handleDeleteExpense }) => {
    return (
        <ul className='list-group'>
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}
                    handleDeleteExpense={handleDeleteExpense}
                />
            ))}
        </ul>
    );
};

export default ExpenseList;
