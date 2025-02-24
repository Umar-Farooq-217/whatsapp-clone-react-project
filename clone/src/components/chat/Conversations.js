import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../services/api'
// import { Box, Typography } from '@mui/material'
import { AccountContext } from '../context/AccountData'
import Conversation from './Conversation'
import { Box } from '@mui/material'

export default function Conversations({text}) {
    const [users, setUsers]= useState([])
    const {account} = useContext(AccountContext)

    useEffect(()=>{
        const fetchData = async()=>{
            let response = await getUsers()
       let filteredRespose = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
            
                setUsers(filteredRespose)
            
        } 
        fetchData()
    },[text])



  return (
    <Box sx={{height:'79vh'  , overflowY:'auto'}}>
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
