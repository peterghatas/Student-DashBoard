import { Home, ModeNight } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AnnouncementIcon from '@mui/icons-material/Announcement';

import React from 'react'

function Sidebar() {
  return (
    <Box   flex={0.3}   sx={{display:{ xs:"none",sm:"block" , height:'95vh' ,width:'50vh' , position:'fixed' ,background:'#758694'}}} >
        
      
       <List >

          <ListItem disablePadding  >


            <ListItemButton component="a" href="#home"        sx={{marginBottom: '10px', '&:hover': { backgroundColor: 'white','& .MuiListItemIcon-root, & .MuiListItemText-root': {color: 'black', },},}} >
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText sx={{marginLeft:'-20px'}}  primary="DashBoard" />
            </ListItemButton>
            </ListItem>

            <ListItem disablePadding   sx={{marginBottom: '10px', '&:hover': { backgroundColor: 'white','& .MuiListItemIcon-root, & .MuiListItemText-root': {color: 'black', },},}} >
            <ListItemButton  component="a" href="#Schadual">
              <ListItemIcon>
                <CalendarMonthIcon/>
              </ListItemIcon>
              <ListItemText sx={{marginLeft:'-20px'}} primary="Schadual" />
            </ListItemButton>

          </ListItem>

          <ListItem disablePadding   sx={{marginBottom: '10px', '&:hover': { backgroundColor: 'white','& .MuiListItemIcon-root, & .MuiListItemText-root': {color: 'black', },},}} >
            <ListItemButton component="a" href="#courses">
              <ListItemIcon>
                <ArticleIcon/>
              </ListItemIcon>
              <ListItemText sx={{marginLeft:'-20px'}} primary="Courses" />
            </ListItemButton>

          </ListItem>

          <ListItem disablePadding   sx={{marginBottom: '10px', '&:hover': { backgroundColor: 'white','& .MuiListItemIcon-root, & .MuiListItemText-root': {color: 'black', },},}} >
            <ListItemButton component="a" href="#gradeBook">
              <ListItemIcon>
                <SchoolIcon/>
              </ListItemIcon>
              <ListItemText sx={{marginLeft:'-20px'}} primary="GradeBook" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding   sx={{marginBottom: '10px', '&:hover': { backgroundColor: 'white','& .MuiListItemIcon-root, & .MuiListItemText-root': {color: 'black', },},}} >
            <ListItemButton component="a" href="#preformance">
              <ListItemIcon>
                <TrendingUpIcon/>
              </ListItemIcon>
              <ListItemText sx={{marginLeft:'-20px'}} primary="Preformance" />
            </ListItemButton>

          </ListItem>

          <ListItem disablePadding   sx={{marginBottom: '10px', '&:hover': { backgroundColor: 'white','& .MuiListItemIcon-root, & .MuiListItemText-root': {color: 'black', },},}} >
            <ListItemButton component="a" href="#Announcement">
              <ListItemIcon>
                <AnnouncementIcon/>
              </ListItemIcon>
              <ListItemText sx={{marginLeft:'-20px'}} primary="Announcement" />
            </ListItemButton>

          </ListItem>

       </List>
       </Box>
       
  )
}

export default Sidebar