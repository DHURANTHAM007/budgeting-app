import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && cost) {
      const newExpense = {
        id: uuidv4(),
        name,
        cost: parseInt(cost),
      };
      onAddExpense(newExpense);
      setName('');
      setCost('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col'>
          <label>Name</label>
          <input
            type='text'
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='col'>
          <label>Cost</label>
          <input
            type='number'
            className='form-control'
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required
          />
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col'>
          <button type='submit' className='btn'>Save</button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
