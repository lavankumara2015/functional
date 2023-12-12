import { useState } from "react"



const SetTimer = ()=>{

    const [Normal, SetTime] = useState(0);
    let intervalId;


    const handleClick =()=>{

        intervalId=     setInterval(()=>{

            SetTime((preState)=>preState+1)

        },1000)
    
    }

    const handleStop =()=>{

        clearInterval(intervalId)
        SetTime(0)

    }

    return(
 
        <center>
        
        <h1>Timer </h1>
        <h1>{Normal}</h1>
        
        <button onClick={handleClick}>Start</button>  &nbsp; &nbsp;
        <button onClick={handleStop}>Reset</button>
        </center>
        

       
    )


}

export default SetTimer
