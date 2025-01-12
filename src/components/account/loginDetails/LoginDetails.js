import React from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, List, ListItem, Typography } from '@mui/material';
import {qrCodeImage} from '../../../constants/Constants'
export default function LoginDetails() {
  return (
    <div >
     
     <Dialog className='w-100%'
     open={true}>
      <Box className='grid md:grid-cols-2'>
        <Box>
      <Typography>Log into WhatsApp Web</Typography>
<List>
  <ListItem>1. Opent Whatsapp on your phone :</ListItem>
  <ListItem>2. Tap <Typography component='span'> </Typography> or <Typography component='span'>setting : </Typography> and select <Typography component='span'>Linked Devices </Typography></ListItem>
  <span className="">Menu :</span>
  <span className="">Menu :</span>
  <span className="">Menu :</span>
  <ListItem>3. Scan this QR code</ListItem>
</List>
        </Box>
        <Box>
          <img src={qrCodeImage} alt="scan code" />
        </Box>

      </Box>
     </Dialog>
    </div>
  )
}
