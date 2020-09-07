import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { FaBolt, FaChevronRight } from 'react-icons/fa'
import useFetch from '../hooks/useFetch'

const iconStyle = {
    width: '20px',
    height: '27px',
    color: '#992762'
}

const api = 'D4NJn0Y2lqBrdx3rzoV7Fm15m0KBDRTI'

export default function Artists() {
    const { loading, data: gifs, error } = useFetch (
        `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=artists&limit=25&offset=0&rating=g&lang=en` 
    )

    /* No API endpoint for artists specifically so we're using the search with query "Artists" endpoint and pulling the 
    gifs and usernames from the results to display when each gif is hovered over */

    if(loading === true) {
        return <p>Loading</p>
    }

    if(error) {
        return <h1 className='error'>{error}</h1>
    }

    return (
        <div className='container'>
            <Router>
                <div className='artists-container'>

                    <div className='gif-container-header'>
                        <div>
                            <FaBolt style={iconStyle} />
                            <span className='gif-header-text'>Artists</span>
                        </div>
                        <div>
                            <Link className='gifs-header-link'>All GIPHY Artists</Link>
                            <FaChevronRight className='gifs-header-chevron' />
                        </div>
                    </div>

                    <div className='gif-scroll artists-scroll'>
                        <ul className='row'>
                                {gifs.data.map(gif => {
                                    return (
                                        <li key={gif.id}>
                                            <img className='gifs-to-scroll' src={gif.images.downsized.url} alt='Artists'></img>
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
