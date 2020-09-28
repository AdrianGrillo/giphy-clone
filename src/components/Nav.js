import React from 'react'
import SearchBar from './search-components/SearchBar'
import { Link } from 'react-router-dom'
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
    const navLinks = ['Reactions', 'Entertainment', 'Sports', 'Stickers', 'Artists']

    return (
        <div className='container'>
            <nav className='nav-container'>
                
                <Link to='/'><img style={styles.logo} src='https://uc84b3745fa1b19af39f185c939e.previews.dropboxusercontent.com/p/thumb/AA6EVDrQDwZ-TzaUvE722VxIFC4a5PCSecV01ncP_muY06_KgcfzBg1MXTReMnKYlbbqXyqbV7gbyeOFV8B_DvtFZUXX-IsKii8nrWXQIXMFa1Iy2a-LCnfuyHBsWYF9vXhVWlCk3DpmAH8fJVgtvuKpRAxWFA_K0JYOUS9vV__7BXo8pN7tHH5ymFjp0YHu6TQiOZkwybh5au_i8t-pfsHLxjIhjFaHvZqDpqnUMYj12Plc-hG60oBX9y7ntc36BLzFRYDEDuAI9SGmkdtAFpl3k31Ojq7sxImD8zV_2TQA3mqRfwUsNAg13uCxbIY-tLkigXBwGEzSGa4A2Kr4vzZwBQ9w3q31Vew9W-q4egkMQQ/p.png?fv_content=true&size_mode=5' alt='GIPHY logo' /></Link>
                
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

                    <li>
                        <div className='nav-link nav-link-hover burger'>
                            <FaEllipsisV color='white' />
                        </div>
                        <div className='nav-color-bar'></div>
                    </li>
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
                <Link className='nav-link login-nav-link' to='/Login'>
                    <li className='user-icon-container'>
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