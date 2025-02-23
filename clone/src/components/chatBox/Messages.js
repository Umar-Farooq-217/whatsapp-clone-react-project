import { Box } from '@mui/material'
import React from 'react'
import { messagesBackground } from '../../constants/Constants'
export default function Messages() {
  
  return (
    <Box className='w-full h-[78vh] overflow-y-auto  bg-contain bg-[50%]'   style={{backgroundImage:`url(${messagesBackground})`}}>
     
    </Box>
  )
}
