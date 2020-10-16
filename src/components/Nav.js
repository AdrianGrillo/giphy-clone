import React from 'react'
import SearchBar from './search-components/SearchBar'
import { Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'

export default function Nav() {
    const navLinks = ['Reactions', 'Entertainment', 'Sports', 'Stickers', 'About']

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

    return (
        <div>
            <nav className='flex nav-container'>
                
                <Link to='/'><img style={styles.logo} src='https://i.ibb.co/z5csKC6/giphy-logo.png' alt='GIPHY logo' /></Link>
                
                <ul className='row'>

                    {navLinks.map((link, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    to={`/${link}`}
                                    className='nav-link nav-link-hover'
                                >
                                    {link}
                                </Link>
                                <div className='nav-color-bar'></div>
                            </li>
                        )
                    })}
                </ul>

                <ul className='row'>
                    <li>
                        <Link className='nav-link user-submit' to='/Upload'>
                            Upload
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-link user-submit' to='/Create'>
                            Create
                        </Link>
                    </li>
                </ul>
                
                <ul className='row'>
                <Link className='relative nav-link login-nav-link' to='/Login'>
                    <li className='flex relative user-icon-container'>
                        <FaUserAlt color='white' />
                    </li>
                    <li style={styles.loginText}>
                        Log In
                    </li>
                </Link>
                </ul>
            </nav>

            <SearchBar />
        </div>
    )
}