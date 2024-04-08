import { useState } from "react";

function WelcomeFunction() {
    let [message, setMessage] = useState('Welcome to Function based component')
    let [color, setColor] = useState('Red')
    const changeColor = () => { setColor('Black') }
    return (
        <>
            Hello World<br></br>
            {message}<br></br>
            Color is:{color}<br></br>
            <button onClick={changeColor}>Update Color</button>
        </>
    );
}
export default WelcomeFunction