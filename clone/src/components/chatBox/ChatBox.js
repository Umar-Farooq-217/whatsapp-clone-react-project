import React, { useContext } from 'react'
import Header from './Header'
import Messages from './Messages'
import Footer from './Footer'
import { Box } from '@mui/material'
import { AccountContext } from '../context/AccountData'

export default function ChatBox() {
  const {person} = useContext(AccountContext)
  return (
    <Box sx={{width:'100%'}} >
      <Header person={person} />
      <Messages/>
      <Footer/>
    </Box>
  )
}
