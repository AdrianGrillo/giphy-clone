import React from 'react'
// import SideBar from './SideBar'
import useAxios from '../../hooks/useAxios'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import Card from '../Card'

const api = 'D4NJn0Y2lqBrdx3rzoV7Fm15m0KBDRTI'

// Components for pages linked in the nav are laid out in order as the appear on each page

export function Header({ header }) {
    return (
        <div>
            <h1>{header}</h1>
            <p className='relative handle'>@{header.toLowerCase().split(' ')}</p>
        </div>
    )
}

export function FourPanelStickers({ headerLink, query }) {

    // Since the earch query changes depending on what page is being displayed, the query is passed from the parent
    // component as a prop so that this component can be reused for every nav page
    const {loading, error, data: stickers} = useAxios(
        `https://api.giphy.com/v1/stickers/search?api_key=${api}&q=${query}&limit=4&offset=0&rating=g&lang=en`
    )

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>Error</div>
    }

    return (
        <div>
            <Link to='#' className='gifs-header-link'>
                {headerLink}
                <FaChevronRight className='relative gifs-header-chevron'/>
            </Link>

            <div className='row flex nav-linked-stickers-container'>
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

export function ThreePanelImageBoard({ alt, headerLink, query }) {
    // Since this component is being used for multiple categories, we pass each category as a query for the search to
    //avoid making multiple API calls inside of a single component

    const { loading, error, data: gifs } = useAxios(
        `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${query}&limit=3&offset=2&rating=g&lang=en`
    )

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>Error</div>
    }

    return (
        <div className='featured-gifs'>

            <Link to='#' className='gifs-header-link'>
                    {headerLink}
                    <FaChevronRight className='relative gifs-header-chevron'/>
                </Link>

            <div className='row flex three-panel-board'>
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

export function AllTheGifs({ header, gifs }) {
    return (
        <div>
            <h1>{`All The ${header}`}</h1>

            <div className='row nav-linked-gifs-container'>
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