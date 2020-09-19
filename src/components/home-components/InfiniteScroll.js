import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { FaDice, FaChevronRight } from 'react-icons/fa'
import useAxios from '../hooks/useAxios'

const api = 'D4NJn0Y2lqBrdx3rzoV7Fm15m0KBDRTI'

export default function InfiniteScroll() { 
    const { loading, error, data: gifs } = useAxios(
        `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=random+search+lol&limit=24&rating=g&lang=en`
    )

    /* GIPHY API doesn't supply more than a single random gif at a time so here we're searching the word random and displaying
    the results instead of making 24 different API calls everytime the page loads more GIFs */

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>{error}</div>
    }

    return (
        <div className='container'>
            <Router>
                <div className='infinite-scroll-container'>

                    <div className='gif-container-header'>
                        <div className='gif-scroll-header'>
                            <FaDice className='gif-header-icon' color='#ff3399'/>
                            <span className='gif-header-text'>Random GIFs</span>
                        </div>
                        <div>
                            <Link to='#' className='gifs-header-link'>All Random GIFs 
                            <FaChevronRight className='gifs-header-chevron' /></Link>
                        </div>
                    </div>

                    <div className='infinite-scroll-gifs'>
                        {gifs.data.map(gif => {
                            /* Create a ref to item 24, when this item is displayed it will trigger the infinite scroll hook */
                            return (
                                <div key={gif.id}>
                                    <div>
                                        <div id='zoom-container'>
                                            <img src={gif.images.fixed_height.url} alt='Random GIF'></img>
                                        </div>
                                        <div className='box-shadow-one'></div>
                                        <div className='box-shadow-two'></div>
                                        <div className='box-shadow-three'></div>
                                    </div>
                                </div>
                            )
                        })}     
                    </div>

                </div>
            </Router>
        </div>
    )
}

