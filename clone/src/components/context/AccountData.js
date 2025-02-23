import { createContext, useState } from "react";

import React from 'react'

export const AccountContext = createContext(null)
export default function AccountData({children}) {
    const [account,setAccount] = useState(null)
    const [person,setPerson] = useState({})
  return (
    <AccountContext.Provider value={{
        account,
        setAccount,
        person,
        setPerson
    }}>
      {children}
    </AccountContext.Provider>
  )
}
