import { AppBar, Box, Dialog, Toolbar } from '@mui/material'
import React from 'react'
import Header from './Header'
import SearchIcon from '@mui/icons-material/Search';
import EmptyChat from '../emptyChat/EmptyChat'

const dialogStyle = {
  height: "100%",
  width: '100%',
  marginTop: '15px',
  marginLeft: '15px',
  marginRight: '15px',
  display: 'flex'


}
export default function Chat() {


  return (
    <Box>
      <AppBar sx={{ backgroundColor: '#00A783', height: '125px' }}>
        <Toolbar>

        </Toolbar>
      </AppBar>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true} maxWidth={false}>
        <Box className='flex max-w-[1500px]'>
          <Box className='min-w-[400px]'>
            <Header />
            <Box className='bg-gray-100 m-2 rounded-xl  '>
<SearchIcon className='text-gray-400  text-[10px] p-[1px] ml-4'/>
<input type="text" placeholder='Search or start new chat' className='bg-gray-100 outline-none text-sm
 font-semibold  p-[5px] ml-7 '  />
            </Box>
        
          </Box>
          <EmptyChat />
        </Box>
      </Dialog>

    </Box>
  )
}
