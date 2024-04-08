import { useEffect, useState } from "react";

function EffectDemo() {
    let [color, setColor] = useState('red')
    let [num1, setNum1] = useState(0)
    let [num2, setNum2] = useState(0)
    const handleChange = (event) => {
        setColor(event.target.value)
    }
    useEffect(() => { console.log('Selected color is ' + color) }, [color])
    useEffect(() => { console.log(Number(num1) + Number(num2)) }, [num1, num2])
    return (<>
        <b>Select a Color</b>
        <select name="color" onChange={handleChange}>
            <option value='green'>Green</option>
            <option value='red'>Red</option>
            <option value='blue'>Blue</option>
            <option value='black'>Black</option>
            <option value='grey'>Grey</option>
        </select>
        <b style={{ color: color }}>This text will be displayed in the selected color</b><br></br>

        Enter numbers<br></br>
        <input type="number" name="num1" onChange={(e) => setNum1(e.target.value)}></input>
        <input type="number" name="num2" onChange={(e) => setNum2(e.target.value)}></input><br></br>
        {Number(num1) + Number(num2)}
    </>);
}
export default EffectDemo;