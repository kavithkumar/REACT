import { useRef, useState } from "react";

function UseRefDemo() {
    const myRef = useRef()
    const paraRef = useRef()
    let [ref, setRef] = useState()
    const handleChange = () => {
        console.log(myRef.current.value)
    }
    const focus = () => {
        myRef.current.focus()
        paraRef.current.textContent = 'Updated paragraph'
    }
    return (
        <>
            <input type="text" ref={myRef} onChange={handleChange}></input><br></br>
            <p ref={paraRef}>This is a paragraph</p>
            <button onClick={focus}>Click</button>
        </>
    );
}
export default UseRefDemo