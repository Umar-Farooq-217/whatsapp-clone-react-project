import React, { useContext, useEffect } from 'react';
import Messages from './Messages';
import { Box } from '@mui/material';
import { AccountContext } from '../context/AccountData';
import { getConversation } from '../../services/api';
// import { getConversation } from '../../services/api';

export default function ChatBox() {
  const { person, account } = useContext(AccountContext);

  // useEffect(() => {
  //   const getConversationDetails = async () => {

  //     try {
  //       const  data = await getConversation({ senderId: account.sub, receiverId: person.sub });
  //       console.log('Conversation Data:', data);
  //     } catch (error) {
  //       console.error('Error fetching conversation:', error);
  //     }
  //   };

  //   getConversationDetails();
  // }, [person.sub,account.sub]);

  useEffect(()=>{
    try {
      const getConversationDetails = async ()=>{
        let data = await getConversation({senderId:account.sub, receiverId:person.sub})
        console.log('getconversation api data ', data)
      };
      getConversationDetails()
    } catch (error) {
      console.log('getconversation , ' , error);
      
    }
  },[])

  return (
    <Box sx={{ width: '100%', height:'100%' }}>
      
      <Messages person={person} />
    </Box>
  );
}
