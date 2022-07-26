import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { v4 as uuid } from 'uuid';
import Input from './Input';

const ExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState('');
  const [theCost, setTheCost] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuid(),
      name: name,
      theCost: parseInt(theCost),
    };
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
    setName('');
    setTheCost('');
  };

  return (
    <>
    <h3 className="mt-3">Add Expense</h3>
    <div className="mt-3">
    <div className="col-sm">
    <form onSubmit={onSubmit}>
      <div className="col-sm">
        <div className="col-sm">
          <Input
            name="Name"
            value={name}
            label="Name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-sm">
          <Input
            label="Cost"
            name="cost"
            value={theCost}
            onChange={(event) => setTheCost(event.target.value)}
          />
        </div>
        <div className="col-sm" style={{marginTop: "1rem"}}>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
    </div>
    </div>
    </>
  );
};

export default ExpenseForm;
