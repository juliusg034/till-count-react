import './App.css';
import InputForm from './Components/InputForm/InputForm';

function App() {
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
      
    </div>
  );
}

export default App;
