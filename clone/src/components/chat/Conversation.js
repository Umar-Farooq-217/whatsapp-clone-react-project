import React from 'react'
import { Box, Typography } from '@mui/material'
export default function Conversation({user}) {
  return (
    <Box  className='flex px-4 rounded-md  py-3 hover:bg-gray-100 '>
        <Box className=''>
          <img className='w-10 rounded-full' src={user.picture} alt="dp"   />

        </Box>
        <Box className="border-b border-gray-200">
            <Typography className='pl-3  ' sx={{fontWeight:500}} >{user.name}</Typography>
            
        </Box>
      
    </Box>
  )
}
