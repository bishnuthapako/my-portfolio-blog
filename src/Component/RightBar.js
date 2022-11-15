import React from 'react'
import { Box, Typography} from '@mui/material'
import AvatarGallery from './AvatarGallery'
import ImageGallery from './ImageGallery'
import Conversation from './Conversation'

function RightBar() {
  return (
    <Box flex={2} 
    sx={{display: {xs: "none", sm: "block"}}}
    p={2}>
      <Box position="fixed" width={400}>
            <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
                     <AvatarGallery /> 
            <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Images</Typography> 
                     <ImageGallery /> 
            <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversations</Typography> 
            <Conversation />

        </Box>
    </Box>
  )
}

export default RightBar