import React from 'react'
import logo from "../../../assets/facebook-logo.svg"
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import NotificationsIcon from '@mui/icons-material/Notifications';



import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className='wrapper'>
            <div className='start-icons'>
                <img className="logo" src={logo} alt="Facebook-logo" />
                <SearchIcon className='search' />
            </div>
            <div className='middle-icons'>
                <NavLink to = "/"><HomeIcon color='primary'fontSize='large'/></NavLink>
                <RocketLaunchIcon color='primary' fontSize='large'/>
                <LiveTvIcon color='primary' fontSize='large'/>
            </div>
            <div className='end-icons'>
                <NotificationsIcon className='notifications'/>
                <MapsUgcIcon className='messages'/>
                <ArrowDropDownIcon className='arrow-down'/>
            </div>
        </div>

    )
}

export default Navbar
