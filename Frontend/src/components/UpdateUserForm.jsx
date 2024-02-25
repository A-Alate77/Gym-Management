import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const UpdateUserForm = ({ userId }) => {
    const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({
    user_id:'',
    f_name: '',
    l_name: '',
    age: '',
    gender: '',
    contact_no: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    // Fetch user data from backend
    axios.get(`http://localhost:8080/user/GetId/${userId}`)
      .then(response => {
        setUserData(response.data);
        console.log(response.data);
        console.log("user id "+ userId)
        setFormData({
          f_name: response.data.f_name,
          l_name: response.data.l_name,
          age: response.data.age,
          gender: response.data.gender,
          contact_no: response.data.contact_no,
          email: response.data.email,
          password: response.data.password
        });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send updated user data to backend
    axios.put(`http://localhost:8080/user/${formData.user_id}`, formData)
      .then(response => {
        console.log('User updated successfully:', response.data);
        // Optionally, redirect the user or show a success message
        navigate('/GetAllProduct');

      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <div className="container-fluid nav_bg navbar-light">
        <div className="row">
                    <div className="col-10 mx-auto"></div>

                    <h1>Update form</h1>
    
    <form onSubmit={handleSubmit}>
    <label>
        ID :
        <input
          type="number"
          name="user_id"
          //value={formData.f_name}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        First Name:
        <input
          type="text"
          name="f_name"
          value={formData.f_name}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Last Name:
        <input
          type="text"
          name="l_name"
          value={formData.l_name}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Gender:
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br></br>
      <label>
        Contact Number:
        <input
          type="text"
          name="contact_no"
          value={formData.contact_no}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <button type="submit">Update User</button>
    </form>
    </div>
    </div>
    
  );
};

export default UpdateUserForm;
