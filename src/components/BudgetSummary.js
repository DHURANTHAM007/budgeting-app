import React from 'react';
import EditBudget from './EditBudget';

const BudgetSummary = ({ budget, remaining, spent, onSaveBudget }) => {
  const remainingClass = remaining >= 0 ? 'alert-success' : 'alert-warning';
  
  return (
    <div className='summary-cards'>
      <EditBudget budget={budget} onSaveBudget={onSaveBudget} />
      <div className={`alert ${remainingClass}`}>
        <span>Remaining: ${remaining}</span>
      </div>
      <div className='alert alert-primary'>
        <span>Spent so far: ${spent}</span>
      </div>
    </div>
  );
};

export default BudgetSummary;
