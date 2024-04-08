import { useReducer, useState } from "react"

function ReducerDemo(){
    let initialState={count:0}
    //state is current state {count:value}
    //action - action performed (increment/decrement/reset)
    //action is an object with two properties 1.type 2.payload
    const reducer=(state,action)=>{
        switch(action.type){
            case 'increment':
                return {count:state.count + 1}
            case 'decrement':
                return {count:state.count - 1}
            case 'reset':
                return {count:0}
            case 'incrementByAmount':
                return {count:state.count + action.payload}
            case 'decrementByAmount':
                return {count:state.count - action.payload}
            default:
                return state//{count:currentvalue}
        }
    }
    const [state,dispatch]=useReducer(reducer,initialState)
    let [incrAmount,setIncrAmount]=useState(0)
    let [decAmount,setDecAmount]=useState(0)
    
    return(<>
                <b>Count:{state.count}</b><br></br>
                <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
                <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
                <button onClick={()=>dispatch({type:'reset'})}>Reset</button><br></br>
                <button onClick={()=>dispatch({type:'incrementBy2',payload:2})}>Increment by Amount</button><br></br>

                Enter Amount to be incremented<br></br>
                <input type="text" onChange={(e)=>setIncrAmount(e.target.value)}></input>
                <button onClick={()=>dispatch({type:'incrementByAmount',payload:Number(incrAmount)})}>Increment By Amount</button><br></br>
                Enter Amount to be decremented<br></br>
                <input type="text" onChange={(e)=>setDecAmount(e.target.value)}></input>
                <button onClick={()=>dispatch({type:'decrementByAmount',payload:Number(decAmount)})}>Decrement By Amount</button>
            
            </>);
}
export default ReducerDemo