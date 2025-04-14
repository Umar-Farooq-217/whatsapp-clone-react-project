import { createContext, useState,useRef, useEffect } from "react";
import { io } from 'socket.io-client'
import React from 'react'

export const AccountContext = createContext(null)
export default function AccountData({children}) {
    const [account,setAccount] = useState(null)
    const [person,setPerson] = useState({})
    const [activeUsers,setActiveUsers]=useState([])
  const socket = useRef()

  useEffect(()=>{
    socket.current = io('ws://localhost:9000')
  },[])


  return (
    <AccountContext.Provider value={{
        account,
        setAccount,
        person,
        setPerson,
        socket,
        activeUsers,
        setActiveUsers
    }}>
      {children}
    </AccountContext.Provider>
  )
}
