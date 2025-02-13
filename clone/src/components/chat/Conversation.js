import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

export default function Conversation({ users }) {
  return (
    <>
    <Box sx={{display:'flex',padding:'5px 3px'}} className='hover:bg-gray-100'>
      <Box className=''>
        <img src={users.picture} alt="dp"  className='rounded-full px-1 py-1' width={60} />
      </Box>
      <Box className='flex-1 pl-3'>
        <Typography>{users.name}</Typography>
      <Divider className='pt-8 border-gray-100'/>

      </Box>
    </Box>
      </>
  )
}
