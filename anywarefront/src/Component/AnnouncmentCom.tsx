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
            <Box display='flex' justifyContent='start' alignItems='center' flexDirection='row' columnGap='1vw'    sx={{
              bgcolor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent white for the glass effect
              backdropFilter: 'blur(10px)', // Blur effect
              borderRadius: 2, // Rounded corners
              padding: 2, // Padding inside the Box
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
            }}
          >
                <Box sx={{width:'20%'}}>
                
                   <Box display='flex' flex='row' >      <Avatar sx={{width:"30px" ,height:"30px"}} src="https://as2.ftcdn.net/v2/jpg/01/16/20/73/1000_F_116207330_1lS88P3GEoREbiakuFySP9woM4oK1ras.jpg"/> <Typography sx={{fontStyle:'italic' , fontSize:'20px',marginLeft:'10px'}}>{props.announcement.doctor}</Typography> </Box>
                   <Box> <Typography sx={{fontSize:'15px',fontFamily:'serif' , marginLeft:5}}>{props.announcement.event}</Typography> </Box>
                   </Box>
                   <Divider orientation='vertical' flexItem/>
                   <Box sx={{marginLeft:'7%',maxWidth:500}}> <Typography sx={{fontSize:'18px',fontFamily:'serif' }}>{props.announcement.discussion}</Typography> </Box> 

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