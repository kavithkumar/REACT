import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./CounterSlice";
import { useState } from "react";

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    let dispatch = useDispatch()
    let [num1, setNum] = useState(0)
    return (
        <>
            <button onClick={() => dispatch(increment())}>Increment</button><br></br>
            <span>{count}</span><br></br>
            <button onClick={() => dispatch(decrement())}>Decrement</button><br></br>
            <button onClick={() => dispatch(incrementByAmount(Number(num1)))}>Increment By Amount</button><br></br>
            Enter Number<br></br>
            <input type="number" name="num" value={num1} onChange={(e) => setNum(e.target.value)}></input><br></br>

        </>
    );
}