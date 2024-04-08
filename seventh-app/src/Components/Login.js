import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
    let [loginUser, setLoginUser] = useState({ 'email': '', 'password': '' })
    const navigate = useNavigate()
    const handleChange = (event) => {
        const { name, value } = event.target
        console.log({ name, value })
        setLoginUser({ ...loginUser, [name]: value })
        console.log(loginUser)
    }
    const handleSubmit = () => {
        alert('handlesubmit')
        onLogin(loginUser)
        navigate('/home')
    }
    return (
        <>
            <div style={{ margin: '10px 70px', padding: '50px', backgroundColor: 'blueviolet' }}>
                <b>Login Page</b><br></br>
                <form>
                    <input type="email" placeholder="Enter Email" name="email"
                        value={loginUser.email} onChange={(e) => handleChange(e)}></input><br></br>
                    <input type="password" placeholder="Enter Password" name="password"
                        value={loginUser.password} onChange={(e) => handleChange(e)}></input><br></br>
                    <button onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </>
    );
}
export default Login