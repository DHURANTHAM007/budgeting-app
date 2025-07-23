import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = ({ handleAddExpense }) => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        handleAddExpense(expense);
        setName('');
        setCost('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label>Name</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>
                <div className='col-sm'>
                    <label>Cost</label>
                    <input
                        required='required'
                        type='number'
                        className='form-control'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;
