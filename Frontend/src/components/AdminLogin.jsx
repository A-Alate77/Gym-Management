import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';
const date=new Date().toLocaleDateString();
const time= new Date().toLocaleTimeString();

const AdminLogin= () => {
  const navigate = useNavigate();
  const postdata = (data) => {

    axios.post(`http://localhost:8080/admin/login`, data).then((response) => {
        console.log(response);
        console.log("success");
        navigate('/UserLogin');

    },
        (error) => {
            console.log(error);
            console.log("error");
        })
};
const [newuserregisteration, setNewuserregisteration] = useState({});
const handleForm = (e) => {
    console.log(newuserregisteration);
    postdata(newuserregisteration);
    
    e.preventDefault();
}
    return(
  <>
  <div className="container" >
    <h6 className='time'>Time : {time}</h6>
   <h6 className='date'>Date : {date}</h6>
  </div>
  
   
<div className="container-fluid nav_bg"> 
<div className="row">
<div className="col-10 mx-auto">
  <h1 className="heading">Admin Login</h1>
  <br></br>
<br></br>

 <form onSubmit={handleForm}>
 {/* <div className="input-container">
          <label><h4 className="subheading">Admin ID :- </h4> </label>
          <input type="number" name="id" required 
          onChange={(e) => {
            console.log( e.target.value );
            setNewuserregisteration({ ...newuserregisteration, id: e.target.value });
        }}/>
  </div> */}
 <div className="input-container">
          <label><h4 className="subheading">Email :- </h4> </label>
          <input type="text" name="email" required
          onChange={(e) => {
            console.log( e.target.value );
            setNewuserregisteration({ ...newuserregisteration, email: e.target.value });
        }}
          />
 </div>
  <div className="input-container">
          <label><h4 className="subheading">Password :- </h4> </label>
          <input type="text" name="password" required 
          onChange={(e) => {
            console.log( e.target.value );
            setNewuserregisteration({ ...newuserregisteration, password: e.target.value });
        }}/>
  </div>


  <div className="button-container">
          <input type="submit" />
  </div>

  
 </form>
   
   </div>
</div>
</div>

 
  </>

    );

    };

    export default AdminLogin;