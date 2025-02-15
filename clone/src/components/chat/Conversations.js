import React, { useEffect, useState ,useContext} from 'react'
import Conversation from './Conversation.js'
import { getUsers } from '../../services/api.js'
import {AccountContext} from '../context/AccountData.js'

export default function Conversations() {
  const [account] = useContext(AccountContext)
    const [users, setUsers]= useState([])
    useEffect(() => {
      const fetchData = async () => {
        let response = await getUsers();
        
        console.log("fetchData response:", response);
        console.log("Type of response:", typeof response);
        
        // Ensure response is an array
        setUsers(Array.isArray(response) ? response : []);
      };
      
      fetchData();
    }, []);

  return (
    <>
   {Array.isArray(users) && users.map(user => 
        user.sub !== account.sub && <Conversation key={user.sub} users={user} />
      )}
    </>
  )
}
