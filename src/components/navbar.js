import { Avatar, Box , Tab } from "@mui/material"
import { TabContext , TabList, TabPanel } from "@mui/lab"
import React, { useState } from "react"
import { ThemeProvider } from '@mui/material/styles';
import theme from "../Theme/theme";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Explore from '@mui/icons-material/Explore';
import SlideshowIcon  from '@mui/icons-material/Slideshow';
import ChatIcon  from '@mui/icons-material/Chat';
import FavoriteBorderIcon  from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon  from "@mui/icons-material/AddCircleOutline";
import Create from "../Pages/Create";
import Main from "../Pages/Main";
import { InProgress } from "../Pages/inprogress";
import { Masseges } from "./Masseges";
import ExplorePage from "../Pages/explore"
import { Profile } from "../Pages/Profile";
import pfp from "../catpics/IMG_8564.JPG"

const Navbar = () => {

  const [value,setValue] = useState("1")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme} >

    <Box sx={{  display:"flex", justifyContent:"left", height:"100vh", paddingLeft:"20px"}} >
      <TabContext value={value} >
        <Box sx={{ borderRight:3 ,borderColor:"divider", position:"fixed", top:"0px" }} >
          <TabList  onChange={handleChange} orientation="vertical" sx={{width:"200px"}}  >

            <Tab label="Home" value="1" icon={<HomeIcon/>} iconPosition="start" >Home</Tab>

            <Tab label="Search" value="2" icon={<SearchIcon/>} iconPosition="start" ></Tab>

            <Tab label="Explore" value="3" icon={<Explore/>} iconPosition="start" ></Tab>
  
            <Tab label="Reels" value="4" icon={<SlideshowIcon/>} iconPosition="start" ></Tab>

            <Tab label="Masseges" value="5" icon={<ChatIcon/>} iconPosition="start" ></Tab>

            <Tab label="Notifications" value="6" icon={<FavoriteBorderIcon/>} iconPosition="start" ></Tab>

            <Tab label={<Create/>} value="7" icon={<AddCircleOutlineIcon sx={{ zIndex:"1", position:"relative", left:"60px" }} />} iconPosition="start" ></Tab>

            <Tab label="Profile" value="8" icon={<Avatar src={pfp} sx={{ height:"30px", width:"30px" }} />} iconPosition="start" ></Tab>

          </TabList>
        </Box>

        <TabPanel value="1" > {<Main/>} </TabPanel>
        <TabPanel value="2" > {<InProgress/>} </TabPanel>
        <TabPanel value="3" > {<ExplorePage/>} </TabPanel>
        <TabPanel value="4" > {<InProgress/>} </TabPanel>
        <TabPanel value="5" > {<Masseges/>} </TabPanel>
        <TabPanel value="6" > {<InProgress/>} </TabPanel>
        <TabPanel value="7" > {<Main/>} </TabPanel>
        <TabPanel value="8" > {<Profile/>} </TabPanel>
      </TabContext>
    </Box>

    </ThemeProvider>
  )
}


export default Navbar;