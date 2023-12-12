import { useState } from "react"










const Todolist =()=>{

    const [list , Setlist]= useState([]);


    const [input , Setinput]= useState();





    const handlesumbit = (e)=>{

        e.preventDefault();

        Setlist([...list,input])

        Setinput("")



    }

    const handleinput = (e)=>{

     Setinput(e.target.value)


    }

    const  handleremove =()=>{

        Setlist([])
    }

    const handleitem = (ind)=>{

        const newlist= list.filter((item,i)=> i !=ind)

        Setlist(newlist)

    }

    const updateValue = (ind) => {
        const newValue = prompt("Enter the new value:");
      
        if (newValue !== null ) {
          const newList = list.map((item, i) => (i === ind ? newValue : item));
          Setlist(newList);
        }
      };
      



    return(
        <>

        <h1>lavan</h1>

        <form onSubmit={handlesumbit}>

        <input type="text"  placeholder="write here" value={input} onChange={handleinput}/>

<input type="submit"></input> &nbsp;&nbsp;


        </form>
        
        <button onClick={handleremove}> remove all</button>

        {
          
          list.length>0 ?  

            list.map((val, ind)=>{

           return   (
            <>
            
            <ul key={ind}>
                    <li> {val} {ind+1}</li>

                    <button onClick={()=>{handleitem(ind)}}> item remove</button>
                    
                    &nbsp; &nbsp;
                    <button onClick={()=>{updateValue(ind)}}> update</button>


                </ul>
                </>
                
                )

            }) : <h1>no todo list</h1>
        }

        
        
        
        </>
    )


}

export default Todolist