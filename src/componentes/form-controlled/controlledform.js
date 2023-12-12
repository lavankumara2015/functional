import { useState } from "react"
import "./style.css"
import axios from "axios";

const ReactFroms =()=>{

  const [username, setUsername] =useState("");
  const [usernameerr, setUsernameerr]= useState("")
  const [password,setPassword] = useState("");
  const [passworderr, setPassworderr]= useState("")


  const handledClick = (event)=>{
    event.preventDefault();

    const details ={

      username:username,
      password:password      
    }
    

    
    axios.post('https://dummyjson.com/auth/login',details, {
    headers: { 'Content-Type': 'application/json' },
   
  })
  .then(res=>{
    if(res.data.message){
       alert(res.data.message)
    }else{
      alert("login sucessufully")
      localStorage.setItem("details",JSON.stringify(details))
    }
});


  }
  const handledForms =(event)=>{

    setUsername(event.target.value);

    if(event.target.value.length>10){

      setUsernameerr("please enter > 5 characters")
    }else{

      setUsernameerr("")
    }
   

  }

  const handlePass =(event)=>{

    setPassword(event.target.value);
    if(event.target.value.length>10){
setPassworderr("please enter > 5 characters")
     
      
    }else{
      setPassworderr("")
    }

  }

 


    return(

        <>

        <h1>controlled form</h1>
        <form onSubmit={handledClick}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter email"
      value={username}
      onChange={handledForms}
    />
    <small id="emailHelp" className="form-text text-muted" style={{color:"red" }} >
    {usernameerr}
    </small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
      value={password}
      onChange={handlePass}
    />
     <small id="emailHelp" className="form-text text-muted" style={{color:"red" }} >
    {passworderr}
    </small>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

        
        
        
        </>
    )

}
export default ReactFroms