import './App.css';
import React, { useState } from 'react';
import InputForm from './Components/InputForm/InputForm';

function App() {

  const [description, setDescription] = useState("value of bills");

  return (
    <div className="App">
      <heading>
        <h1>DEPOSIT CALCULATOR</h1>
        <h4>
          Enter the <span class="description">{description}</span> you have for each denomination <br/>
          then click the refresh button to see your total deposit
        </h4>
      </heading>

      <InputForm setDescription={setDescription}/>
      
    </div>
  );
}

export default App;
