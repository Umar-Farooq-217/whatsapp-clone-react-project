import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { AccountContext } from '../context/AccountData'
import { newConversation   } from '../../services/api'
export default function Conversation({ user }) {
  const { setPerson, account } = useContext(AccountContext)

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
    <Box className='flex px-4  rounded-md  py-3 hover:bg-gray-100 cursor-pointer 'key={user.sub} onClick={() => userHandler()}>
      <Box className=''>
        <img className='w-14 rounded-full' src={user.picture} alt="dp" />

      </Box>
      <Box className="border-b ml-3 border-gray-200 w-full">
        <Typography className='  ' sx={{ fontWeight: 500 }} >{user.name}</Typography>

      </Box>

    </Box>
  )
}
