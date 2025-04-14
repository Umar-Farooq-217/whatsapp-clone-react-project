import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../services/api'
// import { Box, Typography } from '@mui/material'
import { AccountContext } from '../context/AccountData'
import Conversation from './Conversation'
import { Box } from '@mui/material'

export default function Conversations({text}) {
    const [users, setUsers]= useState([])
    const {account , socket,setActiveUsers} = useContext(AccountContext)

    useEffect(()=>{
        const fetchData = async()=>{
            let response = await getUsers()
           
       let filteredRespose = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
            
                setUsers(filteredRespose)
            
        } 
        fetchData()
    },[text])

    useEffect(() => {
      if (account) {
        socket.current.emit('addUsers', account);
    
        socket.current.on('getUsers', (onlineUsers) => {
          setActiveUsers(onlineUsers);
        });
      }
    }, [account, socket, setActiveUsers]);
    

  return (
    <Box sx={{height:'100%'  , overflowY:'auto'}}>
      {
        users.map(user => (
    user.sub !== account.sub &&
          <Conversation user={user} />
        )
        
        
        )
      }
    </Box>
  )
}
