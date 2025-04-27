import React, { useContext } from 'react'
import { AppBar, styled, Box, Typography } from '@mui/material';
import whatsapp from '../../images/whatsapp.svg'
import LoginDetails from '../../components/account/loginDetails/LoginDetails';
import { GoogleOAuthProvider } from '@react-oauth/google';
import  { AccountContext } from '../context/AccountData';
import Chat from '../chat/Chat';
const Header = styled(AppBar)`
height:200px;
background:#25D366;
`



export default function Messenger() {
  const clientId =process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const {account} = useContext(AccountContext)
   
    
  return (
    <>
       
   <GoogleOAuthProvider clientId={clientId}>
   
    {
      account ? 
      (
        <Chat/>
      )
     
    
   : 
   (

   
   <>
   <Header>
   <Box className='flex justify-start items-center pl-20 pt-6'>
     <img src={whatsapp} className='' width={30} height={30} alt='whatsapp pic'/>
     <Typography sx={{fontSize:'20px', fontWeight:'bold',paddingLeft:'9px'}}>Web Whatsapp</Typography>
   </Box>
  </Header>
   <LoginDetails/></>)
  }
  
    </GoogleOAuthProvider>;

  
    </>
  )
}
