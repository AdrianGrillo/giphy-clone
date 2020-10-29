import React from 'react'
import MdTrendingUp from 'react-ionicons/lib/MdTrendingUp'
import { FaBolt, FaTelegramPlane, FaDice } from 'react-icons/fa'
import useAxios from '../../hooks/useAxios'
import HorizontalScroll from './HorizontalScroll'
import Card from '../Card'
import Loading from '../Loading'

const api = 'D4NJn0Y2lqBrdx3rzoV7Fm15m0KBDRTI'

function Trending() {
    const { loading, data: gifs, error } = useAxios(
        `https://api.giphy.com/v1/gifs/trending?api_key=${api}&limit=42&rating=g`
    )

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <h1 className='error'>Error</h1>
    }

    return (
        <div className='trending-container'>

            <HorizontalScroll 
                icon={<MdTrendingUp className='gif-header-icon' color='#cb00ff' />}
                title='Trending'
                href='Trending GIFs'
                gifs={gifs}
                type='trending'
                styles={{height: 145, width: 200}}
            />

        </div>
    )
}

function CodingGifs() {
    const { loading, data: gifs, error } = useAxios (
        `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=coding&limit=25&offset=0&rating=g&lang=en` 
    )
    
    // On the GIPHY site this section is titled 'Artists' but their API doesn't offer gifs of this type, so instead we're
    // populating this section with coding gifs

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <h1 className='error'>Error</h1>
    }

    return (
        <div className='coding-gifs-container'>

            <HorizontalScroll
                icon={<FaBolt className='gif-header-icon' color='#992762' />}
                title='Coding GIFs'
                href='Coding GIFs'
                gifs={gifs}
                type='coding-gifs'
                styles={{height: 250, width: 345}}
            />

        </div>
    )
}

function TrendingStickers() {
    const { loading, data: gifs, error } = useAxios(
        `https://api.giphy.com/v1/stickers/trending?api_key=${api}&limit=25&rating=g`
    )

    /* GIPHY API doesn't support video requests so instead we have a trending stickers section. Since stickers have no
    background by default we've added a keyframes gradient to the scrolling container */

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <h1 className='error'>Error</h1>
    }

    return (
        <div className='stickers-container'>

            <HorizontalScroll 
                icon={<FaTelegramPlane className='gif-header-icon' color='#cc00cc' />}
                title='Trending Stickers'
                href='Trending Stickers'
                gifs={gifs}
                type='stickers'
                styles={{height: 460, width: 350, borderRight: 'rgb(18,18,18) solid 3px'}}
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
        return <Loading />
    }

    if(error) {
        return <div className='error'>Error</div>
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
                            alt='Random GIF'
                            className='zoom-container'
                            width={342}
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
            <CodingGifs />
            <TrendingStickers />
            <Random />
        </div>
    )
}
