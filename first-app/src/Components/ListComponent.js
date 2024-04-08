function ListComponent({ data, title }) {
    return (
        <>
            <h1>{title}</h1><br></br>
            {/* ['smith','clara','john','jade','jack','joey'] */}
            {/* {data.map((d) => <><b><li>{d}</li></b><br></br></>)} */}
            {data.map((d, index) => <li key={index}>{d}</li>)}
        </>
    )
}
export default ListComponent;