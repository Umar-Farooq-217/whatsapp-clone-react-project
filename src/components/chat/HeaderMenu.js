import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Box , Menu , MenuItem} from '@mui/material'
export default function HeaderMenu() {
  const [open,setOpen] = useState(null)
  const handleClick = (e)=>{
    setOpen(e.currentTarget)
  }
  const handleClose = ()=>{
    setOpen(null)
  }
  
  return (
    <Box >
      <MoreVertIcon onClick={handleClick} />
      <Menu open={open} onClose={handleClose} keepMounted anchorEl={open} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        horizontal:'right',
        vertical:'top',
      }}
      >
        <MenuItem sx={{marginTop:'6px'}}>Profile</MenuItem>
      </Menu>
    </Box>
  )
}
