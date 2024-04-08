import { useState } from "react";
import MyContext from "./myContext";
import Parent from "./parent";

function Color() {
    let [color, setColor] = useState('orange')
    console.log(color)
    return (
        <>
            <input type='color' name="color"
                onChange={(event) => setColor(event.target.value)}></input>
            <MyContext.Provider value={color}>
                <Parent></Parent>
            </MyContext.Provider>
        </>
    );
}
export default Color;