
import { Link } from "react-router-dom"
import React from "react"



const NavBar =()=>{




    return(


        <nav style={{marginTop:"20px"}}>
        <ul className="nav justify-content-center" >
  <li className="nav-item"  >
    <Link to={"/Homescreen"} style={{textDecoration:"none", color:"blue",fontWeight:"700",fontSize:"20px" }} >Home</Link>
  </li>

  <li className="nav-item" style={{marginLeft:"50px"}}>
  <Link to={"/aboutscreen"}  style={{textDecoration:"none", color:"blue",fontWeight:"700",fontSize:"20px"}} >About</Link>
 
  </li>
  <li className="nav-item" style={{marginLeft:"50px"}}>
  <Link to={"/Settings"}   style={{textDecoration:"none", color:"blue",fontWeight:"700", fontSize:"20px"}}>Setting</Link>
    
   
  </li>
    
</ul>

       
        </nav>

    )

}

export default NavBar