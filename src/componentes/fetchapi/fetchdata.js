
import axios from "axios"
import React, { useState , useEffect} from "react"
 

const FetchApi = ()=>{

    const [data,setData]=useState([])



    useEffect(()=>{

        axios.get("https://fakestoreapi.com/products")
        .then((response)=> setData(response.data)).catch((err)=>console.error(err))


    });

    // const handleClick=()=>{

    //     axios.get("https://fakestoreapi.com/products")
    //     .then((response)=> setData(response.data)).catch((err)=>console.error(err))


    // };

    return(
 
        <><br/>

{/* <button onClick={handleClick}>Click here </button> */}

    

{   
data.length>0 ? 


    data.map((element)=>{

        return (
            <>
            <h3>{element.title}</h3>
            <img src={element.image} style={{width:"100px"}}/>
            <p>{element.description}</p>
            <h1>{`Price ${element.price} $`}</h1>

            </>
        )

    }) : null
} 
        
    
    
        </>
    
       
    )


}

export default FetchApi
