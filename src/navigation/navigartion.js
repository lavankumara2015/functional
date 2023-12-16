import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserDetails from "../componentes/Userdetailesshowontable/detailes"
import Register from "../componentes/Forms.task/formsval"
import Error from "./error"
import ReactFroms from "../componentes/form-controlled/controlledform"
import HomeScreen from "../pages/afterlogin/home-screen"
import Aboutscreen from "../pages/afterlogin/about-screen"
import Settings from "../pages/afterlogin/setting-screen"
import ProductsDetails from "../pages/afterlogin/product"



const Navigation =()=>{
    return(
        <><BrowserRouter>
        <Routes>
            
<Route path="/UserDetails" element={<UserDetails/>} />

<Route path="/ReactFroms" element={ <ReactFroms/>}/>

<Route path="/Register" element={<Register/>} />

<Route path="*" element={<Error/>}/>

<Route path="/Homescreen" element={<HomeScreen/>}/>

<Route path="/aboutscreen" element={<Aboutscreen/>}/>

<Route path="/Settings" element={<Settings/>}/>

<Route path="/Product/:id" element={<ProductsDetails/>}/>


        </Routes>     
        </BrowserRouter></>)}
export default Navigation