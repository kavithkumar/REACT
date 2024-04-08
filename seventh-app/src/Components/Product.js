import Products from "./Products"

function Product({data}){
    
    return(
        <>
        <div style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "20px 20px"
          }}>
            
            {data.map((d)=><div style={{padding:'20px'}}><Products data={d}></Products></div>)}
        </div>
        </>
    )
}
export default Product