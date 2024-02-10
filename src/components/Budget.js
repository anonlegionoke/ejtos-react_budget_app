import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = ({ selectedCurrency }) => {
  const { budget, setBudget } = useContext(AppContext);
  const [editableBudget, setEditableBudget] = useState(budget);

  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleSave = () => {
    if (editableBudget > 20000) {
      alert("The value cannot exceed than 20000");
      setEditableBudget(budget); // Reset to original budget value
      return;
    } else if (editableBudget < totalExpenses) {
      alert("The value cannot be less than what is already spent");
      setEditableBudget(budget); // Reset to original budget value
      return;
    }
    setBudget(editableBudget);
  };
  return (
    <div className='alert alert-primary'>
      <div className="input-group">
      <label className="input-group-prepend mt-1" htmlFor='budgetInput'>Budget:</label>

          <button className="btn btn-primary mx-0">{ selectedCurrency }</button>
       
        <input 
          required='required'
          type='number'
          id='budgetInput'
          value={editableBudget}
          style={{ width: '8rem' }}
          onChange={(event) =>{
            const updatedBudget = parseInt(event.target.value);
            if (updatedBudget > 20000) {
              alert("The value cannot exceed than 20000");
              setEditableBudget(budget); // Reset to original budget value
              return;
            }
            else if (editableBudget < totalExpenses) {
                alert("The value cannot be less than what is already spent");
                setEditableBudget(budget); // Reset to original budget value
                return;
              }
            setEditableBudget(updatedBudget);
          }}
        />
      </div>
    </div>
  );
};

export default Budget;