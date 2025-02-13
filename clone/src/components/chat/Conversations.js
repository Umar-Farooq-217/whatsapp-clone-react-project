import React, { useEffect, useState ,useContext} from 'react'
import Conversation from './Conversation.js'
import { getUsers } from '../../services/api.js'
import {AccountContext} from '../context/AccountData.js'

export default function Conversations() {
  const [account] = useContext(AccountContext)
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

    users.map(user => (
      user.sub !== account.sub
&& <Conversation users={user}    )
    )
   }
    </>
  )
}
