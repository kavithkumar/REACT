function ObjectDetails({ data }) {
    return (
                <>
                    <br></br><b><h3>Object Details</h3></b><br></br>
                    {Object.entries(data).map
                        (([key, value], index) =>
                            <li key={index} style={{ listStyleType: 'none' }}>
                                <>
                                    <b>{key}</b>{value}<br></br>
                                </>
                            </li>
                        )
                    }
                </>
            )
}
export default ObjectDetails;