import React from 'react'
import PropTypes from 'prop-types'

// Have to import scss file here or else some styles won't load until after visiting SearchResults page due to code splitting
import '../scss/search-results.scss'

export default function Card({ gif, gifId, alt, className, width }) {
    const cardStyles = {
        boxShadow: {
            width: `${width}px`
        },
        boxShadowTwo: {
            width: `${width-12}px`,
            left: '6px'
        },
        boxShadowThree: {
            width: `${width-24}px`,
            left: '12px'
        }
    }

    return (
        <li key={gifId}>
            <div>
                <div className={className}>
                    <img src={gif} alt={alt}></img>
                </div>
                <div style={cardStyles.boxShadow}>
                    <div className='box-shadow-one' ></div>
                    <div className='relative box-shadow-two' style={cardStyles.boxShadowTwo}></div>
                    <div className='relative box-shadow-three' style={cardStyles.boxShadowThree}></div>
                </div>
            </div>
        </li>
    )
}

Card.propTypes = {
    gif: PropTypes.string.isRequired,
    gifId: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    className: PropTypes.string
}