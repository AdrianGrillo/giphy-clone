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
                    
                    <Link to='/Home'><img style={styles.logo} src='https://uc8a73b280bff26fabfd53eb48fe.previews.dropboxusercontent.com/p/thumb/AA6VJkG06ZhdxfvPC7IuDR0uB0AQkHwNqtc4SlKXTn5F9k7hj78tgh84JGmAU-AyXL3juijrhY_joILMSbmrjr93pSBXznJ9XlMEiQHHeQ7Kz1d0UEsmBbSHrEv5LNh4oqvmsXclDPdB4m-o7sGkHt65n6TnUTx8fXkWwQjq_ElUfsJTrGO82SQ2YFKdyWbxihMUZ-XwMyja5J0pEyYINaS2XzS85TjCGWYKxohX6DAO2eY1dAGX9Kr21oApIvCi0-FyUrSs2ET8M4Tap-bQaqn_zXykYalilBNIuc9JZ-YTHum3qRHO2z77DpDiwiI6_mEhQmgUvZCbYc0qddrlbqAkdKTFwXNA9BPGOlRi56c5Vw/p.png?fv_content=true&size_mode=5' alt='GIPHY logo' /></Link>
                    
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