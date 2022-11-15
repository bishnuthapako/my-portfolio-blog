import React, {useState} from 'react'
import {Tooltip, Fab, Box, Modal, styled, Typography, Avatar, TextField, Stack, Button, ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginButton: "20px"
})

function Add() {
const [open, setOpen]=useState(false)



  return (
    <>
    <Tooltip onClick={()=>setOpen(true)} title="Delete" 
    sx={{
        position: "fixed", 
        bottom: 20, 
        left: {xs: "calc(50% - 25px)", md:30}}}>
         <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
  </Tooltip>
  <StyledModal
  open={open}
  onClose={()=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
     <Typography variant='h6' color="grey" textAlign="center">Create Post</Typography>   
    <UserBox>
    <Avatar 
     src="https://randomuser.me/api/portraits/women/47.jpg"
     sx={{width: 30, height:30}}
     />
     <Typography fontWeight={500} variant="span">Remy Sharp</Typography>
    </UserBox>
    <TextField
          id="standard-multiline-static"
          sx={{width: "100%"}}
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />

        <Stack direction="row" gap={1} mt={2}>
             <EmojiEmotionsIcon color="primary" />
             <ImageIcon color="secondary"/>
             <VideoCameraBackIcon color="success" />
             <PersonAddIcon color="error" />   
        </Stack>
        <ButtonGroup 
        variant="contained" 
        aria-label="outlined primary button group"
        fullWidth
        >
            <Button>Post</Button>
            <Button sx={{width: "100px"}}><DateRangeIcon/></Button>
     </ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add