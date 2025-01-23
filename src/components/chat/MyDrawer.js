import React, { useContext } from 'react';
import { AppBar, Box, Drawer, Toolbar, Typography } from '@mui/material';
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
    
      <Drawer hideBackdrop={true} className='' style={{zIndex:1500}} PaperProps={{sx:drawerStyle}} open={open} onClose={handleClose}>
        <Box  sx={{backgroundColor:'#00A783',height:'102px',color:'white',display:'flex',gap:5 ,alignItems:'end',paddingLeft:5,paddingBottom:2}}>
          <ArrowBackIcon sx={{fontSize:'25px',fontWeight:600}}/>
          <Typography sx={{fontSize:"16px",fontWeight:600}}>Profile</Typography>
        </Box>
        <Box sx={{display:'flex',justifyContent:'center',padding:'32px 0px' ,backgroundColor:'#F0F2F5'}}>
        <img src={account.picture} alt="dp" className='w-[150px] rounded-full' />

        </Box>
      </Drawer>
    
  )
}
