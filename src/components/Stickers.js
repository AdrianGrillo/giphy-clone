import React from 'react'
import useFetch from '../hooks/useFetch'
import { FaTelegramPlane, FaChevronRight } from 'react-icons/fa'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const api = 'D4NJn0Y2lqBrdx3rzoV7Fm15m0KBDRTI'

export default function Stickers() {
    const { loading, data: gifs, error } = useFetch(
        `https://api.giphy.com/v1/stickers/trending?api_key=${api}&limit=25&rating=g`
    )

    /* GIPHY API doesn't support video requests so instead we have a trending stickers section. Since stickers have no
    background by default we've added a keyframes gradient to the scrolling container */

    if(loading === true) {
        return <p>Loading</p>
    }

    if(error === true) {
        return <h1 className='error'>{error}</h1>
    }

    return (
        <div className='container'>
            <Router>
                <div className='stickers-container'>

                    <div className='gif-container-header'>
                        <div>
                            <FaTelegramPlane className='gif-header-icon' color='#cc00cc' />
                            <span className='gif-header-text'>Trending Stickers</span>
                        </div>
                        <div>
                            <Link to='#' className='gifs-header-link'>All Stickers
                            <FaChevronRight className='gifs-header-chevron' /></Link>
                        </div>
                    </div>

                    <div className='gif-scroll stickers-scroll'>
                        <ul className='row'>
                            {gifs.data.map(gif => {
                                return (
                                    <li key={gif.id}>
                                        <img className='gifs-to-scroll' src={gif.images.downsized.url} alt='Stickers'></img>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </Router>
        </div>
    )
}
