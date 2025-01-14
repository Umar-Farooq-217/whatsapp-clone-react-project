import React from 'react'
import { AppBar, styled, Box, Typography } from '@mui/material';

import whatsapp from '../../images/whatsapp.svg'
import LoginDetails from '../../components/account/loginDetails/LoginDetails';
import { GoogleOAuthProvider } from '@react-oauth/google';
const Header = styled(AppBar)`
height:200px;
background:#25D366;
`

export default function Messenger() {
    const clientId = process.env.CLIENT_ID
  return (
    <div>
       <>
   <GoogleOAuthProvider clientId={clientId}>
   <Header>
    <Box className='flex justify-start items-center pl-20 pt-6'>
      <img src={whatsapp} className='' width={30} height={30} alt='whatsapp pic'/>
      <Typography sx={{fontSize:'20px', fontWeight:'bold',paddingLeft:'9px'}}>Web Whatsapp</Typography>
    </Box>
    <LoginDetails/>
   </Header>
    </GoogleOAuthProvider>;

   </>
    </div>
  )
}
