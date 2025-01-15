import React, { createContext } from 'react'
import { AppBar, styled, Box, Typography } from '@mui/material';

import whatsapp from '../../images/whatsapp.svg'
import LoginDetails from '../../components/account/loginDetails/LoginDetails';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from '../context/AccountProvider';
const Header = styled(AppBar)`
height:200px;
background:#25D366;
`

export default function Messenger() {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
      console.log(clientId);
    
  return (
    <div>
       <>
    <AccountProvider>
   <GoogleOAuthProvider clientId={clientId}>
   <Header>
    <Box className='flex justify-start items-center pl-20 pt-6'>
      <img src={whatsapp} className='' width={30} height={30} alt='whatsapp pic'/>
      <Typography sx={{fontSize:'20px', fontWeight:'bold',paddingLeft:'9px'}}>Web Whatsapp</Typography>
    </Box>
    <LoginDetails/>
   </Header>
    </GoogleOAuthProvider>;
   </AccountProvider>

   </>
    </div>
  )
}
