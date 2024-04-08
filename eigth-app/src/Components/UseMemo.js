import { useMemo } from "react";

function ExpCalculation({ data1, data2 }) {
    const sum = (data1, data2) => {
        console.log('calculating sum')
        return data1 + data2;
    }
    const result = useMemo(() => sum(data1, data2), [data1, data2])
    return (
        <>
            {result}<br></br>
            <button onClick={() => console.log(result)}>Sum</button>
        </>
    );
}
export default ExpCalculation