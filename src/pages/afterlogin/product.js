import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"





const ProductsDetails =()=>{

    const [product ,setproduct]=useState({})

   const urlid= useParams();

//    console.log(urlid);

useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/${urlid.id}`)
        .then(response => setproduct(response.data))
    })


    return(
        <>
        
        {/* <div>Products details</div> */}

        {/* <button onClick={handleprodcts}>click here</button> */}

       {
        Object.keys(product).length>0 ?

        <>
        
        <h3>{product.title}</h3>

        <img src={product.image} width={150} height={200}/>

        <p>{product.description}</p>
        <h1> price $ {product.price}</h1>
        
        </>

        :<h5>no product details</h5>
       }
        
        </>
    )
}

export default ProductsDetails