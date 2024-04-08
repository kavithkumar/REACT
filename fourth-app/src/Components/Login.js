import { useState } from "react";

function Login({func}){
    let [name,setName]=useState('')
    const handleChange=(e)=>{
        setName(e.target.value)
    }
    return(
        <>
        <form>
        <input type="text" placeholder="Enter a name" onChange={(e)=>handleChange(e)}></input>
        <button onClick={()=>func(name)}>click</button>
        </form>
        </>
    );
}
export default Login