import React from "react";

const RemainderBudget = ({ remainderBudget, alertType}) => {

    return (
        <div className='col-sm'>
        <div className={`alert ${alertType}`} style={{ display: 'flex', height: '72px', alignItems: 'center' }}>
            <span>
                Remaining: ${remainderBudget}
            </span>
        </div>
        </div>
    );
};

export default RemainderBudget;