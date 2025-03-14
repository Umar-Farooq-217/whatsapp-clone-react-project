import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { messagesBackground } from '../../constants/Constants'
import Footer from './Footer'
import Header from './Header'
import { AccountContext } from '../context/AccountData'
import { getMessage, newMessage } from '../../services/api'
import Message from './Message'
export default function Messages({ person, conversation }) {
  const { account } = useContext(AccountContext)
  const [value, setValue] = useState('')
  const [message , setMessage] = useState([])

  useEffect(() => {
   
    const getMessageDetails = async () => {
      let data = await getMessage(conversation._id)
      setMessage(data)

    }
   conversation._id && getMessageDetails()
  }, [conversation._id , person._id])

  const sendText = async (e) => {

    const code = e.keyCode || e.which;


    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: 'text',
        text: value
      }
      console.log(message);
      await newMessage(message)
      setValue('')



    }

  }

  return (
    <Box className='h-full flex flex-col '>
      <Header person={person} />
      <Box className='w-full h-[100%] overflow-y-auto flex-1    bg-contain bg-[50%]' style={{ backgroundImage: `url(${messagesBackground})` }}>
       {
        message && message.map(message =>(
          <Message message={message} />
        ))
       }
      </Box>
      <Footer sendText={sendText} setValue={setValue} value={value} />
    </Box>
  )
}
