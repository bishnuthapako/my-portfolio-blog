import React from 'react'
import { AvatarGroup, Avatar } from '@mui/material'

function AvatarGallery() {
  return (
    <AvatarGroup max={7}>
        <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/47.jpg" />
        <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/women/33.jpg" />
         <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/women/75.jpg" />
         <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/women/76.jpg" />
         <Avatar alt="Bobby Banks" src="https://randomuser.me/api/portraits/men/42.jpg" />
     </AvatarGroup>
  )
}

export default AvatarGallery