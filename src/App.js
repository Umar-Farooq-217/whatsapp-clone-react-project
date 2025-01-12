import { AppBar, styled, Box, Typography } from '@mui/material';
import './App.css';
import whatsapp from './images/whatsapp.svg'
import LoginDetails from './components/account/loginDetails/LoginDetails';


const Header = styled(AppBar)`
height:200px;
background:#25D366;
`
function App() {
  return (
   <>
   <Header>
    <Box className='flex justify-start items-center pl-20 pt-6'>
      <img src={whatsapp} className='' width={30} height={30} alt='whatsapp pic'/>
      <Typography className='font-bold text-3xl pl-4'>Web Whatsapp</Typography>
    </Box>
    <LoginDetails/>
   </Header>

   </>
  );
}

export default App;
