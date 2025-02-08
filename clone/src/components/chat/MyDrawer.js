import React, { useContext } from 'react';
import { Box, Drawer,  Typography } from '@mui/material';
import { AccountContext } from '../context/AccountData';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function MyDrawer({open, setOpen}) {
  const {account} = useContext(AccountContext)
  const handleClose = ()=>{
    setOpen(false)
  }
  const drawerStyle = {
    left:32,top:23,width:"26%",marginBottom:'34px',height:639,boxShadow:'1px'
  }
  return (
    
      <Drawer  className='' style={{zIndex:1500}} PaperProps={{sx:drawerStyle}} open={open} onClose={handleClose}>
        <Box  sx={{backgroundColor:'#00A783',height:'102px',color:'white',display:'flex',gap:3 ,alignItems:'end',paddingLeft:5,paddingBottom:2}}>
          <ArrowBackIcon onClick={handleClose} sx={{fontSize:'25px',fontWeight:600}}/>
          <Typography sx={{fontSize:"16px",fontWeight:600}}>Profile</Typography>
        </Box>
        <Box sx={{display:'flex',justifyContent:'center',padding:'25px 0px' ,backgroundColor:'#F0F2F5'}}>
        <img src={account.picture} alt="dp" className='w-[130px] rounded-full' />

        </Box>
        <Box className='shadow-lg px-6 py-4'>
          <Typography className='text-[#00A783] font-semibold font-sans'>Your Name </Typography>
          <Typography className='font-bold pt-3'>{account.name}</Typography>
        </Box>
        <Box>
          <Typography className='text-gray-500 text-[10px] px-6 py-4 bg-[#F0F2F5] '>This is not your UserName or Pin . This name will be visible to your Whatsapp Contacts</Typography>

        </Box>
        <Box className='shadow-lg px-6 py-4'>
          <Typography className='text-[#00A783] font-semibold font-sans'>About </Typography>
          <Typography className='font-bold pt-3'>Eat | Sleep & Repeat</Typography>
        </Box>
      </Drawer>
    
  )
}
