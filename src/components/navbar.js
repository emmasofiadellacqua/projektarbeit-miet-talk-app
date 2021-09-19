import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
    <div className="nav_div">
    <BottomNavigation className="navbar" style={{ background: '#EBF3FA',height: '70px' }}>
    <Link to="/messaging"><BottomNavigationAction label="Nachrichten" icon={<EmailOutlinedIcon  style={{height: '35px',width: "auto",color:"#71A0FF"}}/>} /></Link>
    <Link to="/"><BottomNavigationAction label="Home" icon={<HomeOutlinedIcon style={{height: '35px',width: "auto",color:"#71A0FF"}}/>} /></Link>
    <Link to="/profile"><BottomNavigationAction label="Profile" icon={<AccountCircleOutlinedIcon style={{height: '35px',width: "auto",color:"#71A0FF"}}/>} /></Link>
  </BottomNavigation>
  </div>
  )
}

export default Navbar;