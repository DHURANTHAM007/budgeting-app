import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = ({ handleAddExpense }) => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        
        if (name.trim() === '' || cost.trim() === '') return;

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        handleAddExpense(expense);

        // Reset form fields
        setName('');
        setCost('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm col-lg-4'>
                    <label htmlFor='name'>Name</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>
                <div className='col-sm col-lg-4'>
                    <label htmlFor='cost'>Cost</label>
                    <input
                        required='required'
                        type='number'
                        className='form-control'
                        id='cost'
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
