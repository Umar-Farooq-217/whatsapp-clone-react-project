import { Box } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <Box className='bg-gray-100 m-2 rounded-xl  '>

<SearchIcon className='text-gray-400  text-[10px] p-[1px] ml-4'/>
<input type="text" placeholder='Search or start new chat' className='bg-gray-100 outline-none text-sm
 font-semibold  p-[5px] ml-7 '  />
            </Box>
  )
}
