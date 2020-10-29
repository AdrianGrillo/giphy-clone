import React from 'react'
import SideBar from './SideBar'
import useAxios from '../../hooks/useAxios'
import { Header, FourPanelStickers, ThreePanelImageBoard, AllTheGifs } from './NavLinkedComponents'
import Loading from '../Loading'

const api = 'D4NJn0Y2lqBrdx3rzoV7Fm15m0KBDRTI'

// Each Nav page is in the order the appear in on the nav bar from left to right

// Each NavPage component renders child components from NavLinkedComponents.js with certain prop values changed. This pattern
// repeats in each NavPage component being rendered with slight differences in the values passed to them

function ReactionsPage() {
    const {loading, error, data: gifs} = useAxios(
        `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=reactions&limit=28&offset=0&rating=g&lang=en`
    )

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <div className='error'>Error...</div>
    }

    return (
        <div className='flex'>
            <SideBar
                tagline='Dont tell it to me, GIF it to me!'
                placeholder='Reaction GIFs'
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
        return <Loading />
    }

    if(error) {
        return <div className='error'>Error...</div>
    }

    return (
        <div className='flex'>
            <SideBar
                tagline='Get the latest GIFs from movies, TV, music, celebrities.'
                placeholder='Entertainment GIFs'
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
        return <Loading />
    }

    if(error) {
        return <div className='error'>Error...</div>
    }

    return (
        <div className='flex'>
            <SideBar
                tagline='Your go-to for any and all sports GIFs! LeBron, Ronaldo, Gronk, Serena...We’ve got them all!'
                placeholder='Sports GIFs'
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

function StickersPage() {
    const {loading, error, data: stickers} = useAxios(
        `https://api.giphy.com/v1/stickers/trending?api_key=${api}&limit=25&rating=g`
    )

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <div className='error'>Error</div>
    }

    return (
        <div className='flex'>
            <SideBar 
                tagline='Send some stickers to all your friends, and frenemies! They wont believe their eyes!'
                placeholder='Stickers'
                img={stickers.data[0].images.fixed_height.url}
            />

            <div className='offset-container'>
                <Header header='Stickers' />

                <FourPanelStickers 
                    headerLink='Programming Stickers'
                    query='programming'
                />

                <ThreePanelImageBoard 
                    alt='Gifs of stickers'
                    headerLink='GIFs of Stickers'
                    query='giphy+stickers'
                />

                <div>
                    <h1>All The Stickers</h1>

                    <div className='nav-linked-gifs-container stickers-background'>
                        {stickers.data.slice(4).map(sticker => {
                            return (
                                <li key={sticker.id}>
                                    <img src={sticker.images.fixed_height.url} alt='Trending Stickers'></img>
                                </li>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

function About() {
    return (
        <div className='flex'>
            <SideBar 
                tagline='Self-taught ReactJS developer and CS student seeking a position to grow my skills in.'
                placeholder='Anything'
            />
            <div className='offset-container'>
                <h1>About This ReactJS Project</h1>

                <h3><a href='https://github.com/AdrianGrillo/giphy-clone' alt='github link'>Github Repository</a></h3>

                <h3>Functionality includes:</h3>

                <h4>
                    • Successful integration of a third party API into a web page <br /><br />
                    • Utilization of SASS to add responsive design elements <br /><br />
                    • Full searchbar functionality <br /><br />
                    • Reusable React components
                </h4>

                <hr color='grey' />

                <h3>Other Cool Things:</h3>

                <h4>
                    • Full component tree available in the repository README <br /><br />
                    • All custom CSS (No Bootstrap or Styled Components) <br /><br />
                    • Code Splitting
                </h4>

                <hr color='grey' />

                <h3>Deployed using Netlify</h3>
            </div>
        </div>
    )
}

export default function NavLinkedPage({ location }) {
    const path = location.pathname

    return (
        <>
            {/* Render whichever component matches the URL's current path. */}
            {
            path === '/Reactions' ? <ReactionsPage /> 
                : path === '/Entertainment' ? <EntertainmentPage /> 
                : path === '/Sports' ? <SportsPage />
                : path === '/Stickers' ? <StickersPage />
                : <About />
            }
        </>
    )
}
