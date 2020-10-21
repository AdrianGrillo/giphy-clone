import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import PropTypes from 'prop-types'

export default function HorizontalScroll({ icon, title, href, gifs, type, styles }) {
    const chevronStyles = {
        width: '15px',
        height: '30px'
    }

    const scrollContainer = React.useRef()

    const scrollLeft = (e) => {
        e.preventDefault()

        scrollContainer.current.scrollLeft -= 800;
    }

    const scrollRight = (e) => {
        e.preventDefault()

        scrollContainer.current.scrollLeft += 800;
    }

    return (
        <>
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
            {/* Container with buttons is transparant and posiitoned absolutely over scroll container */}
            {gifs && 
                <>
                    <div className={`relative horizontal-${type}-container`}>
                        <button onClick={(e) => scrollLeft(e)} className='scroll-btn'>
                            <FaChevronLeft className='scroll-chevron' style={chevronStyles} />
                        </button>

                        <button onClick={(e) => scrollRight(e)} className='scroll-btn'>
                            <FaChevronRight className='scroll-chevron' style={chevronStyles} />
                        </button>
                    </div>

                    <div ref={scrollContainer} className={`relative gif-scroll ${type}-scroll`}>
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
                    </div> 
                </>
            }
        </>
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