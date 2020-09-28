import React from 'react'
import MdTrendingUp from 'react-ionicons/lib/MdTrendingUp'
import { FaBolt, FaTelegramPlane, FaDice } from 'react-icons/fa'
import useAxios from '../../hooks/useAxios'
import HorizontalScroll from './HorizontalScroll'
import Card from '../Card.js'

const api = 'D4NJn0Y2lqBrdx3rzoV7Fm15m0KBDRTI'

function Trending() {
    const { loading, data: gifs, error } = useAxios(
        `https://api.giphy.com/v1/gifs/trending?api_key=${api}&limit=25&rating=g`
    )

    if(loading) {
        return <p>Loading</p>
    }

    if(error) {
        return <h1 className='error'>{error}</h1>
    }

    return (
        <div className='trending-container'>

            <HorizontalScroll 
                icon={<MdTrendingUp className='gif-header-icon' color='#cb00ff' />}
                title='Trending'
                href='Trending GIFs'
                gifs={gifs}
                type='trending'
                styles={{height: '145px', width: '200px'}}
            />

        </div>
    )
}

function Artists() {
    const { loading, data: gifs, error } = useAxios (
        `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=art&limit=25&offset=8&rating=g&lang=en` 
    )
    
    /* No API section dedicated to artists and GIPHY API search for multiple IDs at once function not working currently, so here 
    we're searching for 'art' gifs and returning the results */

    if(loading) {
        return <p>Loading</p>
    }

    if(error) {
        return <h1 className='error'>{error}</h1>
    }

    return (
        <div className='artists-container'>

            <HorizontalScroll
                icon={<FaBolt className='gif-header-icon' color='#992762' />}
                title='Artists'
                href='GIPHY Artists'
                gifs={gifs}
                type='artists'
                styles={{height: '250px', width: '400px'}}
            />

        </div>
    )
}

function Stickers() {
    const { loading, data: gifs, error } = useAxios(
        `https://api.giphy.com/v1/stickers/trending?api_key=${api}&limit=25&rating=g`
    )

    /* GIPHY API doesn't support video requests so instead we have a trending stickers section. Since stickers have no
    background by default we've added a keyframes gradient to the scrolling container */

    if(loading) {
        return <p>Loading</p>
    }

    if(error) {
        return <h1 className='error'>{error}</h1>
    }

    return (
        <div className='stickers-container'>

            <HorizontalScroll 
                icon={<FaTelegramPlane className='gif-header-icon' color='#cc00cc' />}
                title='Trending Stickers'
                href='Trending Stickers'
                gifs={gifs}
                type='stickers'
                styles={{height: '460px', borderRight: 'rgb(18,18,18) solid 3px'}}
            />

        </div>
    )
}

function Random() { 
    const { loading, error, data: gifs } = useAxios(
        `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=random+search+lol&limit=24&rating=g&lang=en`
    )

    /* GIPHY API doesn't supply more than a single random gif at a time so here we're searching the word random and displaying
    the results instead of making 24 different API calls everytime the page loads more GIFs */

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div className='error'>{error}</div>
    }

    return (
        <div className='random-gifs-container'>

            <HorizontalScroll 
                icon={<FaDice className='gif-header-icon' color='#ff3399' />}
                title='Random GIFs'
                href='Random GIFs'
            />  

            <div className='random-gifs'>
                {gifs.data.map(gif => {
                    return (
                        <Card 
                            key={gif.id} 
                            gif={gif.images.fixed_height.url} 
                            gifId={gif.id} 
                        />
                    )
                })}     
            </div>

        </div>
    )
}

export default function HomeComponents() {
    return (
        <div>
            <Trending />
            <Artists />
            <Stickers />
            <Random />
        </div>
    )
}
