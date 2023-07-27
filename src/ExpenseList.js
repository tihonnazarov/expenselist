import React, { useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';

const ExpenseList = () => {
    const { expenses, deleteExpense } = useContext(ExpenseContext);

    return (
        <ul>
            {expenses.map((expense) => (
                <li key={expense.id}>
                    {expense.description} - {expense.amount} сом.
                    <button onClick={() => deleteExpense(expense.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
};

export default ExpenseList;