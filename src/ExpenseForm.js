import React, { useState, useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';

const ExpenseForm = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const { addExpense } = useContext(ExpenseContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim() !== '' && amount.trim() !== '') {
            const newExpense = {
                id: Math.random().toString(36).substr(2, 9),
                description,
                amount: parseFloat(amount),
            };
            addExpense(newExpense);
            setDescription('');
            setAmount('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Описание расхода"
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Сумма (сом)"
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default ExpenseForm;