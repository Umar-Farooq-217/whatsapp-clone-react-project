import React, { useContext } from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, List, ListItem,  Typography } from '@mui/material';
import {qrCodeImage} from '../../../constants/Constants'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { AccountContext } from '../../context/AccountData'; 
import { addUser } from '../../../services/api';
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

export default  function LoginDetails() {
  const {setAccount} = useContext(AccountContext)
  const onLoginSuccess =async (res)=>{
    const token = res?.credential; 
    try {
      const decode = jwtDecode(token);
      setAccount(decode)
    await  addUser(decode)
      console.log(decode)
    } catch (error) {
      console.error('Error decoding token:', error.message);
    }

  }
  const onLoginError = (res)=>{
console.log("On Error " , res);

  }
  return (
    <div >
     
     <Dialog
     open={true} PaperProps={{sx:dialogStyle}} hideBackdrop={true} maxWidth={false} >
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
        <Box sx={{padding : '32px', margin:'auto'}}>
          <img src={qrCodeImage} alt="scan code" />
          <GoogleLogin  onSuccess={onLoginSuccess} onError={onLoginError} />
        </Box>

      </Box>
     </Dialog>
    </div>
  )
}
