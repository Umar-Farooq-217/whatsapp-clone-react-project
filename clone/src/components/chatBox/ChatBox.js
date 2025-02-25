import React, { useContext, useEffect } from 'react'
import Header from './Header'
import Messages from './Messages'
import { Box } from '@mui/material'
import { AccountContext } from '../context/AccountData'
import { getConversation } from '../../services/api'

export default function ChatBox() {
  const {person ,account } = useContext(AccountContext)
  useEffect(()=>{
    const getConversationDetails = async()=>{
    let data =   await getConversation({
        senderId:account.sub,
        receiverId : person.sub
      })
      console.log('getconversationdetails',data);
      
    }
   getConversationDetails();
  },[person.sub])

  return (
    <Box sx={{width:'100%'}} >
      <Header person={person} />
      <Messages person={person} />
     
    </Box>
  )
}
