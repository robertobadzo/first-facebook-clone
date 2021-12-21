import React from 'react'
import Feed from './Feed/Feed'
import Navbar from './Navbar/Navbar'
import Sidebar from './SideBar/Sidebar'

function Homepage() {
    return (
        <div>
            <Navbar />
            <Feed />
            <Sidebar />
        </div>
    )
}

export default Homepage
