import { AppBar, Box, Dialog, Toolbar } from '@mui/material'
import React from 'react'
import Header from './Header'
import EmptyChat from '../emptyChat/EmptyChat'
import Conversations from './Conversations';
import Search from './Search';

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
        <Box className='flex max-w-[2000px]'>
          <Box className='min-w-[400px]'>
            <Header />
            <Search/>
        <Conversations/>
          </Box>
          <EmptyChat />
        </Box>
      </Dialog>

    </Box>
  )
}
