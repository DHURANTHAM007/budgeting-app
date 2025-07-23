import React from 'react';

const Remaining = ({ budget, spent }) => {
    const remaining = budget - spent;
    const alertType = remaining >= 0 ? 'alert-success' : 'alert-danger';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${remaining}</span>
        </div>
    );
};

export default Remaining;
