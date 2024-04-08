function ProductComponent(data,title){
    return(
    <>
    <h1>{title}</h1>
    <b>Product Name</b>:{data.name}<br></br>
    <b>Product Price</b>:{data.price}
    </>)
}
export default ProductComponent;