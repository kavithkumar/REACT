function EvenOrOdd() {
    let numValue = 21;
    let user
    return (<>
        <h3>Even or Odd</h3><br></br>
        {numValue % 2 === 0 ?
            (<h2>{numValue} is even</h2>) :
            (<h2>{numValue} is odd</h2>)
        }
        {user === undefined ?
            (<h2>Name is not defined</h2>) :
            (<h2>Enter the name</h2>)
        }
        {/* {syntax - condition ? (true statement) : (false statement)} */}
        {/* {if user is ' ' display please enter your name: welcome username} */}
    </>)
}
export default EvenOrOdd ;