import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenditureList = () => {
  const { expenses, dispatch } = useContext(AppContext);

  return (
    <>
    <h3 className="mt-3">Expenses</h3>
    <div className="row mt-3">
    <div className="col-sm">
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          key={expense.id}
          name={expense.name}
          cost={expense.theCost}
          dispatch={dispatch}
        />
))}
    </ul>
    </div>
    </div>
    </>
  );
};

export default ExpenditureList;
