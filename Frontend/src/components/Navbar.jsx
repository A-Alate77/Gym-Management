import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
<> 


<nav className="navbar navbar-expand-lg navbar-light bg-primary ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
        Gym Managment
    </NavLink>
   
   
   <button
       className="navbar-brand" href="#"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon"></span>
       </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0"> 
      </ul>
    
    <li className="nav-item"> 
    <NavLink
         className="nav-link active"
         aria-current="page"
  
         to="/Home"
     >
        Home

     </NavLink>  
      
    </li>

    <li className="nav-item"> 
      <NavLink className="nav-link" to="/AdminLogin">
        AdminLogin
      </NavLink>
    </li>
    <li className="nav-item"> 
      <NavLink className="nav-link" to="/UserLogin">
        UserLogin
      </NavLink>
    </li>

    <li className="nav-item"> 
      <NavLink className="nav-link" to="/AdminDashboard">
        AdminDashboard
      </NavLink>
    </li>

    <li className="nav-item"> 
      <NavLink className="nav-link" to="/GetAllProduct">
      GetAllProduct
      </NavLink>
    </li>
    <li className="nav-item"> 
      <NavLink className="nav-link" to="/NewUserReg">
        NewUser
      </NavLink>
    </li>

    <li className="nav-item"> 
      <NavLink className="nav-link" to="/UpdateUserForm">
        UpdateUserForm
      </NavLink>
    </li>
   

    </div>
  </div>
</nav>


</>

    );
};

export default Navbar;

