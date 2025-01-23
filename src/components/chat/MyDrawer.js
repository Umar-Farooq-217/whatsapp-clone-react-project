import React from 'react';
import { Drawer } from '@mui/material';
export default function MyDrawer({open, setOpen}) {
  
  const handleClose = ()=>{
    setOpen(false)
  }
  const drawerStyle = {
    left:32,top:23,width:"25%",
  }
  return (
    
      <Drawer className='' style={{zIndex:1500}} PaperProps={{sx:drawerStyle}} open={open} onClose={handleClose}>
hello
      </Drawer>
    
  )
}
