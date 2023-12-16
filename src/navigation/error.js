import { Link } from "react-router-dom"






const Error =()=>{

    return(
        <>

        <h1>404 Error Go to Register page click back button </h1>

        <Link to={"/Register"}> <button> come back</button></Link>
       
    
        </>
    )
}

export default Error