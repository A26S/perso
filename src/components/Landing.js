import React, { useRef, memo } from 'react'
import useWindow from '../hooks/useWindow'
import useParallax from '../hooks/useParallax'

const Landing = () => {
    const { width } = useWindow()
    const name = useRef()
    const bio = useRef()
    useParallax({
        el: name,
        overflow: -300
    })

    return (
        <div id="landing" className="landing">
            <h1 ref={name}>Ali Saidik</h1>
            <h2 ref={bio}>Software engineer.{width < 700 ? <br/> : ' '}London-based.</h2>
        </div>
    )
}

export default memo(Landing)