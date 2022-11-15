import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { styled } from '@mui/material';



function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    color: "red",
    "&:hover":{
      backgroundColor: "lightBlue",
      color: "secondary"
    }

  })
  return (
    <>
    <div>Welcome to my Blog</div>
    <Stack direction='row' spacing={2} mt='2'>
      <Button variant='contained' startIcon={<PsychologyIcon />} color="success">Submit</Button>
      <Button variant='outlined'>Outlined</Button>
    </Stack>

    {/* <Button variant='contained'>Singup</Button> */}

    <BlueButton>Signup</BlueButton>
    
  
    </>
    

  )
}

export default App