
import { useState } from "react"
import "./circle.css"
import { findAllByDisplayValue } from "@testing-library/react";




const CircleGenerator =()=>{

    const [circle, setCircle]=useState([]);


 const colorChange=(i)=>{

    const update=[...circle]

    update[i]="black"

    setCircle(update)

 }

 const handleClick =()=>{

    setCircle([...circle,"blue"])

 }

    return(
        <>

<button onClick={handleClick}>hello</button>

        {
            circle.map((val,ind)=>{

                return (
                    <>
                    <div className="cic" style={{backgroundColor:val}} onClick={()=>colorChange(ind)} ></div>
                    
                  
                    </>
                )
            })
        }
        
    
        
        </>
    )


}

export default CircleGenerator



