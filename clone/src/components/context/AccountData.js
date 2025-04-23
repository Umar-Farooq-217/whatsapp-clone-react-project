import { createContext, useState,useRef, useEffect } from "react";
import { io } from 'socket.io-client'
import React from 'react'

export const AccountContext = createContext(null)
export default function AccountData({children}) {
    const [account,setAccount] = useState(null)
    const [person,setPerson] = useState({})
     const [render , setRender] = useState(false)
    const [activeUsers,setActiveUsers]=useState([])
  const socket = useRef()

  useEffect(() => {
    socket.current = io('ws://localhost:9000');
  
    socket.current.emit('addUsers', account); // <-- Make sure this runs
  }, [account]);
  


  return (
    <AccountContext.Provider value={{
        account,
        setAccount,
        person,
        setPerson,
        socket,
        activeUsers,
        setActiveUsers,
        render,
        setRender
    }}>
      {children}
    </AccountContext.Provider>
  )
}
