import React, { useState } from 'react'
import p1 from "../LoginPics/androidScreen.png"
import p2 from "../LoginPics/iPhoneScreen.png";
import logo from "../LoginPics/instagram-logo.png"
import { Button, Divider, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {

    localStorage.removeItem('token')

    const navigate = useNavigate();
    const [userData , setUserData] =useState({
            email: "Email",
            password: "Password"
        })

    function loginHandle(e) {
        e.preventDefault();

        axios.post("http://16.170.173.197/users/login",userData)
        .then( (response) => {
            const token = response.data.token;
            const id = response.data.user.id;

            localStorage.setItem("token",token);
            localStorage.setItem("id",id);

            navigate("/Main");

        }).catch((error) => {
            alert(error)
        })

    }


  return (
    <div style={{ display:"flex", height:"100vh", width:"100%" }}>
    <div style={{ width:"50%", height:"100%", }} >
        <img src={p1} height="500px"  style={{ position:"relative", left:"50%", zIndex:"1" }} />
        <img src={p2} height="550px"  style={{ position:"relative", left:"20%", top:"53px", zIndex:"2" }} />
    </div>
    <div style={{ width:"50%" }} >
        <div className='login' style={{ marginTop:"15%" }}  >
            <img src={logo} height="30px" width="105px" />
            <br/>
            <input className='loginTxt' value={userData.email} onChange={(e) => {
                setUserData({...userData, email : e.target.value})
            }} />
            <br/>
            <input type='password' className='loginTxt' value={userData.password} onChange={(e) => {
                setUserData({...userData, password : e.target.value});
            }} />
            <br/>
            <Button variant='filled' sx={{ color:"white", fontWeight:"bold", backgroundColor:"DodgerBlue", width:"90%" }} onClick={(event) => {
                loginHandle(event);
            }} > Login in </Button>
            <br/>
            <Divider sx={{ width:"100%", color:"grey" }} light > Or </Divider>
            <br/>
            <Button variant='filled' sx={{ color:"white", fontWeight:"bold", backgroundColor:"DodgerBlue", width:"90%", height:"30px" }}   > Login with Facebook </Button>
            <br/>
            <Typography fontSize={"12px"} fontWeight={"bold"} color={"white"} sx={{ opacity:"0.5" }} > Forgot Password? </Typography>
        </div>
        <br/>
        <div className='login' style={{ marginTop:"5px", paddingBottom:"20px", paddingTop:"20px" }} >
        <Typography fontSize={"12px"} fontWeight={"bold"} color={"white"} sx={{ opacity:"0.5" }} >
            Don't Have an account?
            <Link to={"/SignUp"} > SignUp </Link> 
        </Typography>
        </div>
    </div>
</div>
  )
}
