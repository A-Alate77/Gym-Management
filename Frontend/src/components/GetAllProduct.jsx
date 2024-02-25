
import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import ShowDetails from './ShowDetails';

export default function GetAllProduct() {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);


    const fetchUserData = async () => {
        try {
          // Fetch user data from backend using Axios
          console.log("In try....");
          const response = await axios.get('http://localhost:8080/user/ge'); // Replace '/api/user' with your backend endpoint
          // Set the fetched user data in state
          console.log("In response " + response.data);
          response.data.forEach((obj, index) => {
            console.log(`Object ${index + 1}:`, obj);
            // Or if you're logging specific properties of each object
            console.log(`Object ${index + 1} property:`, obj.propertyName);
        });
          setUserData(response.data);
          // Set loading to false
          setLoading(false);
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Handle error
          setLoading(false);
        }
      };

      useEffect(() => {
        fetchUserData();
      }, []);

      const deletepro = (id)=>{
        const response =  axios.delete('http://localhost:8080/user/del/'+id).then((response) => {
            console.log(response);
            console.log("success in fromtend");
            console.log(response.data);
           // navigate('/AdminLogin');
           fetchUserData();
        },)
        .catch((err)=>{
            
                console.log(err);
                console.log("error in fromtend");
           
        })
      
      }
  return (


    <>
    
    {/* {userData.map(p => 
    
    <ShowDetails key={p.user_id}  p={p.user_id}></ShowDetails>
    
    )} */}

    {loading?(<p>Loading...</p>) : userData.map(p => 

    <div class="container card-body col-6  bg-secondary mb-2 align-self-center">
    <h5 class="card-title">{p.user_id}</h5>
    <p class="card-text">{"Name : - " + p.f_name + " " + p.l_name} </p>
    <p class="card-text">{"Email : - " + p.email } </p>
    <p class="card-text">{"Contact : - " + p.contact_no } </p>
    <p class="card-text">{"Gender : - " + p.gender } </p>
    <p class="card-text">{"UserId : - " + p.user_id } </p>
    <button type="button" name="btn" className="btn btn-danger" onClick={()=>{deletepro(p.user_id)}}>Delete</button>&nbsp;&nbsp;&nbsp; 
    <a href="#" class="btn btn-primary">Top</a>&nbsp;&nbsp;&nbsp;
    {/* <button type="button" name="btn" className="btn btn-primary" onClick={()=>{update(p.user_id)}}>Delete</button>&nbsp;&nbsp;&nbsp; */}

    <Link to={{
        pathname: '/UpdateUserForm',
        state: { userId: p.user_id }
      }}
   >
              <button type="button" name="btn" className="btn btn-success">Edit</button>
           </Link>
  </div>
    
    )}

    </>
  
    )
}
