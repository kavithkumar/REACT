import { useState } from "react";

function GreetUser() {
    //user isa variable
    //setUseris a function which changes the value of the user variable
    let [user, setUser] = useState(' ')
    return (
        <>
            <input type="text" name="user" value={user}
                onChange={(event) => setUser(event.target.value)}></input><br></br>
            Welcome {user}
        </>
    );
}
export default GreetUser;