import React from 'react'
import MdSearch from 'react-ionicons/lib/MdSearch'
import { Link } from 'react-router-dom'

export default function SmallSearchBar({ placeholder }) {
    const [input, setInput] = React.useState('')

    const updateInput = e => {
        setInput(e.target.value)
    }

    return (
        <form className='small-searchbar-container'>
            <input 
                placeholder={`Search ${placeholder}`}
                className='small-search-bar' 
                type='text'
                value={input}
                onChange={(e) => updateInput(e)}
            />
            {/* If there is nothing typed into the search bar when the user presses enter, take them back to the home page */}
            <Link to={input.length > 0 ? `/search=gifs+${input}` : '/'}>
                <button className='pointer'>
                    <MdSearch color='white' />
                </button>
            </Link>
        </form>
    )
}
