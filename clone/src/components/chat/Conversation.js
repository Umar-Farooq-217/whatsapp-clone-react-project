import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Conversation({ users }) {
  return (
    <Box>
      <Box>
        <img src={users.picture} alt="dp" />
      </Box>
      <Box>
        <Typography>{users.name}</Typography>

      </Box>
      
    </Box>
  )
}
