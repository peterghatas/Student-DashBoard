import React, { useEffect, useState } from "react";
import App from '../../../src/App';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import LanguageSelector from "../LanguageSelector";

const StyledToolbar = styled(Toolbar)({

    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"#758694",
});


const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

const Search = styled("div") (({theme}) =>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%",

}));

const Icons = styled(Box) (({theme}) =>({
    display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }

}));

const UserBox = styled(Box)(({theme})=>({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}));
const Navbar =()=>{
    const[open,setOpen] = useState(false)



    return(
        <AppBar position="sticky">
            <StyledToolbar>
            <Typography variant="h6"  sx={{display:{xs:"none",sm:"block",fontWeight:'bold'}}}>
                Student Dashboard
                </Typography>
                {/* <Pets sx={{display:{xs:"block",sm:"none"}}}></Pets> */}
                
 
                <UserBox >
                <Avatar sx={{width:"30px" ,height:"30px"}} onClick={e=>setOpen(true)}/>
                <Typography>Welcom</Typography>

                </UserBox>
                <LanguageSelector/>
                

                </StyledToolbar> 
          
        </AppBar>
    )
}
export default Navbar