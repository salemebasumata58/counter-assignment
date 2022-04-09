import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const handleChange = (value) => {
    console.log(counter+value);
    setCounter (counter+value);
  }
  const handleChangeagain = (value) => {
    console.log(counter*value);
    setCounter (counter*value);
  }
  return (
    <div className="App">
      Hello Salem
      <h2>Counter : {counter} </h2>
      <button onClick={()=>{
        handleChange(1)
      }}
      >
        Increament</button>
      <button onClick={()=>{
        handleChange(-1);
      }}
      >Decreament</button>
      <br />
      <button onClick={()=>{
        handleChangeagain(2)
      }}>Double</button>
    </div>
  );
}

export default App;
