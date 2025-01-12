import React from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, List, ListItem,  Typography } from '@mui/material';
import {qrCodeImage} from '../../../constants/Constants'
// const log = styled(Typography)`
// fontSize:25px
// `;
const dialogStyle = {
  height:"70%",
  // minWidth:'800px',
  boxShadow:'none',
  // maxWidth:'95%',
  overflow:'hidden',
  width:"clamp(900,80%)"

}

export default function LoginDetails() {
  return (
    <div >
     
     <Dialog className='min-w-[90%]'
     open={true} PaperProps={{sx:dialogStyle}}>
      <Box className='grid md:grid-cols-2'>
        <Box className='p-8'>
      <Typography sx={{fontSize:'25px',fontWeight:'bold'}} >Log into WhatsApp Web</Typography>
<List>
  <ListItem>1. Opent Whatsapp on your phone :</ListItem>
  <ListItem>2. Tap 

  Menu : or
setting :
  Linked Devices :
  </ListItem>
  <ListItem>3. Scan this QR code</ListItem>
</List>
        </Box>
        <Box className='p-8'>
          <img src={qrCodeImage} alt="scan code" />
        </Box>

      </Box>
     </Dialog>
    </div>
  )
}
