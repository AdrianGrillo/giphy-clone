import React from 'react'
import SideBar from './SideBar'
import useAxios from '../../hooks/useAxios'
import { Header, FourPanelStickers, ThreePanelImageBoard, AllTheGifs } from './NavLinkedComponents'

const api = 'D4NJn0Y2lqBrdx3rzoV7Fm15m0KBDRTI'

// Each Nav page is in the order the appear in on the nav bar from left to right

function ReactionsPage() {
    const {loading, error, data: gifs} = useAxios(
        `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=reactions&limit=28&offset=0&rating=g&lang=en`
    )

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>Error...</div>
    }

    return (
        <div>
            <SideBar
                tagline='Dont tell it to me, GIF it to me!'
                img={gifs.data[0].images.fixed_height.url}
            />

            <div className='offset-container'>
                <Header header='Reaction GIFs' />

                <FourPanelStickers 
                    headerLink='Reaction Stickers'
                    query='reactions'
                />

                <ThreePanelImageBoard 
                    gifs={gifs.data.slice(1, 4)}
                    alt='Reaction GIFs'
                    headerLink='Featured Reactions'
                    query='Reactions'
                />

                <AllTheGifs 
                    header='Reaction GIFs'
                    gifs={gifs}
                />
            </div>
        </div>
    )
}

function EntertainmentPage() {
    const { loading, error, data: gifs } = useAxios(
        `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=entertainment+gifs&limit=28&offset=0&rating=g&lang=en`
    )

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>Error...</div>
    }

    return (
        <div>
            <SideBar
                tagline='Get the latest GIFs from movies, TV, music, celebrities.'
                placeholder='Entertainment'
                img={gifs.data[0].images.fixed_height.url}
            />

            <div className='offset-container'>
                <Header header='Entertainment GIFs' />

                <FourPanelStickers 
                    headerLink='Entertainment Stickers'
                    query='tv'
                />
                
                <AllTheGifs 
                    header='Entertainment GIFs'
                    gifs={gifs}
                />
            </div>
        </div>
    )
}

function SportsPage() {
    const { loading, error, data: gifs } = useAxios(
        `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=sports&limit=28&offset=0&rating=g&lang=en`
    )

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>Error...</div>
    }

    return (
        <div>
            <SideBar
                tagline='Your go-to for any and all sports GIFs! LeBron, Ronaldo, Gronk, Serena...We’ve got them all!'
                placeholder='Sports'
                img={gifs.data[0].images.fixed_height.url}
            />

            <div className='offset-container'>
                <Header header='Sports GIFs' />

                <FourPanelStickers 
                    headerLink='Sports Stickers'
                    query='sports'
                />

                <ThreePanelImageBoard 
                    alt='Sports GIFs'
                    headerLink='MLB GIFs'
                    query='baseball'
                />

                <ThreePanelImageBoard 
                    alt='Reaction GIFs'
                    headerLink='NBA GIFs'
                    query='nba'
                />

                <AllTheGifs 
                    header='Sports GIFs'
                    gifs={gifs}
                />
            </div>
        </div>
    )
}

export default function NavLinkedPage({ location }) {
    const path = location.pathname

    return (
        <div>
            {
            path === '/Reactions' ? <ReactionsPage /> 
                : path === '/Entertainment' ? <EntertainmentPage /> 
                : <SportsPage />
            }
        </div>
    )
}
