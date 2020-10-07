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
            <nav className='flex'>
                
                <Link to='/'><img style={styles.logo} src='https://ucc1c6e29e5c0dc333f0bc673549.previews.dropboxusercontent.com/p/thumb/AA-aQysQrMy_rSNG3l9VdavdeCttCWxrhgRdIFeqy-dOiiTwo5Q2G7Whmv216ZtsFYkTeB1Iw38Pt-w6FSHG8_4t-sDq8wWo0oXXNymJJAE8VZSMiyUsJ1QuZNFGg3HOIbqKlLXuRv0ajRg-ilj6aTHSekDOsFUZ_R14o-p0uA_POVKuQVN9mYrVDPHFgK2431kF7khpgWMiJakQal2BBV-yaHtsrabZZWitI_r9Ls_x3ys17Ty2MxdbXvT56HUQEGikETktC7xIyZ8US4pJQrNhKFIh2n6RuaWLKYcNJHVEPYqPFgESgD2wrksP7Cb3Amn9baxyRV3arUqyjyQlAxaz_5LC1tusLBt7RczxDGO_UA/p.png?fv_content=true&size_mode=5' alt='GIPHY logo' /></Link>
                
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
                        <div className='nav-link nav-link-hover pointer'>
                            <FaEllipsisV color='white' />
                        </div>
                        <div className='nav-color-bar pointer'></div>
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