import React, { useEffect, useState } from 'react'
// import Conversation from './Conversation.js'
import { getUsers } from '../../services/api.js'
import { Box,Typography,Divider } from '@mui/material';
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
           <Box sx={{display:'flex',padding:'5px 3px'}} className='hover:bg-gray-100'>
      <Box className=''>
        <img src={user.picture} alt="dp"  className='rounded-full px-1 py-1' width={60} />
      </Box>
      <Box className='flex-1 pl-3'>
        <Typography>{user.name}</Typography>
      <Divider className='pt-8 border-gray-100'/>

      </Box>
    </Box>
    
          {/* <Conversation user={user}/> */}
          </>
        )
      })
      }
      
    </>
  )
}
