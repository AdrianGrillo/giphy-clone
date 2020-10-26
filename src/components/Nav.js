import React from 'react'
import SearchBar from './search-components/SearchBar'
import { Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import MdMenu from 'react-ionicons/lib/MdMenu'

export default function Nav() {
    const [showMenu, setShowMenu] = React.useState(false)

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

    // const showMenu = () => {
    //     return <div className='burger-menu'>hi</div>
    // }

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

                {/* Only show this burger icon when the screen size is less than 1000px */}

                <div 
                    className='burger-container'
                >
                    <MdMenu  
                        className='burger'
                        style={styles.burger} 
                        color='white' 
                        onClick={() => setShowMenu(showMenu === false ? true : false)}
                    />

                    {/* If the burger icon is clicked, display our nav menu */}
                    {showMenu && 
                        <div className='burger-menu'>
                            <h2>Pages</h2> 
                            <hr width='80%' />
                            {navLinks.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <Link
                                            // Set the URL path to whatever the text of the link is
                                            to={`/${link}`}
                                            className='burger-link'
                                            // exit burger menu when clicking a page link inside of it
                                            onClick={() => setShowMenu(false)}
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                )
                            })}
                        </div>
                    }

                </div>
            </nav>

            <SearchBar />
        </>
    )
}