import { Link } from "react-router-dom"
import NavBar from "../../navbar/nav"
import axios from "axios"
import { useEffect, useState } from "react"







const HomeScreen = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        axios.get("https://fakestoreapi.com/products")
            .then((response) => setData(response.data))

    })


    return (
        <>


            <NavBar />

            <br />

            <h4>Home screen</h4> <br />


            {/* <button onClick={handlehome}>Click to load produces</button> */}

            {

                data.length > 0 ?

                    data.map((element) => {

                        return (
                            <div key={element.id} >


                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={element.image} width={100} height={120} />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p>{element.title}</p>
                                        <button>

                                            <Link to={`/Product/${element.id}`}>See more</Link>


                                        </button>
                                    </div>
                                </div>



                            </div>


                        )

                    })

                    :
                    <center style={{ marginTop: "250px" }}>
                        <p className="spinner-border" role="status"></p><p>Loading.....</p></center>

            }


        </>

    )

}

export default HomeScreen