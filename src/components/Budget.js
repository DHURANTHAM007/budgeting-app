import React, { useState } from 'react';

const Budget = ({ budget, handleSaveBudget }) => {
    // State to toggle between view and edit mode
    const [isEditing, setIsEditing] = useState(false);
    // State to hold the new budget value while editing
    const [value, setValue] = useState(budget);

    const handleSaveClick = () => {
        // Pass the new budget value (as a number) to the parent component
        handleSaveBudget(Number(value));
        // Switch back to view mode
        setIsEditing(false);
    };

    return (
        <div className='alert alert-secondary d-flex justify-content-between align-items-center'>
            {isEditing ? (
                // --- EDIT VIEW ---
                <>
                    <input
                        required
                        type='number'
                        className='form-control me-3'
                        id='budget'
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <button type='button' className='btn btn-primary' onClick={handleSaveClick}>
                        Save
                    </button>
                </>
            ) : (
                // --- DEFAULT VIEW ---
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
