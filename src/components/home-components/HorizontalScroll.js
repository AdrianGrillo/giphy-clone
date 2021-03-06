import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import PropTypes from 'prop-types'

export default function HorizontalScroll({ icon, title, href, gifs, type, styles }) {
    const chevronStyles = {
        width: '15px',
        height: '30px'
    }

    // Referencing the container we want to scroll with the buttons
    const scrollContainer = React.useRef(0)
    // This state property dictates whether or not scroll buttons will be shown
    const [scrollValue, setScrollValue] = React.useState(0)

    const scrollLeft = () => {
        scrollContainer.current.scrollLeft -= 800
    }

    const scrollRight = () => {
        scrollContainer.current.scrollLeft += 800
    }

    const trackScroll = () => {
        setScrollValue(scrollContainer.current.scrollLeft)
    }

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
            {/* Container with buttons is transparant and positioned absolutely over scroll container */}
            {gifs && 
                <div>

                    <div className={`relative horizontal-${type}-container`}>
                        <button onClick={() => scrollLeft()} className='scroll-btn-left'>
                            {/* Show this button if container can be scrolled left */}
                            {scrollValue > 0 &&
                                <FaChevronLeft className='scroll-chevron' style={chevronStyles} />
                            }
                        </button>

                        <button onClick={() => scrollRight()} className='scroll-btn-right'>
                            {/* Show this button if container can be scrolled right */}
                            {scrollValue < 7450 &&
                                <FaChevronRight className='scroll-chevron' style={chevronStyles} />
                            }
                        </button>
                    </div>

                    {/* Create a reference to this container so the scrollLeft value can be adjusted, then onScroll invoke
                    the trackScroll function to disable buttons if container has been scrolled all the way to one side by
                    the user */}
                    <div 
                        ref={scrollContainer} 
                        onScroll={() => trackScroll()} 
                        className={`relative gif-scroll ${type}-scroll`}
                    >
                        <ul className='row'>
                            {gifs.data.map(gif => {
                                return (
                                    <li key={gif.id}>
                                        <img 
                                            className='gifs-to-scroll' 
                                            style={styles}
                                            src={gif.images.fixed_height.url} 
                                            alt={`${type} GIF`}>
                                        </img>
                                    </li>
                                )
                            })}
                        </ul>
                    </div> 

                </div>
            }
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
        height: PropTypes.number,
        width: PropTypes.number,
        borderRight: PropTypes.string
    })
}