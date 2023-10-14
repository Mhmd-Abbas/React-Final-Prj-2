import { Avatar, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabPanel } from '@mui/lab';
import pfp from "../Pics/pr.jpg"
import { PfPosts } from '../components/PfPosts';

export const Profile = () => {

    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div style={{ marginLeft:"300px", width:"100%" }} >
        <div style={{ display:"flex" }} >
            <Avatar src={pfp} sx={{ height:"120px" , width:"120px" }} />
            <div style={{ width:"100%" }} >
                <div style={{ marginLeft:"20px" , padding:"9px" , width:"57%", display:"flex", justifyContent:"space-between"  }}>
                    <Typography fontWeight="bold" color="white"  > Mohammad Abbas </Typography>
                    <Button variant='contained' sx={{ height:"25px" , width:"90px"}} >
                        <Typography fontSize={"8px"} fontWeight={"bold"} > Edit Profile </Typography>
                    </Button>
                    <Button variant='contained' sx={{ height:"25px" , width:"90px"}} >
                        <Typography fontSize={"8px"} fontWeight={"bold"} > View Acions </Typography>
                    </Button>
                    <SettingsIcon color='primary' />
                </div>

                <div style={{ marginLeft:"20px" , padding:"9px" , width:"57%", display:"flex", justifyContent:"space-between"  }}>
                    <Typography fontSize={"12px"} fontWeight={"bold"} color={"white"} > 9 Posts  </Typography>
                    <Typography fontSize={"12px"} fontWeight={"bold"} color={"white"} > 286 Followers </Typography>
                    <Typography fontSize={"12px"} fontWeight={"bold"} color={"white"} > 254 Following </Typography>
                </div>

                <div style={{ marginLeft:"20px" , padding:"9px" ,width:"57%"}} >
                    <Typography fontSize={"12px"} fontWeight={"bold"} color={"white"} > محمد </Typography>
                    <Typography fontSize={"12px"} fontWeight={"bold"} color={"white"} > @AAUP_edu  </Typography>
                    <Typography fontSize={"12px"} fontWeight={"bold"} color={"white"} > Just Chilling 🤍 ... </Typography>
                </div>
            </div>
        </div>

        <br/>

        <div style={{ width:"70%"}} >
             <Divider sx={{ color:"Black" , border:"1px solid grey" , opacity:"0.4"}} /> 

            <TabContext value={value} >
                
            <Tabs value={value} onChange={handleChange} centered >
                <Tab sx={{ fontSize:"12px", width:"33%" }} label="Posts" value={1} />
                <Tab sx={{ fontSize:"12px", width:"33%" }} label="Reels" value={2} />
                <Tab sx={{ fontSize:"12px", width:"33%" }} label="Tags" value={3} />
            </Tabs>

            <TabPanel value={1} > <PfPosts/> </TabPanel>
            <TabPanel value={2} >   </TabPanel>
            <TabPanel value={3} >   </TabPanel>
            </TabContext>
        </div>
    </div>
  )
}
