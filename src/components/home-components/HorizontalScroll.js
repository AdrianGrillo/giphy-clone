import React from 'react'
import { Link } from 'react-router-dom'
import {FaChevronRight } from 'react-icons/fa'
import PropTypes from 'prop-types'

export default function HorizontalScroll({ icon, title, href, gifs, type, styles }) {
    return (
        <div>
            <div className='gif-container-header'>
                <div>
                    {icon}
                    <span className='relative gif-header-text'>{title}</span>
                </div>
                <div>
                    <Link to='#' className='gifs-header-link'>All {href}
                    <FaChevronRight className='relative gifs-header-chevron' /></Link>
                </div>
            </div>

            {/* If gifs are provided to this component then render the horizontal scroll bar, else render only the header  */}
            {gifs && <div className={`flex relative gif-scroll ${type}-scroll`}>
                <ul className='row'>
                    {gifs.data.map(gif => {
                        return (
                            <li key={gif.id}>
                                <img 
                                    className='gifs-to-scroll' 
                                    style={styles}
                                    src={gif.images.fixed_height.url} 
                                    alt='{type} GIF'>
                                </img>
                            </li>
                        )
                    })}
                </ul>
            </div> }
        </div>
    )
}

HorizontalScroll.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    gifs: PropTypes.object,
    type: PropTypes.string,
    styles: PropTypes.shape({
        height: PropTypes.string,
        width: PropTypes.string,
        borderRight: PropTypes.string
    })
}