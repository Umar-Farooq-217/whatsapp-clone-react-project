import { Box, Typography } from '@mui/material'
import React from 'react'
import profile from './../../images/profile.png'
export default function Conversation({user}) {
  return (
    <Box key={user.email} className='flex'>
        <Box className=''><img className='w-12 rounded-full' src={user?.picture || './../../images/profile.png' } alt="dp" />

        </Box>
        <Box>
            <Typography >{user.name}</Typography>
        </Box>
      
    </Box>
  )
}
