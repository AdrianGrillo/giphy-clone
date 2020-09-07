import React from 'react'
import MdSearch from 'react-ionicons/lib/MdSearch'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const searchIconStyle = {
    height: '36px',
    width: '36px',
    position: 'relative',
    top: '8.12px'
}

export default function SearchBar() {
    const [input, setInput] = React.useState('')
    const [placeholderText, setPlaceholderText] = React.useState('Search all the GIFs and Stickers')

    const updateInput = (e) => {
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
        <div className='container'>
            <Router>
                <form className='row'>
                    <input 
                        className='search-bar'
                        placeholder={placeholderText}
                        type='text'
                        value={input}
                        onChange={(e) => updateInput(e)}
                    /> 
                    <Link to={`/?search=`}>
                        <div className='search-btn'>
                            <MdSearch color='white' style={searchIconStyle} />
                        </div>
                    </Link>
                </form>
            </Router>
        </div>
    )
}