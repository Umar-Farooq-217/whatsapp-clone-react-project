import { Box } from '@mui/material'
import React, { useContext, useState } from 'react'
import { messagesBackground } from '../../constants/Constants'
import Footer from './Footer'
import Header from './Header'
import { AccountContext } from '../context/AccountData'
import { newMessage } from '../../services/api'
export default function Messages({person , conversation}) {
  const {account} = useContext(AccountContext)
  const [value,setValue] = useState('')

    const sendText = async(e)=>{
   
    const code = e.keyCode || e.which;
  
    
     if(code === 13){
  let message = {
    senderId : account.sub , 
    receiverId : person.sub,
    conversationId:conversation._id,
    type:'text', 
    text:value
  }
  console.log(message);
  await newMessage(message)
  setValue('')
  

  
     }
    
    }
  
  return (
    <Box className='h-full flex flex-col '>
    <Header person={person} />
    <Box className='w-full h-[100%] overflow-y-auto flex-1    bg-contain bg-[50%]'   style={{backgroundImage:`url(${messagesBackground})`}}>
     
    </Box>
    <Footer sendText={sendText} setValue={setValue} value={value} />
    </Box>
  )
}
