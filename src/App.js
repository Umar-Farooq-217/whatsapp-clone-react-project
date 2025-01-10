import { AppBar, Box, styled, Toolbar } from '@mui/material';
import './App.css';


const Header = styled(AppBar)`
height:200px;
background:green;
`
function App() {
  return (
   <>
   <Header>
    <Toolbar>

    </Toolbar>
   </Header>

   </>
  );
}

export default App;
