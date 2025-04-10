import { Box, styled, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { formatDate } from '../../utils/CommonUtils'
import  { AccountContext } from '../context/AccountData'





const SendMessages =styled(Box)`
    background:#dcf8c6;
    max-width : 60% ;
     padding : 4px ; 
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
    padding : 4px ; 
    width : fit-content ; 
    display : flex ; 
    border-radius : 10px ; 
    word-break : break-word ;
    margin-top : 5px
    `
export default function Message({message }) {
    const { account } = useContext(AccountContext)
  return (
    <Box >
    {
      account.sub === message.senderId ?
      <SendMessages  >
        { message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} /> }
      
    </SendMessages>
    :
    <ReceivedMessages  >
      <Typography sx={{fontSize:20, paddingLeft:1 , paddingTop:'5px', paddingBottom:'5px'}}>{message.text}</Typography>
      <Typography sx={{fontSize:14 , marginLeft:3 ,paddingRight:1, display:'flex',marginTop:'auto', wordBreak:'keep-all', color:'gray'}} >{formatDate(message.createdAt)}</Typography>
    </ReceivedMessages>
    }
    </Box>

    
  )
}
 const ImageMessage = ( {message} ) =>{
  return(
    <>
    {
      message?.text?.includes('.pdf') ?
      <Box>

      </Box>
      :
      <img src={message.text} alt={message.text} style={{width:'300px' , height:'100%', objectFit:'cover'}} />
    }
    </>
  )
 }


  const TextMessage = ({message})=>{
    return(
      <>
      <Typography sx={{fontSize:20, paddingLeft:2 , paddingTop:'5px', paddingBottom:'5px'}}>{message.text}</Typography>
      <Typography sx={{fontSize:14 , marginLeft:3 ,paddingRight:1, display:'flex',marginTop:'auto', wordBreak:'keep-all', color:'gray'}} >{formatDate(message.createdAt)}</Typography>
      </>
    )
  }