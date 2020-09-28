import React from 'react'
import PropTypes from 'prop-types'

export default function Card({ gif, gifId }) {
    return (
        <div key={gifId}>
            <div>
                <div id='zoom-container'>
                    <img src={gif} alt='Random GIF'></img>
                </div>
                <div className='box-shadow-one'></div>
                <div className='box-shadow-two'></div>
                <div className='box-shadow-three'></div>
            </div>
        </div>
    )
}

Card.propTypes = {
    gif: PropTypes.string.isRequired,
    gifId: PropTypes.string.isRequired
}