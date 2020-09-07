import React from 'react'
import useFetch from '../hooks/useFetch'

const api = 'D4NJn0Y2lqBrdx3rzoV7Fm15m0KBDRTI'

export default function Stickers() {
    const { loading, data: gifs, error } = useFetch(
        `https://api.giphy.com/v1/stickers/trending?api_key=${api}&limit=25&rating=g`
    )

    if(loading === true) {
        return <p>Loading</p>
    }

    if(error === true) {
        return <h1 className='error'>{error}</h1>
    }

    return (
        <div className='container'>

            <div className='stickers-grid'>
                <div className='gif-container-header'>
                    <h1>hi</h1>
                </div>

                {/* stickers may not have scroll, maybe show 3 and thats it */}
                {/* maybe create a grid in css then fit the stickers to the boxes in the grid since they have differing sizes */}
                {/* header all fucked up so check and see whatsup with that when i pick back up */}

                <div className='sticker-grid'>
                    <ul className='row'>
                        {gifs.data.map(gif => {
                            return (
                                <li key={gif.id}>
                                    <img className='stickers-in-grid' src={gif.images.original.url} alt='Stickers'></img>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
