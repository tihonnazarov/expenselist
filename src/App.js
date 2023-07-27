import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';
import { ExpenseProvider } from './ExpenseContext';

const App = () => {
    return (
        <ExpenseProvider>
            <div className="box">
                <h1>Expense Tracker</h1>
                <ExpenseList />
                <ExpenseForm />
            </div>
        </ExpenseProvider>
    );
};

export default App;
