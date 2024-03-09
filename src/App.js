import React, { useState } from 'react';
import './App.css';
import Switch from './Components/Switch/Switch'

function App() {
  const [value, setValue] = useState(false)
  return (
    <div className="App">
      <Switch
        isOn={value}
        handleToggle={() => setValue(!value)}
      /> 
    </div>
  );
}

export default App;
