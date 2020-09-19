import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { FaDice, FaChevronRight } from 'react-icons/fa'
import useInfiniteScroll from '../hooks/useInfiniteScroll'

const api = 'D4NJn0Y2lqBrdx3rzoV7Fm15m0KBDRTI'

export default function InfiniteScroll() {
    const [offset, setOffset] = React.useState(0)
 
    const { loading, error, data: gifs } = useInfiniteScroll(
        `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=random+search+lol&limit=24&offset=${offset}&rating=g&lang=en`, offset
    )


    /* GIPHY API doesn't supply more than a single random gif at a time so here we're searching the word random and displaying
    the results instead of making 24 different API calls everytime the page loads more GIFs */

    const observer = React.useRef()
    const infiniteScrollTriggerRef = React.useCallback(node => {
        if(loading) return 
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                setOffset(prevOffset => prevOffset + 24)
            }
        })
        if(node) observer.current.observe(node)
    }, [loading])

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
                        {gifs.data.map((gif, index) => {
                            /* Create a ref to item 24, when this item is displayed it will trigger the infinite scroll hook */
                            if(gifs.data.length === index + 1) {
                                return (
                                <div ref={infiniteScrollTriggerRef} key={gif.id}>
                                    <div id='zoom-container'>
                                        <img src={gif.images.fixed_height.url} alt='Random GIF'></img>
                                    </div>
                                    <div className='box-shadow-one'></div>
                                    <div className='box-shadow-two'></div>
                                    <div className='box-shadow-three'></div>
                                </div>
                                )
                            } else {
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
                        }})}     
                    </div>

                </div>
            </Router>
        </div>
    )
}

