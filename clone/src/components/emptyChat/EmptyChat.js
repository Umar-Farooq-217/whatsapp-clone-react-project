import React from 'react'
import {emptyChatImage} from '../../constants/Constants'
import { Box, Divider, Typography } from '@mui/material'
import ComputerIcon from '@mui/icons-material/Computer';
import LockIcon from '@mui/icons-material/Lock';
export default function EmptyChat() {
  return (
    <Box sx={{width:'100%',height:'100%', backgroundColor:'#F8FAFB'}} >
   <img src={emptyChatImage} alt="EmptyChatImage" className='w-[400px] flex m-auto pt-36 ' />
   <Typography sx={{textAlign:'center',fontSize:'30px',color:'#41525d'}}> WhatsApp Web</Typography>
   <Typography sx={{color:'#41525d',textAlign:'center',paddingTop:2}}>Now send and recieve messages online without keeping your phone online.</Typography>
   <Typography sx={{color:'#41525d',textAlign:'center'}}>Use WhatsApp on up to 4 linked devices with one phone at same time</Typography>
      <Divider sx={{width:'50%',display:'flex',margin:'auto',paddingTop:'20px'}} />
      <Box className='flex  justify-center pt-5'>
        <ComputerIcon sx={{color:'#41525d',width:20,marginRight:2}} />
        <Typography sx={{color:'#41525d',textAlign:'center'}}>Make calls from desktop with WhatsApp for windows. Get it here.</Typography>
      </Box>
      <Box className='flex  justify-center pt-20'>
        <LockIcon sx={{color:'#41525d',width:20,marginRight:2}} />
        <Typography sx={{color:'#41525d',textAlign:'center'}}>End to End encryptedl.</Typography>
      </Box>
     <Box className='h-1 w-full bg-[#00A783] mt-8 mb-44'></Box>
    </Box>
  )
}
