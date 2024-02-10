import React, { useContext } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const { name, cost, selectedCurrency } = props;

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost:10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    };

    const currencySymbols ={
        'Dollar': '$',
        'Pound': '£',
        'Euro': '€',
        'Rupee': '₹',
    };

    return (
        <tr>
      <td>{name}</td>
      <td>
        {currencySymbols[selectedCurrency]} {/* Display the appropriate currency symbol */}
        {cost}
      </td>    
        <td> <FaPlusCircle style={{ color: 'green' }} size='1.5em' onClick={event=> increaseAllocation(props.name)} /></td>
        <td> <FaMinusCircle style={{ color: 'red' }} size='1.5em'onClick={event=> decreaseAllocation(props.name)} /></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
