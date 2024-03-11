import React, { useState } from 'react';
import './App.css';
import Switch from './Components/Switch/Switch';
import InputForm from './Components/InputForm/InputForm';

function App() {
  const [value, setValue] = useState(false)
  return (
    <div className="App">
      <heading>
        <h1>DEPOSIT CALCULATOR</h1>
        <h4>
          Enter the <span class="description">number of bills</span> you have for each denomination <br/>
          then click the refresh button to see your total deposit
        </h4>
      </heading>

      <InputForm/>
      
      <Switch isOn={value} handleToggle={() => setValue(!value)}/> 
    </div>
  );
}

export default App;
