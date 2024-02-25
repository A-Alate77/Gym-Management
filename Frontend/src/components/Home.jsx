import React from "react";
import { NavLink } from "react-router-dom";
import web from "./logo.jpg";
import { Link } from "react-router-dom";
const date=new Date().toLocaleDateString();
const time= new Date().toLocaleTimeString();



const Home = () => {
return(
<>
<div>
        
<h6 className='time'>Time : {time}</h6>
<h6 className='date'>Date : {date}</h6>
<div className="img-container">
        <img  src={web} height={150} width={2000}  />
</div>        
</div>

<div className="container-fluid nav_bg"> 
<div className="row">
<div className="col-10 mx-auto">

<h1 className='heading'>GYM MANAGEMENT SYSTEM</h1>
<h2 className='subheading'>Homepage</h2>

<br></br>
<div class="col-12">
    <button class="btn btn-primary" type="submit">
    <NavLink className="nav-link" to="/AdminLogin">
    <h5 className="heading">Admin Login</h5>
      </NavLink>
      </button>
  </div>
  

<br></br>
<div class="col-12">
    <button class="btn btn-primary" type="submit">
    <NavLink className="nav-link" to="/UserLogin">
    <h5 className="heading">User Login</h5>
      </NavLink>
      </button>
  </div>
  <br></br>
<p className='Bottom'>
  
    <h6>Don't Have Account ? <Link to="/NewUserReg">Sign-Up</Link></h6>
   
</p>



</div>
</div>
</div>
</>     
 );
};

export default Home;




// import React from 'react'

// export default function Home() {
//   return (
//     <>
//     <div>Home</div>

//     <div class="card">
//   <div class="card-header">
//     Featured
//   </div>
//   <div class="container card-body col-6 ">
//     <h5 class="card-title">Special title treatment</h5>
//     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

//     {/* <div>
//     <div class="card" style={{"width":" 18rem"}}>
//     <div class="card-body">
//       <h5 class="card-title">{"Name:"}</h5>
//       <h6 class="card-subtitle mb-2 text-muted">{"formdetails.qty"}</h6>
//       <p class="card-text">{".pid"}</p>
      
//     </div>
//     </div>
//   </div> */}
//     </>
    
//   )
// }
