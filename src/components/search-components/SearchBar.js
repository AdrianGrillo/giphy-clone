import React from 'react'
import MdSearch from 'react-ionicons/lib/MdSearch'
import { Link } from 'react-router-dom'

const searchIconStyle = {
    height: '36px',
    width: '36px'
}

export default function SearchBar() {
    const [input, setInput] = React.useState('')
    const [placeholderText, setPlaceholderText] = React.useState('Search all the GIFs and Stickers')

    const updateInput = e => {
        setInput(e.target.value)
    }

    // Alternate the searchbar placeholder every 2.8 seconds
    React.useEffect(() => {
        const id = window.setInterval(() => placeholderText === 'Search all the GIFs and Stickers' 
            ? setPlaceholderText('@username + tag to search within a verified channel') 
            : setPlaceholderText('Search all the GIFs and Stickers')
        , 2800)

        return () => window.clearInterval(id)
    })

    return (
        <form className='row'>
            <input 
                className='search-bar'
                placeholder={placeholderText}
                type='text'
                value={input}
                onChange={(e) => updateInput(e)}
            /> 

            {/* If theres no query in the searchbar when the user presses enter, take them back to the home page */}
            <Link to={input.length > 0 ? `/search=gifs+${input}` : '/'} >
                <button className='pointer search-btn'>
                    <MdSearch color='white' style={searchIconStyle} />
                </button>
            </Link>
        </form>
    )
}