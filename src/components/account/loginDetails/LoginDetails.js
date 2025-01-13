import React from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, List, ListItem,  Typography } from '@mui/material';
import {qrCodeImage} from '../../../constants/Constants'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
const dialogStyle = {
  height:"70%",
  // minWidth:'800px',
  boxShadow:'none',
  // maxWidth:'95%',
  overflow:'hidden',
  // width:"clamp(900px,80%)"

}

export default function LoginDetails() {
  const onLoginSuccess = (res)=>{
    const token = res?.credential; // Example if `res` contains `credential` as the token
    try {
      const decode = jwtDecode(token);
      console.log(decode);
    } catch (error) {
      console.error('Error decoding token:', error.message);
    }

  }
  const onLoginError = (res)=>{
console.log("On Error " , res);

  }
  return (
    <div >
     
     <Dialog className=' border border-red-600 backdrop:shadow(none)'
     open={true} PaperProps={{sx:dialogStyle}}>
      <Box className='grid md:grid-cols-2 w-full'>
        <Box className='p-8'>
      <Typography sx={{fontSize:'25px',fontWeight:'bold',textWrap:'balance'}} >Log into WhatsApp Web</Typography>
<List>
  <ListItem>1. Opent Whatsapp on your phone :</ListItem>
  <ListItem>2. Tap 

  Menu : or
setting : and select
  Linked Devices :
  </ListItem>
  <ListItem>3. Scan this QR code</ListItem>
</List>
        </Box>
        <Box className='p-8 '>
          <img src={qrCodeImage} alt="scan code" />
          <GoogleLogin  onSuccess={onLoginSuccess} onError={onLoginError} />
        </Box>

      </Box>
     </Dialog>
    </div>
  )
}
