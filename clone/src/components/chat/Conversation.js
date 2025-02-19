import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Conversation({user}) {
  return (
    <Box className='flex'>
        <Box className=''><img className='w-12 rounded-full' src={user.picture} alt="dp" />

        </Box>
        <Box>
            <Typography >{user.name}</Typography>
        </Box>
      
    </Box>
  )
}
