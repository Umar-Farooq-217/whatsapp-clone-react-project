import { Box, styled, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { formatDate } from '../../utils/CommonUtils'
import  { AccountContext } from '../context/AccountData'





const SendMessages =styled(Box)`
    background:#dcf8c6;
    max-width : 60% ;
    margin-left : auto ;
    width : fit-content ; 
    display : flex ; 
    border-radius : 10px ; 
    word-break : break-word ;
    margin-top: 8px
    
    `
const ReceivedMessages =styled(Box)`
    background:#FFFFFF;
    max-width : 60% ;
    padding : 8px ; 
    width : fit-content ; 
    display : flex ; 
    border-radius : 10px ; 
    word-break : break-word 
    `
export default function Message({message}) {
    const { account } = useContext(AccountContext)
  return (
    <>
    {
      account.sub === message.senderId ?
      <SendMessages >
      <Typography sx={{fontSize:20, paddingLeft:2 , paddingTop:'5px', paddingBottom:'5px'}}>{message.text}</Typography>
      <Typography sx={{fontSize:14 , marginLeft:3 ,paddingRight:1, display:'flex',marginTop:'auto', wordBreak:'keep-all', color:'gray'}} >{formatDate(message.createdAt)}</Typography>
    </SendMessages>
    :
    <ReceivedMessages >
      <Typography sx={{fontSize:20, paddingLeft:1 , paddingTop:'5px', paddingBottom:'5px'}}>{message.text}</Typography>
      <Typography sx={{fontSize:14 , marginLeft:3 ,paddingRight:1, display:'flex',marginTop:'auto', wordBreak:'keep-all', color:'gray'}} >{formatDate(message.createdAt)}</Typography>
    </ReceivedMessages>
    }
    </>

    
  )
}
