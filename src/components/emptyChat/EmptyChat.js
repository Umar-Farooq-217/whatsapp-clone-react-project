import React from 'react'
import {emptyChatImage} from '../../constants/Constants'
import { Box, Typography } from '@mui/material'

export default function EmptyChat() {
  return (
    <Box className='w-full  bg-[#F8FAFB]'>
   <img src={emptyChatImage} alt="EmptyChatImage" className='w-[400px] flex m-auto ' />
   <Typography sx={{textAlign:'center',fontSize:'34px',color:'#2f2f2e'}}> WhatsApp Web</Typography>
   <Typography>Now send and recieve messages online without keeping 
   </Typography>
      
    </Box>
  )
}
