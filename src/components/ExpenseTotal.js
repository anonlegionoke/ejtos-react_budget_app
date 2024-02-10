import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = ({selectedCurrency}) => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const formatCurrency = (amount) => {
        return selectedCurrency + amount.toFixed(2);
    }

    return (
        <div className='alert alert-warning'>
            <span>Spent so far: {formatCurrency(totalExpenses)}</span>
        </div>
    );
};
export default ExpenseTotal;

