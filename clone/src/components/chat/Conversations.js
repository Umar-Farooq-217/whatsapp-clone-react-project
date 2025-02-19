import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../services/api'
import { Box, Typography } from '@mui/material'
import { AccountContext } from '../context/AccountData'
import Conversation from './Conversation'

export default function Conversations() {
    const [users, setUsers]= useState([])
    const {account} = useContext(AccountContext)

    useEffect(()=>{
        const fetchData = async()=>{
            let response = await getUsers()
            console.log('response fron conversations , ' , response);
            // if (Array.isArray(response)) {
            //     const filteredUsers = response.filter(user => user.sub !== account.sub) 
            //     setUser(filteredUsers)
            // }
                setUsers(response)
            
        } 
        fetchData()
    },[])



  return (
    <div>
      {
        users.map((user)=>(
            <Conversation user={user} />
        )
        
        )
      }
    </div>
  )
}
