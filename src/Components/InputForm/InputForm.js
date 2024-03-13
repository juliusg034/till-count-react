import DenominationInput from "../DenominationInput/DenominationInput.js";
import BillList from "../BillList/BillList.js";
import Switch from '../Switch/Switch.js';
import React, { useState } from 'react';
import './InputForm.css';

function InputForm ({ setDescription }) {
  const [value, setValue] = useState(false)
  
  const [total, setTotal] = useState("$$$")
  const [depositTotal, setDepositTotal] = useState("$$$")
  const [endingTotal, setEndingTotal] = useState('$$$');
  const [deposit, setDeposit] = useState({100: 0, 50: 0, 20:0, 10:0, 5:0, 1:0});
  const [ending, setEnd] = useState({100: 0, 50: 0, 20:0, 10:0, 5:0, 1:0, 0.25:0, 0.10:0, 0.05:0, 0.01:0});

  if(value){
    setDescription("number of bills")
    } else {
      setDescription("value of bills")
    }

  const handleSubmit = () => {
    function depositAmount(deposit, denomination, amount){
      if(amount === 0){return 0}
      else if (deposit.amount === 0) {return  0}
      else if (amount > 0){
        let maxAmount = Math.floor(deposit.amount/denomination);
        if(maxAmount > amount){
          deposit.amount = deposit.amount - (amount * denomination);
          return  amount;
        } else if (maxAmount <= amount){
          deposit.amount = deposit.amount - (maxAmount * denomination);
          return  maxAmount;
        }
      }
    }

    function getValues() {
      const hundreds = parseFloat(document.getElementById('hundreds').value);
      const fifties = parseFloat(document.getElementById('fifties').value);
      const twenties = parseFloat(document.getElementById('twenties').value);
      const tens = parseFloat(document.getElementById('tens').value);
      const fives = parseFloat(document.getElementById('fives').value);
      const ones = parseFloat(document.getElementById('ones').value);
      const quarters = parseFloat(document.getElementById('quarters').value);
      const dimes = parseFloat(document.getElementById('dimes').value);
      const nickels = parseFloat(document.getElementById('nickels').value);
      const pennies = parseFloat(document.getElementById('pennies').value);
      const setTill = parseFloat(document.getElementById('base').value);

      let amountHundreds;
      let amountTwenties;
      let amountFifties;
      let amountTens;
      let amountFives;
      let amountOnes;
      if(!value){
        let totalsum = hundreds + fifties + twenties + tens + fives + ones + quarters + dimes + nickels + pennies; 
        let deposit = {amount: totalsum - setTill};
        amountFives = fives / 5
        amountTens = tens / 10
        amountTwenties = twenties / 20
        amountFifties = fifties / 50
        amountHundreds = hundreds / 100
        amountOnes = ones / 1       
        let depositHundreds = depositAmount(deposit, 100, amountHundreds);
        let depositFifties = depositAmount(deposit, 50, amountFifties);
        let depositTwenties = depositAmount(deposit, 20, amountTwenties);
        let depositTens = depositAmount(deposit, 10, amountTens);
        let depositFives = depositAmount(deposit, 5, amountFives);
        let depositOnes = depositAmount(deposit, 1, amountOnes);  

        setDeposit({100:depositHundreds, 50: depositFifties, 20:depositTwenties, 10:depositTens, 5:depositFives, 1:depositOnes})
        setEnd({100:amountHundreds-depositHundreds, 50: amountFifties-depositFifties, 20:amountTwenties-depositTwenties, 10:amountTens-depositTens, 5:amountFives-depositFives, 1:amountOnes-depositOnes, 0.25:quarters, 0.10:dimes, 0.05:nickels, 0.01:pennies})
        setTotal(totalsum)
        setDepositTotal(Math.round(totalsum)- 300)
        setEndingTotal(((ending[100] * 100)+(ending[50]* 50)+(ending[20]*20)+(ending[10]*10)+(ending[5]*5)+(ending[1])+quarters+dimes+nickels+pennies))

        console.log(depositTwenties, depositTens)
        console.log(endingTotal)
      } else {
        let totalsum = hundreds*100 + fifties*50 + twenties*20 + tens*10 + fives*5 + ones + quarters + dimes + nickels + pennies; 
        let deposit = {amount: totalsum - setTill};
        let depositHundreds = depositAmount(deposit, 100, hundreds);
        let depositFifties = depositAmount(deposit, 50, fifties);
        let depositTwenties = depositAmount(deposit, 20, twenties);
        let depositTens = depositAmount(deposit, 10, tens);
        let depositFives = depositAmount(deposit, 5, fives);
        let depositOnes = depositAmount(deposit, 1, ones);  


        setDeposit({100:depositHundreds, 50: depositFifties, 20:depositTwenties, 10:depositTens, 5:depositFives, 1:depositOnes})
        setEnd({100:hundreds-depositHundreds, 50: fifties-depositFifties, 20:twenties-depositTwenties, 10:tens-depositTens, 5:fives-depositFives, 1:ones-depositOnes, 0.25:quarters, 0.10:dimes, 0.05:nickels, 0.01:pennies})
        setTotal(totalsum)
        setDepositTotal(Math.round(totalsum)- 300)
        setEndingTotal(((ending[100]*100)+(ending[50]*50)+(ending[20]*20)+(ending[10]*10)+(ending[5]*5)+(ending[1])+quarters+dimes+nickels+pennies))

        console.log(endingTotal)
        console.log(depositTotal)        
      }



    }

    getValues();
    

  

  }

  return (
    <form id="bills-form">
      <div class="bills">
        <div class="left-bills">
          <DenominationInput label={'$100'} id={"hundreds"} denomination={100}/> 
          <DenominationInput label={'$50'} id={"fifties"} denomination={50}/> 
          <DenominationInput label={'$20'} id={"twenties"} denomination={20}/> 
          <DenominationInput label={'$10'} id={"tens"} denomination={10}/> 
          <DenominationInput label={'$5'} id={"fives"} denomination={5}/> 
          <DenominationInput label={'$1'} id={"ones"} denomination={1}/>
          <DenominationInput label={'25¢'} id={"quarters"} denomination={0.25}/>
          <DenominationInput label={'10¢'} id={"dimes"} denomination={0.10}/>
          <DenominationInput label={'5¢'} id={"nickels"} denomination={0.05}/>
          <DenominationInput label={'1¢'} id={"pennies"} denomination={0.01}/>
        </div>
         
        <div class="right-bills">
          <DenominationInput label={'Base Till $'} id={"base"}/>
          <BillList handleSubmit={handleSubmit} values={ending} deposit={deposit} total={total} endingTotal={endingTotal} depositTotal={depositTotal} />
          <div class="setting">
            <Switch isOn={value} handleToggle={() => setValue(!value)}/>
            <p class='switch-text'>quantity of bills</p>
          </div>
        </div>
      </div>
    </form>
    
  )
}

export default InputForm;