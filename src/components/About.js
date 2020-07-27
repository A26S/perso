import React, { useRef, useLayoutEffect, memo } from 'react'
import useWindow from '../hooks/useWindow'

const About = () => {
    const about = useRef()
    const { width } = useWindow()
    
    useLayoutEffect(() => {
        width < 700 ? about.current.classList.add('mobile-about') : about.current.classList.remove('mobile-about')
    }, [width])

    return(
        <div id="about" className="about" ref={about}>
            I'm a 22 year old software engineer, based in London, currently looking for opportunities.
            <br/>
            I believe quality code can be written by having a deep understanding of <br/>the problem in front of you, combined with outside-of-the-box thinking.
        </div>
    )
}

export default memo(About)