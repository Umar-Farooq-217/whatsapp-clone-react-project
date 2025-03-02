import { Box } from '@mui/material'
import React from 'react'
import { messagesBackground } from '../../constants/Constants'
import Footer from './Footer'
import Header from './Header'
// import { AccountContext } from '../context/AccountData'
export default function Messages({person}) {
  // const {account} = useContext(AccountContext)
  
    const sendText = (e)=>{
   
    const code = e.keyCode || e.which;
    console.log('code ', code);
    
  //    if(code === 13){
  // let message = {
  //   senderId : account.sub , 
  //   receiverId : person.sub
  // }

  
  //    }
    
    }
  
  return (
    <Box className='h-full flex flex-col '>
    <Header person={person} />
    <Box className='w-full h-[100%] overflow-y-auto flex-1    bg-contain bg-[50%]'   style={{backgroundImage:`url(${messagesBackground})`}}>
     
    </Box>
    <Footer sendText={sendText} />
    </Box>
  )
}
