import { Box, Dialog } from '@mui/material'
import React from 'react'
const dialogStyle = {
  height:"80%",
  minWidth:'95%',
  // minWidth:'800px',
  boxShadow:'5px',
  maxWidth:'1500px',
  // overflow:'hidden',
  // width:"clamp(900px,90%)",
  marginTop:'45px'

}
export default function Chat() {
  <Dialog
  open={true} PaperProps={{sx:dialogStyle}} hideBackdrop={true} maxWidt={false} >
   <Box className='grid md:grid-cols-2 w-full'>
    
     </Box>
     <Box sx={{padding : '32px', margin:'auto'}}>
  
     </Box>

   </Box>
  </Dialog>
  
  return (
    <>
   </>
  )
}
