import React, { createContext, useState } from 'react';

const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (newExpense) => {
        setExpenses([...expenses, newExpense]);
    };

    const deleteExpense = (id) => {
        const updatedExpenses = expenses.filter((expense) => expense.id !== id);
        setExpenses(updatedExpenses);
    };

    return (
        <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
};

export { ExpenseContext, ExpenseProvider };