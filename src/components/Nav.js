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
                    
                    <Link to='/Home'><img style={styles.logo} src='https://uc928ebac87ad1d7ad4d2624fc0a.previews.dropboxusercontent.com/p/thumb/AA5JjVTGZf7kJ19UHF3qTHYS1sxy5_SHyhXOhyioVnD2vFpxGBDzbKovGHz7smxDQYKLDQz79gt9BEBHBauQO6yt1vjraZ72VQ6VC8_WjjNN105LWhYaMXrCXWAJyd6ztq1aY_goU0nTz9gwCb5GjMvwVq-z6kX5L4wg9ml0N1cWEc6DXfdBNx2m49n8Kt0696uguCBwGHwx_oElTT9zRgdvKdM2dn8MT6-kXIkAXMKu7ymxuOly4nMbXvxyVPDKEa93Crf1HUJcKq_qjBuzNAVRjykSq_UEwRcBG9u8ekeXacmLsO3XAhCTqaABnpbMuw4QgaakW0-gPo5o0JqC0vIHba9kURf1CRyOXWjaxqsNIg/p.png?fv_content=true&size_mode=5' alt='GIPHY logo' /></Link>
                    
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