import { Box } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <Box className='bg-gray-100 m-2 rounded-2xl  '>

<SearchIcon className='text-gray-400  text-[16px] p-[1px] ml-4'/>
<input type="text" placeholder='Search or start new chat' className='bg-gray-100 outline-none text-lg
 font-semibold py-1 ml-7 '  />
            </Box>
  )
}
