import { useContext } from "react";
import MyContext from "./myContext";

function GrandChild({children}) {
    const {data,color} = useContext(MyContext);
    return (
        <>
            <div style={{ border: 'solid 1px Blue', padding: '10px',backgroundColor: color }}>
                <b>GrandChild Component</b><br></br>
                <b>Data from parent : {data}</b><br></br>
                {children}
            </div>
        </>
    );
}
export default GrandChild