import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/">
                    Home
                </NavLink>
            </nav>
        </div>
    )
}

export default Navbar
