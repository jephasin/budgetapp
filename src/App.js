import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AppProvider } from '././context/AppContext';
import Budget from './components/Budget/index';
import ExpenseForm from './components/ExpenseForm/index';
import ExpenditureList from './components/ExpenseList/index';

function App() {
  return (
    <AppProvider>
      <div className="container">
        <Budget />
        <ExpenditureList />
        <ExpenseForm />
      </div>
    </AppProvider>
  );
}

export default App;
