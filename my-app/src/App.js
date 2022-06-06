import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar';
import AddPhoto from './components/AddPhoto';
import { Stack,Box, createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';

function App() {

const [mode,setMode] = useState('light')

const darkTheme = createTheme({
  palette:{
    mode:mode

  }

})

  return(

    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between"> 
          <Sidebar mode={mode} setMode={setMode}/>
          <Feed/>
          <Rightbar/>
        </Stack>
        <AddPhoto />
      </Box>
    </ThemeProvider>
  );
}

export default App;
