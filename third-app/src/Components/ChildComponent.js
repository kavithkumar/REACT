function Child({ data, func }) {
    return (<>
        <b>This is from child component</b><br></br>
        Enter your name:
        <input type="text" value={data}
            onChange={(event) => func(event)}></input>
    </>)
}
export default Child