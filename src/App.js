import React, { useState } from 'react';
import './App.css';
import Switch from './Components/Switch/Switch'

function App() {
  const [value, setValue] = useState(false)
  return (
    <div className="App">
      <heading>
        <h1>DEPOSIT CALCULATOR</h1>
        <h4>
          Enter the <span class="description">number of bills</span> you have for each <br/>
          denomination then click to refresh your total deposit.
        </h4>
      </heading>
      
      <Switch isOn={value} handleToggle={() => setValue(!value)}/> 
    </div>
  );
}

export default App;
