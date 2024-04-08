import { useState } from "react";

function ColorChanger(){
    let [color,setColor]=useState('balck')
    return(
        <>
            <input type="color" name="color" onChange={(e)=>setColor(e.target.value)}></input>
                <b style={{color:color}}>
                    This is the text which will get displayed in {color} color
                </b>
        </>
    );
}
export default ColorChanger;