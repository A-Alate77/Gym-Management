import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
function UserLogin() {

    const navigate = useNavigate();
    const postdata = (data) => {

        

        axios.post(`http://localhost:8080/user`, data).then((response) => {
            console.log(response);
            console.log("success in fromtend");
            console.log(response.data);
            navigate('/GetAllProduct');
        },)
        .catch((err)=>{
            
                console.log(err);
                console.log("error in fromtend");
           
        })
    }        
    
    const [newuserregisteration, setNewuserregisteration] = useState({});
    const handleForm = (e) => {
        //setNewuserregisteration(setNewuserregisteration({...newuserregisteration,"adminid":"1"}))
        console.log("original data "+ newuserregisteration);
        postdata(newuserregisteration);
        
        e.preventDefault();
    }

    return (

        <>
            <h6 className='time'>Time : {time}</h6>
            <h6 className='date'>Date : {date}</h6>
            <div className="container-fluid nav_bg navbar-light">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <div className="my-0">
                            <h1 className="heading">
                                New User Registeration
                            </h1>
                        </div>
                        <div className="container conatct_div" >

                            <div className="row" >
                                <div className="" col-md-6 col-10 mx-auto>

                                    {/* {Object.keys(formErrors).length === 0 && isSubmit ? ( 
        <div className="successmsg">New User Registered Successfully</div>  
      ) : (<pre></pre>)} */}

                                    <form onSubmit={handleForm}>

                                        <div className="mb-2">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                                <h4 className="subheading">First name</h4>
                                            </label>
                                            <input type="text" name="firstname" required className="form-control" id="exampleFormControlInput1" placeholder="Enter your first name"
                                                onChange={(e) => {
                                                    setNewuserregisteration({ ...newuserregisteration, f_name: e.target.value });
                                                }}
                                            />
                                        </div>



                                        <div className="mb-2">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                                <h4 className="subheading">Last name</h4>
                                            </label>
                                            <input type="text" name="lastname" required className="form-control" id="exampleFormControlInput1" placeholder="Enter your last name"
                                                onChange={(e) => {
                                                    setNewuserregisteration({ ...newuserregisteration, l_name: e.target.value });
                                                }}
                                            />
                                        </div>


                                        <div className="mb-2">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                                <h4 className="subheading">Email Address</h4>
                                            </label>
                                            <input type="email" name="email" required className="form-control" id="exampleFormControlInput1" placeholder="abcd@gmail.com"
                                                onChange={(e) => {
                                                    setNewuserregisteration({ ...newuserregisteration, email: e.target.value });
                                                }}

                                            />
                                        </div>


                                        <div className="mb-2">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                                <h4 className="subheading">New Password</h4>
                                            </label>
                                            <input type="password" name="password" required className="form-control" id="exampleFormControlInput1" placeholder="Enter your password"
                                                onChange={(e) => {
                                                    setNewuserregisteration({ ...newuserregisteration, password: e.target.value });
                                                }}

                                            />
                                        </div>


                                        <div className="mb-2">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                                <h4 className="subheading">Confirm Password</h4>
                                            </label>
                                            <input type="password" name="cpassword" required className="form-control" id="exampleFormControlInput1" placeholder="Enter your password"

                                            />
                                        </div>




                                        <div className="mb-2">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                                <h4 className="subheading">Contact Number</h4>
                                            </label>
                                            <input type="tel" name="contact" required className="form-control" id="exampleFormControlInput1" placeholder="XXXXXXXXXX"
                                                onChange={(e) => {
                                                    setNewuserregisteration({ ...newuserregisteration, contact_no: e.target.value });
                                                }}
                                            />
                                        </div>

                                        {/* <div className="mb-2"> 
        <label htmlFor="exampleFormControlInput1" className="form-label"> 
        <h4 className="subheading">Date of birth</h4> 
          </label> 
        <input type="date" name="dob" required className="form-control" id="exampleFormControlInput1" placeholder="yyyy-mm-dd" 
       onChange={(e)=>{ 
        setNewuserregisteration({...newuserregisteration,dob:e.target.value}); 
        }} 
        /> 
      </div>  */}

                                        <div
                                            className="mb-2">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                                <h4 className="subheading">Gender</h4>
                                            </label>
                                            <input type="text" name="dob" required className="form-control" id="exampleFormControlInput1" placeholder="male or female"
                                                onChange={(e) => {
                                                    setNewuserregisteration({ ...newuserregisteration, gender: e.target.value });
                                                }}
                                            />
                                        </div>

                                        <div
                                            className="mb-2">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                                <h4 className="subheading">Admin Id</h4>
                                            </label>
                                            <input type="number" name="adminid" required className="form-control" id="exampleFormControlInput1" placeholder="admin id"
                                                onChange={(e) => {
                                                    console.log(e.target.value)
                                                    setNewuserregisteration({ ...newuserregisteration, "adminid":1 });
                                                }}
                                            />
                                        </div>

                                        <br></br>
                                        <div className="col-12">
                                            <button className="btn btn-outline-primary" type="submit" >
                                                Submit form
                                            </button>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <Link to="/nav">
     {/* <button type="button" name="btn" id="btn" value="btn">back</button> */}
    </Link>
        </>
    )
}


export default UserLogin;
