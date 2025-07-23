import React from 'react';
import { TiDelete } from 'react-icons/ti';
const ExpenseItem = ({ id, name, cost, handleDeleteExpense }) => 
{
  return 
  (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
    {name}
    <div>
    <span className='badge badge-primary rounded-pill me-3'>
    ${cost}
  </span>
  <TiDelete size='1.5em' onClick={() => handleDeleteExpense(id)} style={{cursor: 'pointer'}}></TiDelete>
  </div>
  </li>
 );
};
export default ExpenseItem;
