import React from "react"
// import './App.css'
import './index.css'
import { BrowserRouter,Routes,Route } from "react-router-dom"

// Admin page 
import Register from "./Adminpage/Register"
import Login from "./Adminpage/Login"
import Forgetpas from "./Adminpage/Forgetpas"
import Adminprofile from "./Adminpage/AdminProfile"



//user page 
import Useradd from "./Userpage/Useradd"
import Userlogin from "./Userpage/Userlogin"
import Totalusers from "./Userpage/Totalusers"


// waste Page 
import Wasteadd from "./Wastepage/Wasteadd"
import Totaltask from "./Wastepage/Totaltask"
import Workeradd from "./Wastepage/Workeradd"
import Workerlogin from "./Wastepage/Workerlogin"
import Workerdetails from "./Wastepage/Workerdetails"
import Completedtask from "./Wastepage/Completedtask"
import Comment from "./Wastepage/Comment"

// Waste navbar 
import Mainmenu from "./Mainpage/Mainmenu"
import Mainpage from "./Mainpage/Mainpage"
import Management from "./Mainpage/Management"
import Workers from "./Mainpage/Workers"
import Wastes from "./Mainpage/Wastes"
import Contact from "./Mainpage/Contact"
import About from "./Mainpage/About"

function App(){
   return (
  <>
  <BrowserRouter>
  <Routes>
    {/* admin page  */}
    
    <Route path="/Register" element={<Register/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/Forgetpas" element={<Forgetpas/>}></Route>
    <Route path="/Adminprofile" element={<Adminprofile/>}></Route>
  

  {/* userpage  */}
    <Route path="/Userlogin" element={<Userlogin/>}></Route>
    <Route path="/Totalusers" element={<Totalusers/>}></Route>
    <Route path="/Useradd" element={<Useradd/>}></Route>



{/* waste Page  */}
<Route path="/Wasteadd" element={<Wasteadd/>}></Route>
<Route path="/Totaltask" element={<Totaltask/>}></Route>
<Route path="/Workeradd" element={<Workeradd/>}></Route>
<Route path="/Workerlogin" element={<Workerlogin/>}></Route>
<Route path="/Workerdetails" element={<Workerdetails/>}></Route>
<Route path="/Completedtask" element={<Completedtask/>}></Route>
<Route path="/Comment" element={<Comment/>}></Route>


{/* Waste navbar  */}
<Route path="/Mainmenu" element={<Mainmenu/>}></Route>
<Route path="/Mainpage" element={<Mainpage/>}></Route>
<Route path="/Management" element={<Management/>}></Route> 
<Route path="/Workers" element={<Workers/>}></Route>
<Route path="/Wastes" element={<Wastes/>}></Route>
<Route path="/Contact" element={<Contact/>}></Route>
<Route path="/About" element={<About/>}></Route>

  </Routes>
  </BrowserRouter>
  </>
  )
}
 


export default App
