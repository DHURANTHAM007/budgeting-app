import React from 'react';

const Spent = ({ spent }) => {
    return (
        <div className='alert alert-info'>
            <span>Spent so far: ${spent}</span>
        </div>
    );
};

export default Spent;
