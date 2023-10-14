import React, { useState } from 'react'
import p1 from "../LoginPics/androidScreen.png";
import p2 from "../LoginPics/iPhoneScreen.png";
import logo from "../LoginPics/instagram-logo.png"
import { Button, Divider, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SignUp = () => {

  localStorage.removeItem('token')

  const navigate = useNavigate();
  const [userData , setUserData] = useState({
      email: "Email",
      userName: "Username",
      password: "Password"
    
    })

  function signupHandle(e){


    axios.post(" http://16.170.173.197/users/signup",userData)
      .then((response) => {
        const token = response.data.token;

        localStorage.setItem("token",token);

        navigate("/");

      }).catch((error) => {
        alert(error);
      })
  }

  return (
    <div style={{ display:"flex", height:"100vh", width:"100%" }}>
        <div style={{ width:"50%", height:"100%", }} >
            <img src={p1} height="500px"  style={{ position:"relative", left:"50%", zIndex:"1" }} />
            <img src={p2} height="550px"  style={{ position:"relative", left:"20%", top:"53px", zIndex:"2" }} />
        </div>
        <div style={{ width:"50%" }} >
            <div className='login' >
                <img src={logo} height="30px" width="105px" />
                <br/>
                <Typography fontSize={"12px"} fontWeight={"bold"} color={"white"} sx={{ opacity:"0.5" }} > Sign up to see photos and vdoes </Typography>
                <Typography fontSize={"12px"} fontWeight={"bold"} color={"white"} sx={{ opacity:"0.5" }} > from your friends </Typography>
                <br/>
                <Button variant='filled' sx={{ color:"white", fontWeight:"bold", backgroundColor:"DodgerBlue", width:"90%", height:"30px" }}   > Login with Facebook </Button>
                <br/>
                <Divider sx={{ width:"100%", color:"grey" }} light > Or </Divider>
                <br/>
                <input className='loginTxt' value={userData.email} onChange={(e) => {
                  setUserData({...userData , email : e.target.value })
                }} />
                <br/>
                <input className='loginTxt' value={userData.userName} onChange={(e) => {
                    setUserData( {...userData, userName : e.target.value })
                }}  />
                <br/>
                <input type='password' className='loginTxt' value={userData.password} onChange={(e) => {
                    setUserData( {...userData, password : e.target.value} )
                }} />
                <br/>
                <Button variant='filled' sx={{ color:"white", fontWeight:"bold", backgroundColor:"DodgerBlue", width:"90%", height:"30px" }} onClick={(event) => {
                  signupHandle(event)
                }}  > Sign Up </Button>
                <br/>
                <Typography fontSize={"12px"} fontWeight={"bold"} color={"white"} sx={{ opacity:"0.5" }} > By signing up, you agree to our Terms, Data </Typography>
                <Typography fontSize={"12px"} fontWeight={"bold"} color={"white"} sx={{ opacity:"0.5" }} > Policy and Cookies Police </Typography>
            </div>
            <br/>
            <div className='login' style={{ marginTop:"5px", paddingBottom:"20px", paddingTop:"20px" }} >
            <Typography fontSize={"12px"} fontWeight={"bold"} color={"white"} sx={{ opacity:"0.5" }} >
                 Have an account? 
                 <Link to={"/"} >Login</Link>
            </Typography>
            </div>
        </div>
    </div>
  )
}
