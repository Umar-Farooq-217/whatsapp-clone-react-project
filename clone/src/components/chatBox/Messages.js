import { Box } from '@mui/material'
import React, { useContext, useState } from 'react'
import { messagesBackground } from '../../constants/Constants'
import Footer from './Footer'
import { AccountContext } from '../context/AccountData'
export default function Messages({person}) {
  const {account} = useContext(AccountContext)
  
    const sendText = (e)=>{
    console.log(e);
    const code = e.keyCode || e.which
     if(code === 13){
  const senderId = account.sub;
  const receiverId = person.sub;
     }
    
    }
  return (
    <>
    <Box className='w-full h-[78vh] overflow-y-auto  bg-contain bg-[50%]'   style={{backgroundImage:`url(${messagesBackground})`}}>
     
    </Box>
    <Footer sendText={sendText} />
    </>
  )
}
