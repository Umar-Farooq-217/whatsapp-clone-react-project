import React from 'react'
import {emptyChatImage} from '../../constants/Constants'
import { Box, Divider, Typography } from '@mui/material'
import ComputerIcon from '@mui/icons-material/Computer';
import LockIcon from '@mui/icons-material/Lock';
export default function EmptyChat() {
  return (
    <Box className='w-full  bg-[#F8FAFB]'>
   <img src={emptyChatImage} alt="EmptyChatImage" className='w-[400px] flex m-auto ' />
   <Typography sx={{textAlign:'center',fontSize:'34px',color:'#41525d'}}> WhatsApp Web</Typography>
   <Typography sx={{color:'#41525d',textAlign:'center'}}>Now send and recieve messages online without keeping your phone online.</Typography>
   <Typography sx={{color:'#41525d',textAlign:'center'}}>Use WhatsApp up to 4 linked devices with one phone at same time</Typography>
      <Divider/>
      <Box className='flex  justify-center'>
        <ComputerIcon sx={{color:'#41525d',width:20,marginRight:2}} />
        <Typography sx={{color:'#41525d',textAlign:'center'}}>Make calls from desktop with WhatsApp for windows. Get it here.</Typography>
      </Box>
      <Box className='flex  justify-center'>
        <LockIcon sx={{color:'#41525d',width:20,marginRight:2}} />
        <Typography sx={{color:'#41525d',textAlign:'center'}}>End to End encryptedl.</Typography>
      </Box>
    </Box>
  )
}
