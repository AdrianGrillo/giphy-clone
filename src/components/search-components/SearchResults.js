import React from 'react'

export default function SearchResults({ location }) {

    const search = location.pathname.split('=')[1]

    return (
        <div>
            <div>
                <h1>{search}</h1>
            </div>
        </div>
    )
}
