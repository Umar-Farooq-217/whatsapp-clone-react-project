import React, { useContext, useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { AccountContext } from '../context/AccountData'
import { getConversation, newConversation } from '../../services/api'
import { formatDate } from '../../utils/CommonUtils'
export default function Conversation({ user }) {
  const { setPerson, account } = useContext(AccountContext)
  const [message, setMessage] = useState({})
  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({ senderId: account.sub, receiverId: user.sub })
      setMessage({ text: data?.message, timestamp: data?.updatedAt })

    }
    getConversationDetails()
  }, [account, user])

  const userHandler = async () => {
    setPerson(user)
    try {
      await newConversation({
        senderId: account.sub,
        receiverId: user.sub
      })

      // const data = await getConversation({
      //   senderId: account.sub,
      //   receiverId: user.sub
      // });
      // console.log('Fetched Conversation:', data);
    } catch (error) {
      console.log(error);

    }

  }
  return (
    <Box className='flex px-4  rounded-md  py-3 hover:bg-gray-100 cursor-pointer ' key={user.sub} onClick={() => userHandler()}>
      <Box className=''>
        <img className='w-14 rounded-full' src={user.picture} alt="dp" />

      </Box>
      <Box className="border-b ml-3 border-gray-200 w-full">
        <Box className='flex justify-between'>
        <Typography className='  ' sx={{ fontWeight: 500 }} >{user.name}</Typography>
        {
          message?.text &&
          <Typography sx={{color:'gray',fontSize:'14px'}}>{formatDate(message.timestamp)}</Typography>
        }
</Box>
        <Box className='text-[16px] text-gray-500'>{
          message?.text?.includes?.('localhost') ? 'media' : message?.text}
        </Box>
      </Box>


    </Box>
  )
}
