import DenominationInput from "../DenominationInput/DenominationInput.js";
import './InputForm.css';

function InputForm () {
  
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
        </div>
         
        <div class="right-bills">
          <DenominationInput label={'25¢'} id={"quarters"} denomination={0.25}/>
          <DenominationInput label={'10¢'} id={"dimes"} denomination={0.10}/>
          <DenominationInput label={'5¢'} id={"nickels"} denomination={0.05}/>
          <DenominationInput label={'1¢'} id={"pennies"} denomination={0.01}/>
        </div>
      </div>
    </form>
    
  )
}

export default InputForm;