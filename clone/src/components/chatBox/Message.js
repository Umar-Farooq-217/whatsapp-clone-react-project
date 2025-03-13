import { Box, styled, Typography } from '@mui/material'
import React from 'react'
const SendMessages =styled(Box)`
    background:#dcf8c6;
    max-width : 60% ;
    margin-left : auto ;
    padding : 8px ; 
    width : fit-content ; 
    display : flex ; 
    border-radius : 10px ; 
    word-break : break-word 
    
    `
const ReceivedMessages =styled(Box)`
    background:#FFFFFF;
    max-width : 60% ;
    margin-left : auto ;
    padding : 8px ; 
    width : fit-content ; 
    display : flex ; 
    border-radius : 10px ; 
    word-break : break-word 
    
    `
export default function Message({message}) {
    
  return (
    <SendMessages >
      <Typography className=''>{message.text}</Typography>
      <Typography>{message.createdAt}</Typography>
    </SendMessages>
  )
}
