import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = ({ id, name, cost, onDelete }) => {
  return (
    <li className='list-group-item'>
      {name}
      <div>
        <span className='badge me-3'>${cost}</span>
        <TiDelete size='1.5em' className='delete-icon' onClick={() => onDelete(id)} />
      </div>
    </li>
  );
};

export default ExpenseItem;
