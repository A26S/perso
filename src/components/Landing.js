import React, { useRef, memo } from 'react'
import useWindow from '../hooks/useWindow'

const Landing = () => {
    const { width } = useWindow()
    const name = useRef()
    const bio = useRef()

    return (
        <div className="landing">
            <h1 ref={name}>Ali Saidik</h1>
            <h2 ref={bio}>Software engineer.{width < 700 ? <br/> : ' '}London-based.</h2>
        </div>
    )
}

export default memo(Landing)