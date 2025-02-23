import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { AccountContext } from '../context/AccountData'
export default function Conversation({user}) {
  const {setPerson} = useContext(AccountContext)
  const userHandler = ()=>{
    setPerson(user)
  }
  return (
    <Box  className='flex px-4  rounded-md  py-3 hover:bg-gray-100 cursor-pointer ' onClick={()=>userHandler()}>
        <Box className=''>
          <img className='w-14 rounded-full' src={user.picture} alt="dp"   />

        </Box>
        <Box className="border-b ml-3 border-gray-200 w-full">
            <Typography className='  ' sx={{fontWeight:500}} >{user.name}</Typography>
            
        </Box>
      
    </Box>
  )
}
