import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "./ProductSlice";



function Products(){
    let products=useSelector((state)=>state.Products.product)
    let dispatch = useDispatch()
    let [productss,setProducts]=useState([])
    return(
        <>
            <input type="text" name="name" value={productss.name} onChange={(e)=>setProducts(e.target.value)}></input>
            <input type="number" name="number" value={productss.price} onChange={(e)=>setProducts(e.target.value)}></input>
            <input type="number" name="number2" value={productss.quantity} onChange={(e)=>setProducts(e.target.value)}></input>
            <button onClick={()=>{dispatch(addProducts(productss));setProducts('')}}>Add</button>
            <ol>
                {products.map((products,index)=><><li key={index}>{products}</li></>)}
            </ol>
        </>
        
    )
}
export default Products