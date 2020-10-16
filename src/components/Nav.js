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
        <>
            <nav className='nav-container'>
                
                <Link to='/'><img style={styles.logo} src='https://i.ibb.co/z5csKC6/giphy-logo.png' alt='GIPHY logo' /></Link>
                
                <ul className='row'>
                    {navLinks.map((link, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    // Set the URL path to whatever the text of the link is
                                    to={`/${link}`}
                                    className='nav-link'
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
                        <li className='relative'>
                            <FaUserAlt color='white' />
                        </li>
                        <li style={styles.loginText}>
                            Log In
                        </li>
                    </Link>
                </ul>
            </nav>

            <SearchBar />
        </>
    )
}