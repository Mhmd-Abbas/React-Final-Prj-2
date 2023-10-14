import { Typography } from '@mui/material'
import React from 'react'
import rocket from "../Pics/rocket-launch.png"

export const InProgress = () => {
  return (
    <div className='inprg' >
        <img height="300px"  src={rocket} />
        <Typography color={"white"} fontSize={20} > This Page is Still in Progress ...</Typography>
    </div>
  )
}
