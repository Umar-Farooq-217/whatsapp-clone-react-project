import React, { useContext, useEffect, useState } from 'react';
import Messages from './Messages';
import { Box } from '@mui/material';
import { AccountContext } from '../context/AccountData';
import { getConversation } from '../../services/api';

export default function ChatBox() {
  const { person, account } = useContext(AccountContext);
  const [conversation,setConversation] = useState({})

 

  useEffect(()=>{
    try {
      const getConversationDetails = async ()=>{
        let data = await getConversation({senderId:account.sub, receiverId:person.sub})
        setConversation(data)
      };
      getConversationDetails()
    } catch (error) {
      console.log('getconversation , ' , error);
      
    }
  },[person.sub,account.sub])

  return (
    <Box sx={{ width: '100%', height:'100%' }}>
      
      <Messages person={person} conversation={conversation} />
    </Box>
  );
}
