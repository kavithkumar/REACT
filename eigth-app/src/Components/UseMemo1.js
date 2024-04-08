import { useMemo, useState } from "react";

function Square() {
    let [num, setNum] = useState(5)
    const square = (num) => {
        console.log('calc');
        return num * 2
    }
    const result = useMemo(() => square(num), [num]);
    return (
        <>
            {result}<br></br>
            <button onClick={() => setNum((prevValue) => prevValue + 1)}>Update Num</button><br></br>
            <button onClick={() => setNum(num)}>Same Number</button>
        </>
    );
}
export default Square