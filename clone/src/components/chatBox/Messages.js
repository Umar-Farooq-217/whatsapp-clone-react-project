import { Box, styled } from '@mui/material'
import React, { useContext, useEffect, useState} from 'react'
import { messagesBackground } from '../../constants/Constants'
import Footer from './Footer'
import Header from './Header'
import { AccountContext } from '../context/AccountData'
import { getMessage, newMessage } from '../../services/api'
import Message from './Message'


const Container = styled(Box)`
padding: 1px 70px;
`
export default function Messages({ person, conversation }) {
  

  const { account , socket , render , setRender } = useContext(AccountContext)
  const [value, setValue] = useState('')
  const [message, setMessage] = useState([])
  // const [render , setRender] = useState(false)
  const [file , setFile] = useState()
  const [image ,setImage]= useState('')
  const [incomingMessage , setIncomingMessage] = useState(null)

useEffect(()=>{
  socket.current.on('getMessage',data =>{
setIncomingMessage({
  ...data , 
  createdAt : Date.now()
})
  })
},[socket])

  useEffect(() => {

    const getMessageDetails = async () => {
      let data = await getMessage(conversation._id)
      setMessage(data)

    }
    conversation._id && getMessageDetails()
  }, [conversation._id, person._id , render])

  useEffect(()=>{
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
    setMessage(prev =>[...prev,incomingMessage])
  },[incomingMessage,conversation])



  const sendText = async (e) => {

    const code = e.keyCode || e.which;


    if (code === 13) {
      let message = {}
      if(!file){
     message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: 'text',
        text: value
      }
    } else{
      message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: 'file',
        text: image
    }
  }
      socket.current.emit('sendMessage',message)    


      await newMessage(message)
    
      setValue('')
      setFile(null)
      setImage('')
      setRender(prev => !prev)



    }

  }

   


  return (
    <Box className='h-full flex flex-col '>
      <Header person={person} />
      <Box className='w-full h-[100%] overflow-y-auto flex-1 bg-contain bg-[50%] pb-2' style={{ backgroundImage: `url(${messagesBackground})` }}>
        {
          message && message.map(message => (
            <Container key={message._id} >
              <Message message={message} />
           
            </Container>

          ))
        }
      </Box>
      <Footer
       sendText={sendText}
        setValue={setValue}
         value={value}
         file={file}
         setFile={setFile}
         setImage={setImage}
         />
    </Box>
  )
}
