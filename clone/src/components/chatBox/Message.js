import { Box, styled, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { formatDate , downloadMedia } from '../../utils/CommonUtils'
import { AccountContext } from '../context/AccountData'
import GetAppIcon from '@mui/icons-material/GetApp';
import { iconPDF} from '../../constants/Constants'



const SendMessages = styled(Box)`
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
const ReceivedMessages = styled(Box)`
    background:#FFFFFF;
    max-width : 60% ;
    padding : 4px ; 
    width : fit-content ; 
    display : flex ; 
    border-radius : 10px ; 
    word-break : break-word ;
    margin-top : 5px
    `
export default function Message({ message }) {
  const { account } = useContext(AccountContext)
  return (
    <Box >
      {
        account.sub === message.senderId ?
          <SendMessages  >
            {message.type === 'file' ?


              <ImageMessage message={message} />
              :
              <TextMessage message={message} />
              }

          </SendMessages>
          :
          <ReceivedMessages  >
           {message.type === 'file' ?


<ImageMessage message={message} />
:
<TextMessage message={message} />
}
          </ReceivedMessages>
      }
    </Box>


  )
}
const ImageMessage = ({ message }) => {
  return (
    <Box sx={{}}>
      {
        message?.text?.includes('.pdf') ?
          <Box sx={{display:'flex',position:'relative'}}>
 <img src={iconPDF} alt='pdf' style={{ width: '100px' }} />
 <Box>
 <Typography sx={{fontSize:'17px',wordBreak:'keep-all',paddingTop:1,paddingRight:2}}>{message.text.split('/').pop()}</Typography>
 <Box sx={{ fontSize: 17, marginLeft: 3, paddingRight: 1,  marginTop: 'auto', wordBreak: 'keep-all', color: 'gray',position:'absolute',bottom:2 , right:0 }} >
              <GetAppIcon
              onClick={(e)=>downloadMedia(e,message.text)}
                style={{ marginRight: 10, border: '1px solid gray', borderRadius: '50%', padding: 1, fontSize:'30px' }} />
              {formatDate(message.createdAt)}</Box>
              </Box>
          </Box>
          :
         <Box sx={{position:'relative'}}>
            <img src={message.text} alt={message.text} style={{ width: '300px', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
            <Box sx={{ fontSize: 14, marginLeft: 3, paddingRight: 1, display: 'flex', marginTop: 'auto', wordBreak: 'keep-all', color: 'gray',position:'absolute' , bottom:0 , right:2 }} >
              <GetAppIcon
               onClick={(e)=>downloadMedia(e,message.text)}
                style={{ marginRight: 10, border: '1px solid gray', borderRadius: '50%', padding: 1, fontSize:'30px', marginBottom:4 }} />
              {formatDate(message.createdAt)}</Box>
            </Box>
      }
      

    </Box>
  )
}


const TextMessage = ({ message }) => {
  return (
    <>
      <Typography sx={{ fontSize: 20, paddingLeft: 2, paddingTop: '5px', paddingBottom: '5px' }}>{message.text}</Typography>
      <Typography sx={{ fontSize: 14, marginLeft: 3, paddingRight: 1, display: 'flex', marginTop: 'auto', wordBreak: 'keep-all', color: 'gray' }} >{formatDate(message.createdAt)}</Typography>
    </>
  )
}