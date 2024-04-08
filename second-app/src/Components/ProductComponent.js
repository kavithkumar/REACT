function Product({data}){
    return(
    <>
    <h1>Product Details</h1>
    <b>Product Name</b>:{data.name}<br></br>
    <b>Product Price</b>:{data.price}<br></br>
    <b>Product Quantity</b>:{data.quantity}
    </>)
}
export default Product;