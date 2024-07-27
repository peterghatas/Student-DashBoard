import { useEffect, useState } from "react"
import {Box, Divider, Grid, Stack, Typography} from "@mui/material";
import Navbar from '../NavBar';
import Sidebar from '../SideBar';
import  Feed  from "../Feed";


const Dash = () => {




  return (
    <Box   >
      <Navbar/>
      <Sidebar/>
      <Box  sx={{display:{xs:"none",sm:"block"}}}>

      <Stack bgcolor='#EEEDEB'   sx={{position:'relative', left:'11%' , width:{xs:'100%',sm:'89%'}}} direction="row" spacing={1} >

        
        

        <Feed/>
      </Stack>
      </Box>

      <Box bgcolor='#EEEDEB' sx={{display:{xs:"block",sm:"none"}}}>

      <Stack bgcolor='#EEEDEB'   sx={{position:'relative' , width:{xs:'100%',sm:'89%'}}} direction="column" spacing={1} >

     
        <Feed/>

      </Stack>


      </Box>
    </Box>
  )
}

export default Dash



