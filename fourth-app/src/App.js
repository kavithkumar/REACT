import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './Components/Login';
import GreetUser from './Components/GreetUser';
import Registration from './Components/registrationdemo';
import EffectDemo from './Components/UseEffectDemo';
import ReducerDemo from './Components/UseReducer';
import BankAccount from './Components/BankAccount';

function App() {

  let[username,setUsername]=useState('')
  const changeUsername=(name)=>{
    setUsername(name)
  }
  return (<>
    <div className="App">
{/* {(username==='')?<Login func={changeUsername}></Login>:<GreetUser name={username}></GreetUser>} */}
    
    <Registration></Registration>

    {/* <EffectDemo></EffectDemo> */}

    {/* <ReducerDemo></ReducerDemo> */}

    {/* <BankAccount></BankAccount> */}
    
    </div>
    </>
  );
  }

export default App;
