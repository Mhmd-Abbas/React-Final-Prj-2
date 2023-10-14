import React from 'react'
import { Typography } from '@mui/material'
import MsgList from './msgList'

export const Masseges = () => {
  return (
    <div className='masseges'>
        <Typography color="white" fontSize={20} > Masseges </Typography>
        <br/>
        <MsgList/>
    </div>
  )
}
