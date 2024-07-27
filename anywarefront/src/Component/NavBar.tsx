import React, { useEffect, useState } from "react";
import App from "../App";
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import { verifyTokenAPI } from "../API/UserLogin";

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



    //useState and useEffect for user name

  const[username,setUsername]=useState('');
  useEffect(()=>{
      async function getUsername(){
        setUsername((await verifyTokenAPI()).name)
      }

      if(localStorage.length != 0)
          getUsername();
      },[])
    return(
        <AppBar position="sticky">
            <StyledToolbar>
              
            <Typography  variant="h6" sx={{display:{xs:"none",sm:"block"}}}>
            Welcom {username}
                </Typography> 
                <Typography sx={{display:{xs:"block",sm:"none"}}}>{username}</Typography>
                <Search><InputBase placeholder="Search..."/></Search>
                <Icons>
                    
                <Badge badgeContent={4} color="error" >
                    <Mail />
                </Badge>

                <Badge badgeContent={4} color="error">
                    <Notifications />
                </Badge>

                <Avatar sx={{width:"30px" ,height:"30px"}}  onClick={e=>setOpen(true)} src="https://as2.ftcdn.net/v2/jpg/01/16/20/73/1000_F_116207330_1lS88P3GEoREbiakuFySP9woM4oK1ras.jpg"/>

                </Icons>
                <UserBox >
                <Avatar sx={{width:"30px" ,height:"30px"}} onClick={e=>setOpen(true)} src="https://as2.ftcdn.net/v2/jpg/01/16/20/73/1000_F_116207330_1lS88P3GEoREbiakuFySP9woM4oK1ras.jpg"/>
                <Typography>{username}</Typography>

                </UserBox>

                </StyledToolbar> 
                <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={(e)=>setOpen(false)}

        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem onClick={handleLogout} >Logout</MenuItem>
      </Menu>           
        </AppBar>
    )
}
export default Navbar