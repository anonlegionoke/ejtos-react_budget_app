// CurrencyDropdown.js
import React from 'react';

const CurrencyDropdown = ({ setSelectedCurrency }) => {
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
<div className="input-group mb-2">
<label className="btn btn-primary">Currency</label>
<select class="btn btn-primary dropdown-toggle" onChange={handleCurrencyChange}>
  <option value="Dollar">$ Dollar</option>
  <option value="Pound">£ Pound</option>
  <option value="Euro">€ Euro</option>
  <option value="Rupee">₹ Rupee</option>
</select>
</div>
  );
};

export default CurrencyDropdown;


