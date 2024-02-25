import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import UserLogin from './components/UserLogin'
import AdminLogin from './components/AdminLogin';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import {Routes,Route,Switch,Redirect} from 'react-router-dom';
// import {Router, Route, Switch,Routes } from "react-router-dom";
import { Switch , Route , Redirect ,Routes} from "react-router-dom";
import Home from './components/Home';
import axios from 'axios';
import GetAllProduct from './components/GetAllProduct';
import UpdateUserForm from './components/UpdateUserForm';
function App() {
  return (

    <>
    <Navbar/>

    <Routes >

    <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/AdminLogin' element={<AdminLogin></AdminLogin>}></Route>
        <Route path='/UserLogin'  element={<UserLogin></UserLogin>}></Route>
        <Route path='/GetAllProduct' element={<GetAllProduct></GetAllProduct>}></Route>
        <Route path='/UpdateUserForm' element={<UpdateUserForm></UpdateUserForm>}></Route>
    </Routes>


     

    </>

    // <>
    // {/* <NavBar/> */}
    // {/* <Routes> */}
    // {/* <Login path="/home"></Login> */}
    // <Switch>
    //    <Route path="/login" element={<Login></Login>}></Route>
    // <Route path="/nav" element={<NavBar></NavBar>}></Route>
    
    // </Switch>
   
    // {/* </Routes> */}
    
    // </>
  );
}

export default App;
