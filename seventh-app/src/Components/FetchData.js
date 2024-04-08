import { useEffect, useState } from "react";

function FetchUsers() {
    let [users, setUsers] = useState([])
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(response)
        const result = await response.json();
        console.log(result)
        setUsers(result)
    }
    useEffect(() => {
        alert('now')
        fetchData()
    }, [])

    return (
        <>
            <b>List of Users</b>
            <div>
                <ul>
                    {users.map((u) => (
                        <li><b>{u.name}</b></li>))}
                </ul>
            </div>
        </>
    )
}
export default FetchUsers