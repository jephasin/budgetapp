import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import RemainderBudget from './RemainderBudget';
import TotalBudget from './TotalBudget';
import TotalExpenditure from './TotalExpenditure';

const Budget = () => {
    const { expenses, budget, dispatch } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.theCost);
    }, 0);

    const remainderBudget = budget - totalExpenses;
    const alertType = totalExpenses < budget ? 'alert-success' : 'alert-danger';

    return (
        <>
        <h1 className='mt-3'>Budget Planner</h1>
        <div className='row mt-3'>
            <TotalBudget budget={budget} dispatch={dispatch} />
            <TotalExpenditure totalExpenses={totalExpenses}/>
            <RemainderBudget remainderBudget={remainderBudget} alertType={alertType} />
        </div>
        </>
    );
};

export default Budget;