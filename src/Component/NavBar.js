import React, {useState} from 'react'
import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material' 
import NotificationsIcon from '@mui/icons-material/Notifications';import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import { Box } from '@mui/system';
import MailIcon from '@mui/icons-material/Mail';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})


const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))
const Icons = styled(Box)(({theme})=>({
   display: "none",
   gap: "20px",
   alignItems: "center",
   [theme.breakpoints.up("sm")]:{
    display: "flex"
   }
  
}))
const UserBox = styled(Box)(({theme})=>({
   display: "flex",
   gap: "10px",
   alignItems: "center",
   [theme.breakpoints.up("sm")]:{
    display: "none"
   }
  
}))

function NavBar() {

    const [open, setOpen]=useState(false)

  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display: {xs: "none", sm: "block"}}}>Social Media</Typography>
            <DeviceHubIcon sx={{display: {xs: "block", sm: "none"}}} />
            <Search><InputBase placeholder='Search' /></Search>
            <Icons>
                <Badge badgeContent={4} color="secondary"><MailIcon color="error" /></Badge>
                <Badge badgeContent={4} color="secondary"><NotificationsIcon /></Badge>
                <Avatar 
                sx={{width: 30, height: 30}} 
                onClick={()=>setOpen(true)}
                src="https://randomuser.me/api/portraits/women/59.jpg"
                />
            </Icons>
                <UserBox onClick={()=>setOpen(true)}>
                        <Avatar sx={{width: 30, height: 30}} src="https://randomuser.me/api/portraits/women/59.jpg"/>
                        <Typography variant='span'>Bishnu</Typography>
                </UserBox>
        </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>
  )
}

export default NavBar