import { createContext, useState } from "react";

import React from 'react'

export const AccountContext = createContext(null)
export default function AccountData({children}) {
    const [account,setAccount] = useState(null)
  return (
    <AccountContext.Provider value={{
        account,
        setAccount
    }}>
      {children}
    </AccountContext.Provider>
  )
}
