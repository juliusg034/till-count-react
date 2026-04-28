import React from 'react';
import './DenominationInput.css';








function DenominationInput ({label, id, value, onChange, name, error}) {

  
  return (
    <div class='input-field'>
      <label for="number">{label}</label>
      <input type='number'  inputmode='decimal' parttern='[0-9]' class='bill-input' id={id} value={value} onChange={onChange} name={name} className={error ? 'input-error bill-input ' : ''}/>
      {error && <p class="error">{error}</p>}
    </div>
  )
}

export default DenominationInput;