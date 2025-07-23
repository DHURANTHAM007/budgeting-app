import React, { useState } from 'react';

const EditBudget = ({ budget, onSaveBudget }) => {
  const [value, setValue] = useState(budget);
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveClick = () => {
    onSaveBudget(Number(value));
    setIsEditing(false);
  };

  return (
    <div className='alert alert-primary'>
      {isEditing ? (
        <>
          <input
            type='number'
            className='form-control'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className='btn' onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <span>Budget: ${budget}</span>
          <button className='btn' onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default EditBudget;
