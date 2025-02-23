import { Box, Typography } from '@mui/material'
import React from 'react'
import { emptyProfilePicture } from '../../constants/Constants'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Header() {
  return (
    <Box className='bg-[#F0F2F5] h-[67px] border-l border-gray-300 flex items-center' sx={{width:'100%'}}>
      <img src={emptyProfilePicture} alt="dp" className='w-12 rounded-full ml-6' />
      <Box className=' '>
        <Typography>Name</Typography>
        <Typography>Offline</Typography>
      </Box>
      <Box className='flex ml-auto'>
<SearchIcon/>
<MoreVertIcon/>
      </Box>
    </Box>
  )
}
