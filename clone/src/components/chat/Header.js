import { Box } from '@mui/material'
import React, { useContext,useState} from 'react'
import { AccountContext } from '../context/AccountData'
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from './HeaderMenu';
import MyDrawer from './MyDrawer';
export default function Header() {
    const { account } = useContext(AccountContext)
    const [openDrawer,setOpenDrawer] = useState(false)
   
    
    return (
        <>
            <Box className='flex justify-between items-center bg-gray-100 py-2 px-2'>
                <Box>
                    <img src={account.picture} alt="dp" onClick={()=>setOpenDrawer(true)} className='w-[50px] h-[50px] ml-2 rounded-full' />

                </Box>
                <Box className='flex items-center gap-4'>
                    <Box>

                        <svg className='mr-[5px]' viewBox="0 0 24 24" height="25" width="25" preserveAspectRatio="xMidYMid meet"  fill="gray"><title>status</title><circle cx="12" cy="12" r="6" fill="currentColor"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 12.9267 19.8424 13.8166 19.5526 14.6444C19.3824 15.1305 19.5352 15.6866 19.9709 15.9613C20.4736 16.2782 21.1446 16.0964 21.3551 15.5406C21.7719 14.44 22 13.2466 22 12C22 7.15998 18.5615 3.12307 13.9941 2.19883C13.4118 2.08101 12.9 2.55153 12.9 3.14558C12.9 3.66061 13.2896 4.08652 13.7916 4.20139C17.3473 5.0149 20 8.19767 20 12ZM12 20C14.2014 20 16.1951 19.1108 17.6416 17.672C18.0063 17.3094 18.5733 17.208 19.0083 17.4823C19.5115 17.7995 19.6362 18.4841 19.2249 18.9138C17.4045 20.8156 14.8406 22 12 22C9.13243 22 6.54677 20.793 4.72334 18.8594C4.31526 18.4266 4.44515 17.7429 4.95068 17.4295C5.38777 17.1585 5.95401 17.2641 6.31591 17.6295C7.76573 19.0933 9.77697 20 12 20ZM3.9996 15.9013C4.43726 15.63 4.59424 15.075 4.42776 14.5877C4.15046 13.776 4 12.9056 4 12C4 8.19767 6.65269 5.0149 10.2084 4.20139C10.7104 4.08652 11.1 3.66061 11.1 3.14558C11.1 2.55153 10.5882 2.08101 10.0059 2.19883C5.4385 3.12307 2 7.15998 2 12C2 13.2201 2.21851 14.3892 2.61853 15.4702C2.82479 16.0276 3.49447 16.2145 3.9996 15.9013ZM12.0438 2.00009L12 2L11.9562 2.00009H12.0438Z" fill="currentColor"></path></svg>
                    </Box>

                    <Box>
                        <ChatIcon sx={{width:'27px'}} />
                    </Box>
                   <HeaderMenu  setOpenDrawer={setOpenDrawer} />
                </Box>
            </Box>
            <MyDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}
