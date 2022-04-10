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
  const change = () =>{
    if(counter%2===0){
      return <h1 className='green'>Counter : {counter} </h1>
    }else{
      return <h1 className='red'>Counter : {counter} </h1>
    }
  }
  return (
    <div className="App">
      
      {change()}
      {/* <h2>Counter : {counter} </h2> */}
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
