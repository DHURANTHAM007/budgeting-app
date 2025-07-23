import React, { useState } from 'react';

const Budget = ({ budget, handleSaveBudget }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(budget);

    const handleSave = () => {
        handleSaveBudget(value);
        setIsEditing(false);
    };

    return (
        <div className='alert alert-secondary d-flex justify-content-between align-items-center'>
            {isEditing ? (
                <>
                    <input
                        required='required'
                        type='number'
                        className='form-control me-3'
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <button type='button' className='btn btn-primary' onClick={handleSave}>
                        Save
                    </button>
                </>
            ) : (
                <>
                    <span>Budget: ${budget}</span>
                    <button type='button' className='btn btn-primary' onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </>
            )}
        </div>
    );
};

export default Budget;
