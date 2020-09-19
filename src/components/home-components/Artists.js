import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { FaBolt, FaChevronRight } from 'react-icons/fa'
import useAxios from '../hooks/useAxios'

const api = 'D4NJn0Y2lqBrdx3rzoV7Fm15m0KBDRTI'

export default function Artists() {
    const { loading, data: gifs, error } = useAxios (
        `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=hd&limit=25&offset=0&rating=g&lang=en` 
    )
    
    /* No API section dedicated to artists and GIPHY API search for multiple IDs at once function not working currently, so here 
    we're just searching for HD gifs and returning the results */

    if(loading) {
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
                            <FaBolt className='gif-header-icon' color='#992762' />
                            <span className='gif-header-text'>Artists</span>
                        </div>
                        <div>
                            <Link to='#' className='gifs-header-link'>All GIPHY Artists
                            <FaChevronRight className='gifs-header-chevron' /></Link>
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
