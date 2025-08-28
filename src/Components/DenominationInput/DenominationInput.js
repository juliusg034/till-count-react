import React from 'react';
import './DenominationInput.css';

function DenominationInput ({label, id, denomination, value, onChange}) {
  
  return (
    <div class='input-field'>
      <label for="number">{label}</label>
      <input type='number' inputmode='decimal' parttern='[0-9]' class='bill-input' id={id} data-denomination={denomination} autoComplete='off' value={value} onChange={onChange}/>
    </div>
  )
}

export default DenominationInput;