import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div id='navbar'>
            <Link to='/'><h1>rainfocus</h1></Link>
            <h4>event planner</h4>
        </div>
    )
}

export default Navbar