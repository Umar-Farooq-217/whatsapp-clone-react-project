import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Box , Menu , MenuItem} from '@mui/material'
export default function HeaderMenu({setOpenDrawer}) {
  const [openMenu,setOpenMenu] = useState(null)

  const handleClick = (e)=>{
    setOpenMenu(e.currentTarget)
  }
  const handleClose = ()=>{
    setOpenMenu(null)
  }
  
  
  return (
    <Box >
      <MoreVertIcon onClick={handleClick} sx={{fontSize:'30px'}} />
      <Menu open={openMenu} onClose={handleClose} keepMounted anchorEl={openMenu} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        horizontal:'right',
        vertical:'top',
      }}
      >
        <MenuItem onClick={()=>{handleClose();setOpenDrawer(true)}}   sx={{marginTop:'6px'}}>Profile</MenuItem>
    
      </Menu>
    </Box>
  )
}
