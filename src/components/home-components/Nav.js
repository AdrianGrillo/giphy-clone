import React from 'react'
import SearchBar from './SearchBar'
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom'
import { FaEllipsisV, FaUserAlt } from 'react-icons/fa'

const styles = {
    logo: {
        width: '180px',
        height: '60px'
    },
    loginText: {
        position: 'relative',
        right: '8px'
    }
}

export default function Nav() {
    return (
        <div className='container'>
            <Router>
                <nav className='nav-container'>
                    
                    <Link to='/Home'><img style={styles.logo} src='https://ucf049a176d887e50c1ceef7a69c.previews.dropboxusercontent.com/p/thumb/AA7P8X2J_zBnT0B4hkjabAU_ySjYotV9sxPe9xDwULSut9Nz7mdYgKUbBxYG7FRsyk0T-GIuEbsx2s5Y1oRF1y8fdNnEK90s0bDUYwsS5r6QrQBWZZuw72w08FH8JkP_m6AfM3wEzyVlhZxkWH4zJbXB-iqX3kN6_HdPilD2zMslRfk-aEEvlWzkBkXWB2-vE-EzMzWefUvp0dY3Wutj7g9nqJ8p7u6XFJFBWovD0SyQwzXAHQGWOEt_7WqwcKHMtHYRXzBeFEWdVCaBJDR99b2WgGMPg4XSBD60YTlUBeLG_jKc4Q5Wa8AsOEG2y2INsJH7M-9Hzo5oZOonGflp-BSrS7COybpAMc1_0LG8XXcjbg/p.png?fv_content=true&size_mode=5' alt='GIPHY logo' /></Link>
                    
                    <ul className='row'>
                        <li>
                            <NavLink 
                                to='/Reactions' 
                                className='nav-link nav-link-hover'>
                                Reactions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/Entertainment' 
                                className='nav-link nav-link-hover'>
                                Entertainment
                            </NavLink>
                        </li>
                        <li>
                        <NavLink 
                            to='/Sports' 
                            className='nav-link nav-link-hover'>
                            Sports
                        </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/Stickers' 
                                className='nav-link nav-link-hover'>
                                Stickers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/Artists' 
                                className='nav-link nav-link-hover'>
                                Artists
                            </NavLink>
                        </li>
                        <li>
                            <div className='nav-link nav-link-hover burger'>
                                <FaEllipsisV color='white' />
                            </div>
                        </li>
                    </ul>

                    <ul className='row'>
                        <li>
                            <NavLink className='nav-link user-submit' to='/Upload'>
                                Upload
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link user-submit' to='/Create'>
                                Create
                            </NavLink>
                        </li>
                    </ul>
                    
                    <ul className='row'>
                    <NavLink className='nav-link login-nav-link' to='/Login'>
                        <li className='user-icon-container'>
                            <FaUserAlt color='white' />
                        </li>
                        <li style={styles.loginText}>
                            Log In
                        </li>
                    </NavLink>
                    </ul>
                </nav>
            </Router>

            <SearchBar />
        </div>
    )
}