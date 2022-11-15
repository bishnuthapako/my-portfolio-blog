import React, {useState} from 'react'
import SideBar from './SideBar'
import Feed from './Feed'
import RighBar from './RightBar'
import {Box, Stack, createTheme, ThemeProvider} from '@mui/material'
import NavBar from './NavBar';
import Add from './Add';



function App() {
  const [mode, setMode]=useState("light")
const darkTheme = createTheme({
  palette:{
    mode: mode,
  },
});


  return (<>
<ThemeProvider theme={darkTheme}>

  <Box bgcolor={"background.default"} color={"text.primary"}>
    <NavBar />
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <SideBar setMode={setMode} mode={mode} />
      <Feed />
      <RighBar />
    </Stack>
    <Add />
  </Box>
</ThemeProvider>
  
  </>)
}

export default App