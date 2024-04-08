import { useState } from "react";

function Counter() {
    let [count, setCount] = useState('');
    function increment() {
        setCount(++count);
    }
    // function decrement(){
    //     setCount(--count);
    // }
    const decrement = () => {
        setCount(--count)
    }
    return (
        <>
            <button onClick={() => increment()}>+</button><br></br>
            <button onClick={() => decrement()}>-</button><br></br>
            Count:{count}
        </>
    );
}
export default Counter