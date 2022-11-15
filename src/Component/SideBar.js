import React from 'react'
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeNightIcon from '@mui/icons-material/ModeNight';


function SideBar({mode, setMode}) {
  return (
    <Box 
    flex={1} p={2}
    sx={{display: {xs: "none", sm: "block"}}}>
        <Box position="fixed">
          <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Homepage" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                  <ListItemIcon>
                    <GroupsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Groups" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="People" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                  <ListItemIcon>
                    <ModeNightIcon />
                  </ListItemIcon>
                  <Switch onChange={(e)=>setMode(mode === "light" ? "dark" : "light")}/>
                </ListItemButton>
              </ListItem>
          </List>
        </Box>
      </Box>
  )
}

export default SideBar