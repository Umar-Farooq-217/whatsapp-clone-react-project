import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Conversation from './Conversation'
import { getUsers } from '../../services/api'

export default function Conversations() {
    const [users, setUsers]= useState([])
    useEffect(()=>{
     const fetchData = async()=>{
        let response = await getUsers()
        setUsers(response)

     }
     fetchData()
    },[])

  return (
    <>
   {
    users.map((user)=>{
        return(
            <Conversation/>
        )
    })
   }
    </>
  )
}
