import React from 'react'
import '../../scss/nav-linked-components.scss'
import SmallSearchBar from '../search-components/SmallSearchBar'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import PropTypes from 'prop-types'

export default function Sidebar ({ img, tagline, placeholder }) {
    const trendingSearches = ['ReactJS', 'shipIt', 'hireMe', 'giphyClone', 'USF', 'stackOverflow', 'gitHub']

    return (
        <div className='sidebar-container'>
            <img src={img} alt={'Page Avatar'}></img>
            <p className='relative tagline'>{tagline}</p>

            <p>Follow on:</p>
            <div className='relative social-links-container'>
                <a href='http://www.facebook.com'><FaFacebookF /></a>
                <a href='http://www.twitter.com'><FaTwitter /></a>
                <a href='http://www.instagram.com'><FaInstagram /></a>
            </div>

            <SmallSearchBar placeholder={placeholder} />

            <hr color='grey' />

            <p>Trending Now</p>

            {trendingSearches.map((search, index) => {
                return (
                    <li key={index} className='trending-text'>
                        #{search}
                    </li>
                )
            })}

            <hr color='grey' />
        </div>
    )
}

Sidebar.propTypes = {
    img: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}