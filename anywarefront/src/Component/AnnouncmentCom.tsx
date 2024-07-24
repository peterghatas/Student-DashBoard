import { Avatar, Box, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllAnnouncements } from '../API/Anouncments'

function AnnouncmentCom() {

    const[allAnnouncements,setAllAnnouncements]=useState([]);

  useEffect(()=>{
      async function getAnnouncements(){
        setAllAnnouncements(await getAllAnnouncements())}

      getAnnouncements();
      },[])

      const Announ = (props:any) => {
        return(
            <Box display='flex' justifyContent='start' alignItems='center' flexDirection='row' columnGap='1vw' >
                <Box sx={{width:'30%'}}>
                
                   <Box display='flex' flex='row' >      <Avatar sx={{width:"30px" ,height:"30px"}}/> <Typography sx={{fontStyle:'italic' , fontSize:'20px',marginLeft:'10px'}}>{props.announcement.doctor}</Typography> </Box>
                   <Box> <Typography sx={{fontSize:'15px'}}>{props.announcement.event}</Typography> </Box>
                   </Box>
                   <Divider orientation='vertical' flexItem/>
                   <Box sx={{marginLeft:'1%'}}> {props.announcement.discussion} </Box> 

                     </Box>
        )
      }


  return (

    
         <Box    display='flex' flexDirection='column' rowGap='2vh' padding='10px' sx={{overflowY:'auto' ,maxHeight:'300px' }}>

        <Typography variant='h4' sx={{fontFamily:'serif'}}  >Announcements</Typography>

              {allAnnouncements.map((announcement: any)=>
                <Announ announcement={announcement} key={announcement.id} />
                )}       
        </Box>
  )
}

export default AnnouncmentCom