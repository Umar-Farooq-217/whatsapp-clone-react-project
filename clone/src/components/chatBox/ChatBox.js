import React from 'react'
import Header from './Header'
import Messages from './Messages'
import Footer from './Footer'
import { Box } from '@mui/material'

export default function ChatBox() {
  return (
    <Box sx={{width:'100%'}} >
      <Header/>
      <Messages/>
      <Footer/>
    </Box>
  )
}
