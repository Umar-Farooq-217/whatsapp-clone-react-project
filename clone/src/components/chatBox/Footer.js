import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import MoodIcon from '@mui/icons-material/Mood';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { uploadFile } from '../../services/api';
export default function Footer({ sendText, setValue, value , file , setFile }) {
useEffect(()=>{
  const getImage = async()=>{
    if(file){
      const data = new FormData();
      data.append('fileName', file.name)
      data.append('file',file)

      await uploadFile(data)
    }
  }
  getImage()
},[file])
 const fileHandler= (e)=>{
  setFile(e.target.files[0])
  setValue(e.target.files[0].name)
  
 }


  return (
    <Box className=''>
      <Box className='flex  text-gray-600 items-center bg-gray-100 px-6 h-[63px] w-full'>
        <MoodIcon sx={{ fontSize: '30px' }} />
        <label htmlFor="fileInput">
        <AttachFileIcon sx={{ fontSize: '30px', transform: 'rotate(225deg)', marginLeft: '19px' }} />
        </label>
        <input type="file" className='hidden' id="fileInput" onChange={(e)=>fileHandler(e)}  />
        <input type="text" placeholder='Type a message' className='text-[20px] border border-gray-200 py-[5px] rounded-md flex-1 mx-5 pl-6 outline-none' onKeyDown={(e) => sendText(e)} onChange={(e) => setValue(e.target.value)} value={value} />
        <MicIcon sx={{ fontSize: '30px' }} />
      </Box></Box>
  )
}
