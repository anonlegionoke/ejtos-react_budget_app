// App.js
import React, { useContext, useState } from 'react';
import { AppContext } from './context/AppContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';

import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import CurrencyDropdown from './components/CurrencyDropdown';

const currencySymbols ={
    'Dollar': '$',
    'Pound': '£',
    'Euro': '€',
    'Rupee': '₹',
};

const App = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('Dollar');
    const [budget, setBudget] = useState(20000);
    const [expenses, setExpenses] = useState([]);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost,0);
    const remaining = budget - totalExpenses;

    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                <div className='col-sm'>
                        <CurrencyDropdown setSelectedCurrency={setSelectedCurrency}/>
                    </div>
                    <div className='row mt-3'>

                        {
                    <div className='col-sm'>
                        <Budget selectedCurrency={currencySymbols[selectedCurrency]}/>
                    </div>
                    }
                     <div className='row mt-3'>
               
                    <div className='col-sm'>
                        <Remaining selectedCurrency={currencySymbols[selectedCurrency]}/>
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal selectedCurrency={currencySymbols[selectedCurrency]}/>
                    </div>

                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList expenses={expenses} selectedCurrency={selectedCurrency} />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm selectedCurrency={currencySymbols[selectedCurrency]}/>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
