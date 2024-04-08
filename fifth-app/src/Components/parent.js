import { useContext, useState } from "react";
import Child from "./ChildComponent";
import MyContext from "./myContext";

function Parent() {
    let data = 'Hello from Parent component'
    const color=useContext(MyContext)
    console.log(color)
    return (
        <>
            <div style={{ border: 'solid 1px black', padding: '8px' ,backgroundColor:color}}>
                <b>Parent Component</b><br></br>
                <MyContext.Provider value={data}>
                    <Child></Child>
                </MyContext.Provider>
            </div>
        </>
    );
}
export default Parent;