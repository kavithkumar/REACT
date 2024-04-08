function Hello(props) {
    let name = 'John'
    function handleClick() {
        alert('Clicked the button')
    }
    // const handleClick=()=>alert('Clicked the button')
    return (<>
        <h2>{props.title}</h2>
        <b>Hello World!!!</b>
        <p>Welcom to React world!!!! at {props.date}</p>
        <button onClick={handleClick}>Click me</button>
    </>);
}
export default Hello;