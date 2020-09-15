import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import MdTrendingUp from 'react-ionicons/lib/MdTrendingUp'
import useFetch from '../hooks/useFetch'

const api = 'D4NJn0Y2lqBrdx3rzoV7Fm15m0KBDRTI'

export default function Trending() {
    const { loading, data: gifs, error } = useFetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${api}&limit=25&rating=g`
    )

    if(loading === true) {
        return <p>Loading</p>
    }

    if(error) {
        return <h1 className='error'>{error}</h1>
    }

    return (
        <div className='container'>
            
            <Router>
                <div className='trending-container'>

                    <div className='gif-container-header'>
                        <div>
                            <MdTrendingUp className='gif-header-icon' color='#cb00ff' />
                            <span className='gif-header-text'>Trending</span>
                        </div>
                        <div >
                            <Link className='gifs-header-link' to='/Trending'>All The GIFs
                            <FaChevronRight className='gifs-header-chevron' /></Link>
                        </div>
                    </div>

                    <div className='gif-scroll trending-scroll'>
                        <ul className='row'>
                            {gifs.data.map(gif => {
                                return (
                                    <li key={gif.id}>
                                        <img className='gifs-to-scroll trending-scroll' src={gif.images.fixed_height.url} alt='Trending'></img>
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