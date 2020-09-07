import React from 'react'
import SearchBar from './SearchBar'
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom'
import { FaEllipsisV, FaUserAlt } from 'react-icons/fa'

export default function Nav() {
    return (
        <div className='container'>
            <Router>
                <nav className='nav-container'>
                    
                    <Link to='/Home'><img id='logo' src='https://uc0c684ec10e1b36faa1bde7bd63.previews.dropboxusercontent.com/p/thumb/AA7PJWouibgtUEtXmoCU0UkRRK5ea6a3CLMvE9EYRgo4hglxnshO9FQgU0F4yMbOutxYeZaS2xH36TYK1bdEGr9P8tdP0Ak54IWDkWB4_XXvW0PQNqSSIsOy1p79Cs4iSqLQYqt456wZVhwTmBPWAk6PSPsLFPb5_mDz-tQsVxOb9RQi4JdEgYzSVpL94rWIMGRJktn8k_urnpBjuKT3pKjQtuoQSUg_I-7JfMN06WMGiNnKhEbh5iNF49dqmTR4gfobVe-EtdNejO1lXdkXFpOMxAEevm_Yu1LDcERD3wnK1eJPQ8QjWvXfLGr6QSUYTqoEj9mmHBPwnp0kSf7l9TJMtCe1uboi6UwTMqjaKGNUqQ/p.png?fv_content=true&size_mode=5' alt='GIPHY logo' /></Link>
                    
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

                    <ul className='user-submit-container row'>
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
                    
                    <ul className='user-login-container row'>
                        <li className='user-icon-container'>
                            <FaUserAlt color='white' />
                        </li>
                        <li className='login-nav-link'>
                            <NavLink className='nav-link login-nav-link' to='/Login'>
                                Log In
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Router>

            <SearchBar />
        </div>
    )
}