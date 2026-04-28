import DenominationInput from "../DenominationInput/DenominationInput.js";
import BillList from "../BillList/BillList.js";
import './InputForm.css';
import React, { useState , useEffect} from "react";





function InputForm () {
  
  const [errors, setErrors] = useState({});

  // Initialize state with saved values from localStorage or default values
  const[inputs, setInputs] = useState(() => {
    const saved = localStorage.getItem("inputs");

    return saved ? JSON.parse(saved) : {
      hundreds: "",
      fifties: "",
      twenties: "",
      tens: "",
      fives: "",
      ones: "",
      quarters: "",
      dimes: "",
      nickels: "",
      pennies: ""
    }
  })


  const denominations = {
    hundreds: 100,
    fifties: 50,
    twenties: 20,
    tens: 10,
    fives: 5,
    ones: 1,
    quarters: 0.25,
    dimes: 0.10,
    nickels: 0.05,
    pennies: 0.01
  }


  function isMultiple(num, denom) {
    return Math.abs(num / denom - Math.round(num / denom)) < 1e-6;
  }

  // Update inputs state when any input field changes
  function handleChange (e) {
    const name = e.target.id;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
    

    //validate
    const denom = denominations[name];
    let error = null;
    const num = Number(value);
    if (value !== "") {
      if (isNaN(num)) {
        error = "Please enter a valid number";
      } else if (num < 0) {
        error = "Please enter a non-negative number";
      } else if (isMultiple(num, denom) === false) {
        error = `Not a multiple of ${denom}`;
      }
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  // Save inputs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
  }, [inputs]);




  return (
    <form id="bills-form">
      <div class="bills">
        <div class="left-bills">
          <DenominationInput label={'$100'} name={"hundreds"} id={"hundreds"} value={inputs.hundreds} onChange={handleChange} error={errors.hundreds}/> 
          <DenominationInput label={'$50'} name={"fifties"} id={"fifties"} value={inputs.fifties} onChange={handleChange} error={errors.fifties}/> 
          <DenominationInput label={'$20'} name={"twenties"} id={"twenties"} value={inputs.twenties} onChange={handleChange} error={errors.twenties}/> 
          <DenominationInput label={'$10'} name={"tens"} id={"tens"} value={inputs.tens} onChange={handleChange} error={errors.tens}/> 
          <DenominationInput label={'$5'} name={"fives"} id={"fives"} value={inputs.fives} onChange={handleChange} error={errors.fives}/> 
          <DenominationInput label={'$1'} name={"ones"} id={"ones"} value={inputs.ones} onChange={handleChange} error={errors.ones}/>
          <DenominationInput label={'25¢'} name={"quarters"} id={"quarters"} value={inputs.quarters} onChange={handleChange} error={errors.quarters}/>
          <DenominationInput label={'10¢'} name={"dimes"} id={"dimes"} value={inputs.dimes} onChange={handleChange} error={errors.dimes}/>
          <DenominationInput label={'5¢'} name={"nickels"} id={"nickels"} value={inputs.nickels} onChange={handleChange} error={errors.nickels}/>
          <DenominationInput label={'1¢'} name={"pennies"} id={"pennies"} value={inputs.pennies} onChange={handleChange} error={errors.pennies}/>
        </div>
         
        <div class="right-bills">
            <BillList/>
        </div>
      </div>
    </form>
    
  )
}

export default InputForm;