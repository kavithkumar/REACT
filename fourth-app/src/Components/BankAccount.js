import { useReducer, useState } from "react"

function BankAccount(){
    let balance={count:2500}
    let name='john'
    let AccNo='32529699997'
    const Reducer=(state,action)=>{
        switch(action.type){
            case 'deposit':
                return{count:state.count + action.payload}
            case 'withdraw':
                return{count:state.count - action.payload}
            case 'reset':
                return{count:2500}
            default:
                return state

        }
    }
    const[state,dispatch]=useReducer(Reducer,balance)
    let [depAmount,setDepAmount]=useState(0)
    let [witAmount,setWitAmount]=useState(0)
    return(
        <>
        <b>Welcome {name}</b><br></br>
        <b>Your Accno: {AccNo}</b><br></br>
        <b>Your current balance: {state.count}</b><br></br>
        <input type="text" onChange={(e)=>setDepAmount(e.target.value)}></input>
        <button onClick={()=>dispatch({type:'deposit',payload:Number(depAmount)})}>Deposit</button><br></br>
        <input type="text" onChange={(e)=>setWitAmount(e.target.value)}></input>
        <button onClick={()=>dispatch({type:'withdraw',payload:Number(witAmount)})}>Withdraw</button>

        </>
    );
}
export default BankAccount