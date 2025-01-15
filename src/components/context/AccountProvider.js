import React, { createContext, useState } from 'react'


export const AccountContext  =  createContext(null)

export default function accountProvider({children}) {
const [account,setAccount] = useState('');
  return (
    <div>
      <AccountContext.Provider value={{
        account,
        setAccount
      }}>{children}</AccountContext.Provider>
    </div>
  )
}
