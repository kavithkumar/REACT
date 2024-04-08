import { useState } from "react";

function Registration() {
    let [user, setUser] = useState({ 'firstname': '', 'lastname': '', 'age': '', 'DateOfBirth': '' })
    let [error, setError] = useState({})
    const handleChange = (event) => {
        console.log(event.target)
        const { name, value } = event.target
        console.log({ ...user })
        setUser({ ...user, [name]: value }) //setFirstname(event.target.value)
        console.log(user)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        setError(validation(user))
    }
    const validation = (user) => {
        const err = {}
        const namepattern = /^[a-z ]{4,20}$/
        const emailpattern = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9-._]+\.[a-zA-Z]{2,4}$/
        const passwordpattern = /^[a-zA-Z0-9@#$%&*^]{8,15}$/
        const phnopattern = /^[0-9]{10}$/

        if (user.firstname === '') err.firstname = 'Firstname is required'
        else
            if (!namepattern.test(user.firstname)) err.firstname = "Enter a valid firstname";

        if (user.lastname === '') err.lastname = 'Lastname is required'
        else
            if (!namepattern.test(user.lastname)) err.lastname = "Enter a valid lastname";

        if (user.email === '') err.email = 'Email is required'
        else
            if (!emailpattern.test(user.email)) err.email = "Enter a valid email";

        if (user.password === '') err.password = 'Password is required'
        else
            if (!passwordpattern.test(user.password)) err.password = "Enter a valid password";

        if (user.phonenumber === '') err.phonenumber = 'phonenumber is required'
        else
            if (!phnopattern.test(user.phonenumber)) err.phonenumber = "Enter a valid phonenumber"
        return err;
    }

    return (
        <>
            <b>User Details</b><br></br>
            {user.firstname}<br></br>
            {user.lastname}<br></br>
            {user.email} <br></br>
            {user.password}<br></br>
            {user.phonenumber} <br></br>

            <form style={{ 'width': '500px', marginLeft: '350px' }} onSubmit={handleSubmit}>

                <label htmlFor="fname" className="form-label">Enter firstname</label>
                <input
                    type="text"
                    id="fname"
                    name="firstname"
                    value={user.firstname}
                    className="form-control"
                    onChange={handleChange}
                ></input>
                <span style={{ color: 'red' }}>{error.firstname}</span><br></br>

                <label htmlFor="lname" className="form-label">Enter lastname</label>
                <input
                    type="text"
                    id="lname"
                    name="lastname"
                    value={user.lastname}
                    className="form-control"
                    onChange={handleChange}
                ></input>
                <span style={{ color: 'red' }}>{error.lastname}</span><br></br>

                <label htmlFor="email" className="form-label">Enter email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    className="form-control"
                    onChange={handleChange}
                ></input>
                <span style={{ color: 'red' }}>{error.email}</span><br></br>

                <label htmlFor="password" className="form-label">Enter password</label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    value={user.password}
                    className="form-control"
                    onChange={handleChange}
                ></input>
                <span style={{ color: 'red' }}>{error.password}</span><br></br>

                <label htmlFor="phonenumber" className="form-label">Enter phonenumber</label>
                <input
                    type="number"
                    id="phonenumber"
                    name="phonenumber"
                    value={user.phonenumber}
                    className="form-control"
                    onChange={handleChange}
                ></input>
                <span style={{ color: 'red' }}>{error.phonenumber}</span><br></br>

                <button>Submit</button>
            </form>
        </>
    );
}
export default Registration;