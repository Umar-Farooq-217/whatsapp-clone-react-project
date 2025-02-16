import React, { useEffect, useState ,useContext} from 'react'
import Conversation from './Conversation.js'
import { getUsers } from '../../services/api.js'
// import {AccountContext} from '../context/AccountData.js'

export default function Conversations() {
  // const [account] = useContext(AccountContext)
    const [users, setUsers]= useState([])
    useEffect(() => {
      const fetchData = async () => {
        let response = await getUsers();
        
          
    console.log("fetchData response:", response);
    console.log("Type of response:", typeof response);
    // console.log("Is response an array?", Array.isArray(response));

    // setUsers(Array.isArray(response) ? response : []);
        setUsers(response)
        
     
      };
      
      fetchData();
    }, []);

  return (
    <>
   {/* { users.map(user => 
        user.sub !== account.sub && 
        <Conversation key={user.sub} users={user} />
      ) */
      users.map((user)=>{
        return (
          <>
          <Conversation user={user}/>
          </>
        )
      })
      }
      
    </>
  )
}
