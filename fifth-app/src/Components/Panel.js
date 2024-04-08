function Panel({children}){
    return(<>
            <div style={{border:'solid 1px black',padding:'10px'}}>
                <b>Panel Heading</b><br></br>
                {children}
            </div>
            </>);
}
export default Panel