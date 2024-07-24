import { useEffect, useState } from "react"
import {Box, Divider, Grid, Stack, Typography} from "@mui/material";
import Navbar from '../NavBar';
import Sidebar from '../SideBar';
import { getAllAnnouncements } from "../../API/Anouncments";
import { getAllQuizesAPI } from "../../API/Quizes";
import  Feed  from "../Feed";

const Dash = () => {

  



      const[allQuizes,setAllQuizes]=useState([]);

      useEffect(()=>{
          async function getAllQuizes(){
            setAllQuizes(await getAllQuizesAPI())}
    
            getAllQuizes();
          },[])


  return (
    <Box   >
      <Navbar/>
      <Sidebar/>
      <Stack bgcolor='#EEEDEB'   sx={{position:'relative', left:'11%' , width:'89%'}} direction="row" spacing={1} >

        
        

        <Feed/>
      </Stack>
    </Box>
  )
}

export default Dash



