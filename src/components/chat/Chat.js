import { Box, Dialog, styled } from '@mui/material'
import React from 'react'

export default function Chat() {
  const Component = styled(Dialog)`
  
  background-color: #00A884;
  height:150px;
  width:100%

  `
  // const mainBox = {
  //   minHeight:'100%',
  //   display:'flex',

  // }
  
  return (
    <>
    <main>
    <Component open={true} hideBackdrop={true} maxWidth={false} fullWidth={true}>
      <mainBox PaperProps={{sx:mainBox}} >

      <Box>
        left Box 
      </Box>
      <Box>
Right Box
      </Box></mainBox>
    </Component>
     
    </main></>
  )
}
