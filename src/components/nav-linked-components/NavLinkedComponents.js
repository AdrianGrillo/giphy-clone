import React from 'react'
import useAxios from '../../hooks/useAxios'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import Card from '../Card'
import Loading from '../Loading'
import PropTypes from 'prop-types'
import { GoVerified } from 'react-icons/go'

const api = 'D4NJn0Y2lqBrdx3rzoV7Fm15m0KBDRTI'

// Components for pages linked in the nav are laid out in order as the appear on each page

export function Header({ header }) {
    const verifiedIconStyles = {
        height: '15px',
        width: '15px',
        color: '#42A5F5',
        marginLeft: '5px',
        marginBottom: '-2px'
    }

    return (
        <div>
            <h1>{header}</h1>
            <h5 className='relative handle'>
                @{header.toLowerCase().split(' ')}
                <GoVerified style={verifiedIconStyles} />
            </h5>
        </div>
    )
}

Header.propTypes = {
    header: PropTypes.string.isRequired
}

export function FourPanelStickers({ headerLink, query }) {

    // Since the search query changes depending on what page is being displayed, the query is passed from the parent
    // component as a prop so that this component can be reused for each nav page
    const {loading, error, data: stickers} = useAxios(
        `https://api.giphy.com/v1/stickers/search?api_key=${api}&q=${query}&limit=4&offset=0&rating=g&lang=en`
    )

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <div className='error'>Error</div>
    }

    return (
        <div>
            <Link to='#' className='gifs-header-link'>
                {headerLink}
                <FaChevronRight className='relative gifs-header-chevron'/>
            </Link>

            <div className='nav-linked-stickers-container'>
                {/* Render each sticker returned from the API as a Card component */}
                {stickers.data.map((sticker, index) => {
                    return (
                        <Card
                            gifId={sticker.id}
                            gif={sticker.images.fixed_height.url}
                            alt='Reaction Sticker'
                            width={200}
                            className='nav-linked-sticker stickers-background'
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

FourPanelStickers.propTypes = {
    headerLink: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired
}

export function ThreePanelImageBoard({ alt, headerLink, query }) {
    // Since this component is being used for multiple categories, we pass each category as a query for the search to
    //avoid making multiple API calls inside of a single component

    const { loading, error, data: gifs } = useAxios(
        `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${query}&limit=3&offset=2&rating=g&lang=en`
    )

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <div className='error'>Error</div>
    }

    return (
        <div className='featured-gifs'>

            <Link to='#' className='gifs-header-link'>
                {headerLink}
                <FaChevronRight className='relative gifs-header-chevron'/>
            </Link>

            <div className='three-panel-board'>
                {gifs.data.map(gif => {
                    return (
                        <li key={gif.id}>
                            <img src={gif.images.fixed_height.url} alt={alt}></img>
                        </li>
                    )
                })}
            </div>
        </div>
    )
}

ThreePanelImageBoard.propTypes = {
    headerLink: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export function AllTheGifs({ header, gifs }) {
    return (
        <div>
            <h1>{`All The ${header}`}</h1>

            <div className='nav-linked-gifs-container'>
                {gifs.data.slice(4).map(gif => {
                    return (
                        <li key={gif.id}>
                            <img src={gif.images.fixed_height.url} alt='header'></img>
                        </li>
                    )
                })}
            </div>
        </div>
    )
}

AllTheGifs.propTypes = {
    header: PropTypes.string.isRequired,
    gifs: PropTypes.object.isRequired
}