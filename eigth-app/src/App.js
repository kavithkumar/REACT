import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Child from './Components/ChildData';
import ExpCalculation from './Components/UseMemo';
import Square from './Components/UseMemo1';
import UseRefDemo from './Components/UseRefDemo';

function App() {
  console.log('App is rendered')
  let [selfData, setSelfData] = useState('')
  let [childData, setChildData] = useState('')
  const handleSelfData = (e) => {
    setSelfData(e.target.value)
  }
  const handleChildData = (e) => {
    setChildData(e.target.value)
  }
  return (<>
    <div className="App">
      <input type='text' onChange={(e) => handleSelfData(e)}></input><br></br>
      <input type='text' onChange={(e) => handleChildData(e)}></input><br></br>
      App Data: {selfData}<br></br>
      <Child data={childData}></Child><br></br>
      <ExpCalculation data1={parseInt(selfData)} data2={parseInt(childData)}></ExpCalculation><br></br>
      <Square></Square><br></br>
      <UseRefDemo></UseRefDemo><br></br>
    </div></>
  );
}

export default App;
