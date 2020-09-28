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

    React.useEffect(() => {
        const id = window.setInterval(() => placeholderText === 'Search all the GIFs and Stickers' 
            ? setPlaceholderText('@username + tag to search within a verified channel') 
            : setPlaceholderText('Search all the GIFs and Stickers')
        , 2800)

        return () => window.clearInterval(id)
    })

    return (
        <div>
            <form className='row'>
                <input 
                    className='search-bar'
                    placeholder={placeholderText}
                    type='text'
                    value={input}
                    onChange={(e) => updateInput(e)}
                /> 
                <Link to={input.length > 0 ? `/search=${input}` : '/'} >
                    <button className='search-btn'>
                        <MdSearch color='white' style={searchIconStyle} />
                    </button>
                </Link>
            </form>
        </div>
    )
}