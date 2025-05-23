
import { useContext } from 'react';
import { AccountContext } from '../context/AccountData';

import { Box, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Header({person}) {
  const { activeUsers} = useContext(AccountContext)
  return (
    <Box className='bg-gray-100  border-l border-gray-300 flex items-center py-3' sx={{width:'100%'}}>
      <img src={person.picture} alt="dp" className='w-12 rounded-full ml-6' />
      <Box className='ml-3 text-gray-700'>
        <Typography sx={{fontSize:'19px'}}>{person.name}</Typography>
        <Typography sx={{fontSize:'13px'}}>
        {activeUsers.some(user => user.sub === person.sub) ? 'online' : 'offline'}
        </Typography>
      </Box>
      <Box className='flex ml-auto gap-8 mr-6 text-gray-500'>
<SearchIcon sx={{fontSize:'30px'}}/>
<MoreVertIcon sx={{fontSize:'30px'}}/>
      </Box>
    </Box>
  )
}
