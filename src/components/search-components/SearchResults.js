import React from 'react'
import '../../css/search-results.css'
import useAxios from '../../hooks/useAxios'
import { NavLink } from 'react-router-dom'
import Loading from '../Loading'
import PropTypes from 'prop-types'

const api = 'D4NJn0Y2lqBrdx3rzoV7Fm15m0KBDRTI'

const activeStyle = {
    background: '#39ba6d'
}

function GifSearchResults({ location }) {
    const query = location.pathname.split('+')[1]

    const {loading, error, data: gifs} = useAxios(
        `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${query}&limit=48&offset=0&rating=g&lang=en`
    )

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <h1 className='error'>Error</h1>
    }

    return (
        <div className='gif-container'>
            {gifs.data.map(gif => {
                return (
                    <li key={gif.id}>
                        <img src={gif.images.fixed_height.url} alt='search result gif'></img>
                    </li>
                )
            })}
        </div>
    )
}

GifSearchResults.propTypes = {
    location: PropTypes.string.isRequired
}

function StickerSearchResults({ location }) {
    const query = location.pathname.split('+')[1]

    const {loading, error, data: gifs} = useAxios(
        `https://api.giphy.com/v1/stickers/search?api_key=${api}&q=${query}&limit=48&offset=0&rating=g&lang=e`
    )

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <h1 className='error'>Error</h1>
    }

    return (
        <div className='gif-container stickers stickers-background'>
            {gifs.data.map(gif => {
                return (
                    <li key={gif.id}>
                        <img src={gif.images.fixed_height.url} alt='search result gif'></img>
                    </li>
                )
            })}
        </div>
    )
}

StickerSearchResults.propTypes = {
    location: PropTypes.string.isRequired
}

export default function SearchResults({ location }) {
    // The search query is after the plus sign in our route so here we're splitting the route to get the search
    const query = location.pathname.split('+')[1]
    // The type of content the page is diaplying is after the '=' sign and before the '+' sign in the url
    const type = location.pathname.split('=')[1].split('+')[0]

    const navLinks = ['GIFs', 'Stickers']

    return (
        <div>
            <ul className='search-header row'>
                <li>
                    <h1>{query}</h1>
                </li>
                <li>
                    {/* Tell the user what type of content we're displaying based on the url path */}
                    <h5>48 {type === 'gifs' ? 'GIFs' : 'Stickers'}</h5>
                </li>
            </ul>

            <div className='row selector-container'>
                {navLinks.map((link, index) => {
                    return (
                        <NavLink
                            key={index}
                            to={`/search=${link.toLowerCase()}+${query}`}
                            className='content-selector'
                            activeStyle={activeStyle}
                        >
                            {link}
                        </NavLink>
                    )
                })}
            </div>

            {/* If 'gifs is in our path then render the gifs component, if not, then render the stickers component */}
            {location.pathname.substr(8, 4) === 'gifs'
                ? <GifSearchResults location={location} />
                : <StickerSearchResults location={location} />
            }

        </div>
    )
}

SearchResults.propTypes = {
    location: PropTypes.string.isRequired
}