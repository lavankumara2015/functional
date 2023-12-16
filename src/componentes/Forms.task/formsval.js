
import { useState } from "react"

import "./style.css"



const Register = () => {

    const [email, setEmail] = useState();
    const [emailerr, setEmailerr] = useState()

    const [password, setPassword] = useState();
    const [passworderr, setPassworderr] = useState();


    const [confirmpass, setConfirmpass] = useState();
    const [confirmpassworderr, setConfirmpasserr] = useState();


    const [male, setMale] = useState();
    const [female, setFeMale] = useState();

    const [options,setOptions] =useState();

    const [sumbit,setSumbit]=useState()





    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(!email || ! password || ! confirmpass || !male || ! female || ! options ){
         
            setSumbit("Fill all form inputs  ")


        }else{

            const details = {

                Email: email,
                password: password,
                confirmpassword: confirmpass,
                gender: male ? male : female,
                state: options
               
    
            }

            alert("register successful")
            localStorage.setItem("detail",JSON.stringify(details))

        }

    }

    const validateEmail = (event) => {

        setEmail(event.target.value);

        if (event.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setEmailerr("")

        } else {


            setEmailerr("Email should be in the format example@gmail.com")
        }


    }
    const handlePassword = (event) => {

        setPassword(event.target.value);

        if (event.target.value.match(/^[a-zA-Z0-9!@#$%^&*]/) && event.target.value.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {


            setPassworderr("")
        } else {
            setPassworderr("password should contain at least six number and one special character")

        }

    }

    const handleConfirm = (event) => {
        setConfirmpass(event.target.value);

        if( event.target.value === password) {
            setConfirmpasserr("")

        }else{
            
            setConfirmpasserr("Passwords do not match")
        }
    }

    const handleMale = () => {

        setMale("male")
    }
    const handleFemale = () => {

        setFeMale("female")
    }

    const handleOptions=(e)=>{

        setOptions(e.target.value)
    }



    return (
        <center>

            
        <div id="stylee">

        <h2>Register form</h2>

            <form onSubmit={handleSubmit}>

                <label htmlFor="EMAIL">Email :</label>
                <input type="text" placeholder="Enter Email" name="EMAIL" value={email} onChange={validateEmail} /><br />
                <small style={{ color: "red" }}>{emailerr}</small> <br />


                <label htmlFor="PASSWORD">Password :</label>
                <input type="password" placeholder="Enter Password" name="PASSWORD" value={password} onChange={handlePassword} /><br />
                <small style={{ color: "red" }}>{passworderr}</small> <br />


                <label htmlFor="CONFIRMPASSWORD">Confirmpassword :</label>
                <input type="text" placeholder="Enter Confirmpassword" name="Confirmpassword" value={confirmpass} onChange={handleConfirm} /><br />
                <small style={{ color: "red" }}>{confirmpassworderr}</small> <br />



                <label htmlFor="MALE">Male </label> &nbsp;
                <input type="radio" id="MALE" name="gender" value={male} onChange={handleMale} />

                <label htmlFor="FEMALE">Female </label> &nbsp;
                <input type="radio" id="FEMALE" name="gender" value={female} onChange={handleFemale} /> <br /><br />

              
              <select value={options}  onChange={handleOptions } id="state">
              <option value="">Select state</option>
                <option value="Telangana">Telangana</option>
                <option value="Andrapradesh">Andrapradesh</option>
                <option value="kerala">kerala</option>
                <option value="Maharashtra">Maharashtra</option>
              </select> <br/>

              <small style={{ color: "red" }}>{sumbit}</small> <br />


           <input type="submit"/>







            </form>




        </div>
        </center>
    )
}

export default Register