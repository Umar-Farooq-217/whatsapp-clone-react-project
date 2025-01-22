import React, { useState } from 'react';
import { Drawer } from '@mui/material';
export default function MyDrawer() {
  
  const handleClose = (prop)=>{
    setOpen(null)
  }
  return (
    
      <Drawer open={props.open} onClose={handleClose}>

      </Drawer>
    
  )
}
