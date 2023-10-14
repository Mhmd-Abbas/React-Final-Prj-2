import React from 'react'
import {Avatar, ThemeProvider, Typography} from "@mui/material";
import theme from "../Theme/theme";


export const MassegePfp = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display:"flex", padding:"5px", paddingBottom:"13px" , width:"130%", justifyContent:"space-between" }} >
        <Avatar src={props.avt} />
        <div style={{ width:"75%" }} >
          <Typography color="primary" > Some Name </Typography>
          <Typography color="primary" sx={{ opacity:"0.7" }} > Some text </Typography>
        </div>
      </div>
    </ThemeProvider>
  )
}
