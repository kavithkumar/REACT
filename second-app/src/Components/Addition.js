import { useState } from "react";

function Addition() {
    let [number1, setNumber1] = useState('');
    let [number2, setNumber2] = useState('');
    let [result, setResult] = useState('');
    const add = () => { setResult(Number(number1) + Number(number2)) }
    return (
        <>
            <h1>Sum of Numbers</h1><br></br>
            <pre>
                Enter number1:
                <input type="number" name="number1"
                    onChange={(e) => {setNumber1(e.target.value);add()}}></input><br></br>
                Enter number2:
                <input type="number" name="number2"
                    onChange={(e) => {setNumber2(e.target.value);add()}}></input><br></br>
                <button onClick={add}>ADD</button>
                {/* Result:{number1}+{number2}={result} */}
                Result:{number1}+{number2}={Number(number1)+Number(number2)}
            </pre>
        </>
    );
}
export default Addition;